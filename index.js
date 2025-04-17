const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { default: htmlminifier } = require('html-minifier-terser');
const { minify_sync, minify } = require('terser');
const { readFile } = require('fs/promises');
/**
 * @this { import('webpack').LoaderContext<any> }
 */
module.exports = async function (source) {
    const options = this.getOptions() || {};
    const templatePath = this.resourcePath;
    
    const cwd = process.cwd();

    const data = {
        async: false,
        cache: false,
        devtool: false,
        ...options.data,
        client: true,
    };

    const compile = async (source, data) => {
        if(!!options.minify?.html) {
            source = await htmlminifier.minify(source, {
                minifyCSS: true,
                minifyJS: !!options.minify?.js,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
            })
        }

        let template = ejs.compile(source, data);
        if(!!options.minify?.js) {
            template = (await minify({
                [data.filename]: template.toString()
            }, {
                compress: {
                    unused: false,
                },
                parse: {
                    shebang: false
                }
            })).code;
        }

        return template;
    }


    const map = {};
    async function parseIncludes(location) {
        const regex = /(<%-\s*include\s*\(\s*)(['"]([^'"]+)['"])(\s*,?\s*([^)]*)\s*\)\s*%>)/g;
        let match;
        const absolutePath = path.resolve(location);
        let source = await readFile(absolutePath, 'utf-8');

        while ((match = regex.exec(source)) !== null) {
            let fullMatch = match[0];
            let originalPath = match[2].replace(/['"]/g, '');

            const directory = path.dirname(absolutePath);
            const resolvedPath = path.resolve(directory, originalPath);
            const uniquePath = path.relative(cwd, resolvedPath);
            
            const contentWithIncludes = await parseIncludes(resolvedPath);
            const template = await compile(contentWithIncludes, {
                ...data,
                filename: path.relative(cwd, path.resolve(resolvedPath)), 
                root: cwd 
            });
            map[uniquePath] = `(d2)=>(${template.toString()})(d2, undefined, (path, data) => map[path](data))`;

            const replaced = fullMatch.replace(originalPath, `${uniquePath}`);
            source = source.replace(fullMatch, replaced);
        }
        return source;
    }


    function fnMapToString(map) {
        let value = '';
        for(const [k, v] of Object.entries(map)) {
            value += `'${k}': (d)=>(${v.toString()})(d),\r\n`
        }
        return `{${value}}`;
    }
    
    source = await parseIncludes(templatePath);
    const template = await compile(source, {
        ...data,
        filename: path.relative(cwd, path.resolve(templatePath)), 
        root: cwd 
    });
    
    return [
        `const map = ${fnMapToString(map)};`,
        `const template = ${template.toString()};`,
        `module.exports = ${((data) => template(data, undefined, (path, data) => map[path](data))).toString()}`
    ].join('');
}
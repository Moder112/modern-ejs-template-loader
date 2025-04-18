const path = require('path');
const ejs = require('ejs');
const { minify: htmlMinify } = require('html-minifier-terser');
const { minify } = require('terser');
const { readFile } = require('fs/promises');

// @todo cache common files with a virutal module 
// https://github.com/sysgears/webpack-virtual-modules

/**
 * @this { import('webpack').LoaderContext<any> }
 */
module.exports = async function (source) {
    const options = this.getOptions() || {};
    const templatePath = this.resourcePath;
    
    const cwd = process.cwd();
    const relative = (...p) => path.relative(cwd, path.resolve(...p));

    const data = {
        async: false,
        cache: false,
        devtool: false,
        ...options.data,
        client: true,
    };

    // compile template string while applying transformations
    const compile = async (source, data) => {
        if(!!options.minify?.html) {
            source = await htmlMinify(source, {
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
                parse: {
                    shebang: false
                }
            })).code;
        }

        return template;
    }
    
    const map = {};
    // parses ejs includes and saves them to a map
    async function parseIncludes(location) {
        // match ejs includes
        const regex = /(<%-\s*include\s*\(\s*)(['"]([^'"]+)['"])(\s*,?\s*([^)]*)\s*\)\s*%>)/g;
        let match;
        const absolutePath = path.resolve(location);
        let source = await readFile(absolutePath, 'utf-8');

        while ((match = regex.exec(source)) !== null) {
            let fullMatch = match[0];
            let originalPath = match[2].replace(/['"]/g, '');

            const directory = path.dirname(absolutePath);
            const relativePath = relative(directory, originalPath);
            prasedSource = await parseIncludes(relativePath);

            const template = await compile(prasedSource, {
                ...data,
                filename: relativePath,
                root: cwd 
            });

            const id = relativePath.replace(/\\|\//g, '-');

            // we need to wrap the function to inject our include map
            map[id] = `(d)=>(${template.toString()})(d, undefined, (p, d) => m[p](d))`;

            // replace the original include path with ids for the parsed template
            const replaced = fullMatch.replace(originalPath, id);
            source = source.replace(fullMatch, replaced);
        }
        return source;
    }

    // stringifies all the compiled templates in a way where it can be evaluated as valid javascript
    function fnMapToString(map) {
        let value = '';
        for(const [k, v] of Object.entries(map)) {
            value += `'${k}': ${v},`;
        }
        return `{${value}}`;
    }
    
    source = await parseIncludes(templatePath);
    const template = await compile(source, {
        ...data,
        filename: relative(templatePath), 
        root: cwd 
    });
    
    return [
        `const m = ${fnMapToString(map)};`,
        `const template = ${template.toString()};`,
        `module.exports = ${((data) => template(data, undefined, (p, d) => m[p](d))).toString()}`
    ].join('');
}
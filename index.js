const path = require('path');
const fs = require('fs');
const { compile } = require('ejs');
/**
 * @this { import('webpack').LoaderContext<any> }
 */
module.exports = function (source) {
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

    const map = {};
    function parseIncludes(location) {
        const regex = /(<%-\s*include\s*\(\s*)(['"]([^'"]+)['"])(\s*,?\s*([^)]*)\s*\)\s*%>)/g;
        let match;
        const absolutePath = path.resolve(location);
        let source = fs.readFileSync(absolutePath, 'utf-8');

        while ((match = regex.exec(source)) !== null) {
            let fullMatch = match[0];
            let originalPath = match[2].replace(/['"]/g, '');

            const directory = path.dirname(absolutePath);
            const resolvedPath = path.resolve(directory, originalPath);
            const uniquePath = path.relative(cwd, resolvedPath);
            
            const contentWithIncludes = parseIncludes(resolvedPath);
            const template = compile(contentWithIncludes, {
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
    
    source = parseIncludes(templatePath);
    const template = compile(source, {
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
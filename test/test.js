/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ejs/grandparent.ejs":
/*!*****************************!*\
  !*** ./ejs/grandparent.ejs ***!
  \*****************************/
/***/ ((module) => {

eval("const map = {'ejs\\collision\\child.ejs': (d)=>((d2)=>(function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm);\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"collision child - <%= text %>\"\n  , __filename = \"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\collision\\\\child.ejs\";\ntry {\n  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n  with (locals || {}) {\n    ; __append(\"collision child - \")\n    ; __append(escapeFn( text ))\n  }\n  return __output;\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n//# sourceURL=\"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\collision\\\\child.ejs\"\n\n})(d2, undefined, (path, data) => map[path](data)))(d),\r\n'ejs\\collision\\parent.ejs': (d)=>((d2)=>(function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm);\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"Collision Parent: <%- include('ejs\\\\collision\\\\child.ejs', { text: 'bar' }) %>\"\n  , __filename = \"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\collision\\\\parent.ejs\";\ntry {\n  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n  with (locals || {}) {\n    ; __append(\"Collision Parent: \")\n    ; __append( include('ejs\\collision\\child.ejs', { text: 'bar' }) )\n  }\n  return __output;\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n//# sourceURL=\"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\collision\\\\parent.ejs\"\n\n})(d2, undefined, (path, data) => map[path](data)))(d),\r\n'ejs\\child.ejs': (d)=>((d2)=>(function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm);\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"child - <%= text %>\"\n  , __filename = \"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\child.ejs\";\ntry {\n  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n  with (locals || {}) {\n    ; __append(\"child - \")\n    ; __append(escapeFn( text ))\n  }\n  return __output;\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n//# sourceURL=\"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\child.ejs\"\n\n})(d2, undefined, (path, data) => map[path](data)))(d),\r\n'ejs\\parent.ejs': (d)=>((d2)=>(function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm);\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"Parent: <%- include('ejs\\\\child.ejs', { text: 'foo' }) %>\"\n  , __filename = \"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\parent.ejs\";\ntry {\n  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n  with (locals || {}) {\n    ; __append(\"Parent: \")\n    ; __append( include('ejs\\child.ejs', { text: 'foo' }) )\n  }\n  return __output;\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n//# sourceURL=\"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\parent.ejs\"\n\n})(d2, undefined, (path, data) => map[path](data)))(d),\r\n};const template = function anonymous(locals, escapeFn, include, rethrow\n) {\nrethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {\n  var lines = str.split('\\n');\n  var start = Math.max(lineno - 3, 0);\n  var end = Math.min(lines.length, lineno + 3);\n  var filename = esc(flnm);\n  // Error context\n  var context = lines.slice(start, end).map(function (line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? ' >> ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'ejs') + ':'\n    + lineno + '\\n'\n    + context + '\\n\\n'\n    + err.message;\n\n  throw err;\n};\nescapeFn = escapeFn || function (markup) {\n  return markup == undefined\n    ? ''\n    : String(markup)\n      .replace(_MATCH_HTML, encode_char);\n};\nvar _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n;\nvar __line = 1\n  , __lines = \"\\nCollision: <%- include('ejs\\\\collision\\\\parent.ejs', {}) %>\\nGrandparent: <%- include('ejs\\\\parent.ejs', {}) %>\"\n  , __filename = \"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\grandparent.ejs\";\ntry {\n  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n  with (locals || {}) {\n    ; __append(\"\\nCollision: \")\n    ; __line = 2\n    ; __append( include('ejs\\collision\\parent.ejs', {}) )\n    ; __append(\"\\nGrandparent: \")\n    ; __line = 3\n    ; __append( include('ejs\\parent.ejs', {}) )\n  }\n  return __output;\n} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n\n//# sourceURL=\"C:\\\\Users\\\\Aleksander\\\\Documents\\\\_Programming\\\\JS\\\\modern-ejs-template-loader\\\\test\\\\ejs\\\\grandparent.ejs\"\n\n};module.exports = (data) => template(data, undefined, (path, data) => map[path](data))\n\n//# sourceURL=webpack:///./ejs/grandparent.ejs?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { it } = __webpack_require__(/*! node:test */ \"node:test\");\nconst template1 = __webpack_require__(/*! ./ejs/grandparent.ejs */ \"./ejs/grandparent.ejs\");\n\nit('test', () => {\n    console.log(template1());\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "node:test":
/*!****************************!*\
  !*** external "node:test" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:test");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
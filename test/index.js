const { it } = require("node:test");
const template1 = require("./ejs/grandparent.ejs");

it('test', () => {
    console.log(template1());
})
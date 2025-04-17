const { it } = require("node:test");
const template1 = require("./ejs/context/parent.ejs");

it('test', () => {
    console.log(template1());
})
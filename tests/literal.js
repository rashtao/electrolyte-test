delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader("literal", IoC.node('tests/literal'));
	IoC.literal("config2", require("./literal/config2"))
});

describe('electrolyte', function () {
	it('literal', function () {
		expect(IoC.create("literal/config1")).to.equal(require("./literal/config1"));
		expect(IoC.create("config2")).to.equal(require("./literal/config2"));
	});
});



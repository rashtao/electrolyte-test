delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("literal/config1", require("../../injectables/not_annotated/literal/config1"), "@literal");
});

describe('registerLiteralNotAnnotated', function () {
	it('instancesEquality', function () {
		expect(IoC.create("literal/config1")).to.eql(require("../../injectables/not_annotated/literal/config1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("literal/config1")).to.equal(IoC.create("literal/config1"));
	});
});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader(IoC.node("tests/injectables/setter_annotated/literal"));
});

describe('loadLiteral_setter', function () {
	it('instancesEquality', function () {
		expect(IoC.create("config1")).to.eql(require("../../injectables/setter_annotated/literal/config1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("config1")).to.equal(IoC.create("config1"));
	});
	it('instancesIdentity2', function () {
		expect(IoC.create("config2").config1).to.equal(IoC.create("config1"));
	});
});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

describe('literal', function () {
	before(function () {
		IoC.loader("literal", IoC.node("tests/injectables/annotated/literal"));
	});
	it('instancesEquality', function () {
		expect(IoC.create("literal/config1")).to.eql(require("../../injectables/annotated/literal/config1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("literal/config1")).to.equal(IoC.create("literal/config1"));
	});
});



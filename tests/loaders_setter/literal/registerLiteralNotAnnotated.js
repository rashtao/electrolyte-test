delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

var c1 = require("../../injectables/not_annotated/literal/config1");
var c2 = require("../../injectables/not_annotated/literal/config2");

// in order to avoid overrides
c1 = JSON.parse(JSON.stringify(c1));
c2 = JSON.parse(JSON.stringify(c2));

before(function () {
	IoC.register("config1", c1, "@literal");
	IoC.register("config2", c2, ["config1"], "@literal", "setterInjection");
});

describe('registerLiteralNotAnnotated_setter', function () {
	it('instancesEquality', function () {
		expect(IoC.create("config1")).to.eql(require("../../injectables/not_annotated/literal/config1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("config1")).to.equal(IoC.create("config1"));
		expect(IoC.create("config2").config1).to.equal(IoC.create("config1"));
	});
});



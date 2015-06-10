delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.singleton("service1", require("../../injectables/setter_annotated/singleton/service1"));
	IoC.singleton("service2", require("../../injectables/setter_annotated/singleton/service2"));
	IoC.singleton("service3", require("../../injectables/setter_annotated/singleton/service3"));
});

describe('singletonWithoutDeps_setter', function () {
	it('instancesEquality', function () {
		expect(IoC.create("service1")).to.eql(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("service1")).to.eql(IoC.create("service1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("service1")).not.to.equal(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("service1")).to.equal(IoC.create("service1"));
	});
	it('injectedEquality', function () {
		expect(IoC.create("service3").service1).to.eql(require("../../injectables/setter_annotated/singleton/service1")());
	});
	it('injectedIdentity', function () {
		expect(IoC.create("service3").service1).to.equal(IoC.create("service1"));
	});
});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	// original singleton
	IoC.register("service1", require("../../injectables/setter_annotated/singleton/service1"));

	// service1 and secondInstanceOfService1 should be different objects
	IoC.register("secondInstanceOfService1", require("../../injectables/setter_annotated/singleton/service1"));

	// service1 and thirdInstanceOfService1 should be the same object
	IoC.literal("thirdInstanceOfService1", IoC.create("service1"));
});

describe('multipleSingletons_setter', function () {
	it('instancesEquality', function () {
		expect(IoC.create("service1")).to.eql(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("service1")).to.eql(IoC.create("service1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("service1")).not.to.equal(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("service1")).to.equal(IoC.create("service1"));
	});

	it('instancesEquality secondInstanceOfService1', function () {
		expect(IoC.create("secondInstanceOfService1")).to.eql(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("secondInstanceOfService1")).to.eql(IoC.create("secondInstanceOfService1"));
	});
	it('instancesIdentity secondInstanceOfService1', function () {
		expect(IoC.create("secondInstanceOfService1")).not.to.equal(require("../../injectables/setter_annotated/singleton/service1")());
		expect(IoC.create("secondInstanceOfService1")).to.equal(IoC.create("secondInstanceOfService1"));
	});

	it('instancesEquality between service1 and secondInstanceOfService1', function () {
		expect(IoC.create("secondInstanceOfService1")).to.eql(IoC.create("service1"));
	});
	it('instancesIdentity between service1 and secondInstanceOfService1', function () {
		expect(IoC.create("secondInstanceOfService1")).not.to.equal(IoC.create("service1"));
	});

	it('instancesEquality between service1 and thirdInstanceOfService1', function () {
		expect(IoC.create("thirdInstanceOfService1")).to.eql(IoC.create("service1"));
	});
	it('instancesIdentity between service1 and thirdInstanceOfService1', function () {
		expect(IoC.create("thirdInstanceOfService1")).to.equal(IoC.create("service1"));
	});

});



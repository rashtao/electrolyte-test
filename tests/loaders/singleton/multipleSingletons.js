delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	// original singleton
	IoC.register("singleton/service1", require("../../injectables/annotated/singleton/service1"));

	// singleton/service1 and singleton/secondInstanceOfService1 should be different objects
	IoC.register("singleton/secondInstanceOfService1", require("../../injectables/annotated/singleton/service1"));

	// singleton/service1 and singleton/thirdInstanceOfService1 should be the same object
	IoC.literal("singleton/thirdInstanceOfService1", IoC.create("singleton/service1"));
});

describe('multipleSingletons', function () {
	it('instancesEquality', function () {
		expect(IoC.create("singleton/service1")).to.eql(require("../../injectables/annotated/singleton/service1")());
		expect(IoC.create("singleton/service1")).to.eql(IoC.create("singleton/service1"));
	});
	it('instancesIdentity', function () {
		expect(IoC.create("singleton/service1")).not.to.equal(require("../../injectables/annotated/singleton/service1")());
		expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
	});

	it('instancesEquality secondInstanceOfService1', function () {
		expect(IoC.create("singleton/secondInstanceOfService1")).to.eql(require("../../injectables/annotated/singleton/service1")());
		expect(IoC.create("singleton/secondInstanceOfService1")).to.eql(IoC.create("singleton/secondInstanceOfService1"));
	});
	it('instancesIdentity secondInstanceOfService1', function () {
		expect(IoC.create("singleton/secondInstanceOfService1")).not.to.equal(require("../../injectables/annotated/singleton/service1")());
		expect(IoC.create("singleton/secondInstanceOfService1")).to.equal(IoC.create("singleton/secondInstanceOfService1"));
	});

	it('instancesEquality between service1 and secondInstanceOfService1', function () {
		expect(IoC.create("singleton/secondInstanceOfService1")).to.eql(IoC.create("singleton/service1"));
	});
	it('instancesIdentity between service1 and secondInstanceOfService1', function () {
		expect(IoC.create("singleton/secondInstanceOfService1")).not.to.equal(IoC.create("singleton/service1"));
	});

	it('instancesEquality between service1 and thirdInstanceOfService1', function () {
		expect(IoC.create("singleton/thirdInstanceOfService1")).to.eql(IoC.create("singleton/service1"));
	});
	it('instancesIdentity between service1 and thirdInstanceOfService1', function () {
		expect(IoC.create("singleton/thirdInstanceOfService1")).to.equal(IoC.create("singleton/service1"));
	});

});



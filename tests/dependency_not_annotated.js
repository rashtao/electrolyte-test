delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

var myInj = {myInjectedDep: "myInjectedDep"};

before(function () {
	IoC.register("NestedDependency", myInj, "@literal");
	IoC.singleton("test-dep", require("electrolyte-test-dep").NotAnnotated, ["NestedDependency"]);
});

describe('injectIntoDependencyNotAnnotated', function () {
	it('instancesEquality', function () {
		expect(IoC.create("test-dep").injected).to.eql(myInj);
	});
	it('instancesIdentity', function () {
		expect(IoC.create("test-dep").injected).to.equal(myInj);
	});
});


delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

var myInj = {myInjectedDep: "myInjectedDep"};

before(function () {
    IoC.register("NestedDependency", myInj, "@literal");
    IoC.singleton("test-dep", require("electrolyte-test-dep").NotAnnotatedSetter, ["NestedDependency"], "setterInjection");
});

describe('injectIntoDependencyNotAnnotatedSetter', function () {
    it('instancesEquality', function () {
        expect(IoC.create("test-dep").NestedDependency).to.eql(myInj);
    });
    it('instancesIdentity', function () {
        expect(IoC.create("test-dep").NestedDependency).to.equal(myInj);
    });
});

  
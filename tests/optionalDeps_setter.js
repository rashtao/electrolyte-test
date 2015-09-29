delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
    IoC.singleton("service1", require("./injectables/optional_setter/singleton/service1"));
    IoC.singleton("service2", require("./injectables/optional_setter/singleton/service2"));
    IoC.singleton("service3", require("./injectables/optional_setter/singleton/service3"));
});

describe('optionalDeps_setter', function () {

    it('injectedEquality', function () {
        expect(IoC.create("service3").service1).to.eql(require("./injectables/optional_setter/singleton/service1")());
        expect(IoC.create("service3").service2).to.eql(require("./injectables/optional_setter/singleton/service2")());
        expect(IoC.create("service3").missingDep).to.be.null;
    });

    it('injectedIdentity', function () {
        expect(IoC.create("service3").service1).to.equal(IoC.create("service1"));
        expect(IoC.create("service3").service2).to.equal(IoC.create("service2"));
    });

});



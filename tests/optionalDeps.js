delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
    IoC.singleton("singleton/service1", require("./injectables/optional/singleton/service1"));
    IoC.singleton("singleton/service2", require("./injectables/optional/singleton/service2"));
    IoC.singleton("singleton/service3", require("./injectables/optional/singleton/service3"));
});

describe('optionalDeps', function () {
    // TODO: implement chacks on all the fields

    it('injectedEquality', function () {
        expect(IoC.create("singleton/service3").service1).to.eql(require("./injectables/optional/singleton/service1")());
        expect(IoC.create("singleton/service3").service2).to.eql(require("./injectables/optional/singleton/service2")());
        expect(IoC.create("singleton/service3").missingDep).to.be.null;
    });

    it('injectedIdentity', function () {
        expect(IoC.create("singleton/service3").service1).to.equal(IoC.create("singleton/service1"));
        expect(IoC.create("singleton/service3").service2).to.equal(IoC.create("singleton/service2"));
    });


});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;
var service3, service3bis;

before(function () {
    IoC.register("singleton/service1", require("./injectables/annotated/singleton/service1"));
    IoC.register("singleton/service2", require("./injectables/annotated/singleton/service2"));
    service3 = IoC.exec(require("./injectables/annotated/singleton/service3"));
    service3bis = IoC.exec(require("./injectables/annotated/singleton/service3"), ["singleton/service2"]);
});

describe('exec', function () {
    it('instancesEquality', function () {
        expect(IoC.create("singleton/service1")).to.eql(require("./injectables/annotated/singleton/service1")());
        expect(IoC.create("singleton/service1")).to.eql(IoC.create("singleton/service1"));
    });
    it('instancesIdentity', function () {
        expect(IoC.create("singleton/service1")).not.to.equal(require("./injectables/annotated/singleton/service1")());
        expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
    });
    it('injectedEquality', function () {
        expect(service3.service1).to.eql(require("./injectables/annotated/singleton/service1")());
        expect(service3bis.service1).to.eql(require("./injectables/annotated/singleton/service2")());
    });
    it('injectedIdentity', function () {
        expect(service3.service1).to.equal(IoC.create("singleton/service1"));
        expect(service3bis.service1).to.equal(IoC.create("singleton/service2"));
    });
});


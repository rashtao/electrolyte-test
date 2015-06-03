delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader("singleton", IoC.node('tests/singleton'));
});

describe('electrolyte', function () {
	it('singletonWithSingletonDep', function () {
		expect(IoC.create("singleton/service1")).to.eql(require("./singleton/service1")());
		expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
		expect(IoC.create("singleton/service3").service1).to.eql(require("./singleton/service1")());
		expect(IoC.create("singleton/service3").service1).to.equal(IoC.create("singleton/service1"));
	});
});



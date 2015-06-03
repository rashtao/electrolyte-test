delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var chai = require('chai');
var expect = chai.expect;

before(function () {
	IoC.singleton("singleton/service1", require("./singleton/service1"));
	IoC.singleton("singleton/service3", require("./singleton/service3"));
});

describe('loadSingleFileWithSingletonWithoutDeps', function () {
	it('loadSingleFileWithSingletonWithoutDeps', function () {
		expect(IoC.create("singleton/service1")).to.eql(require("./singleton/service1")());
		expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
	});
	it('shouldBeEqualWithSingletonWithoutDeps', function () {
		expect(IoC.create("singleton/service3").service1).to.eql(require("./singleton/service1")());
	});
	it('shouldBeIdenticalWithSingletonWithoutDeps', function () {
		expect(IoC.create("singleton/service3").service1).to.equal(IoC.create("singleton/service1"));
	});
});



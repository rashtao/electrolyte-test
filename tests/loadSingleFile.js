delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("singleton/service1", require('./singleton/service1'));
	IoC.register("singleton/service3", require('./singleton/service3'));

});

describe('loadSingleFile', function () {
	it('loadSingleFile', function () {
		expect(IoC.create("singleton/service1")).to.eql(require("./singleton/service1")());
		expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
	});
	it('shouldBeEqual', function () {
		expect(IoC.create("singleton/service3").service1).to.eql(require("./singleton/service1")());
	});
	it('shouldBeIdentical', function () {
		expect(IoC.create("singleton/service3").service1).to.equal(IoC.create("singleton/service1"));
	});
});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader("singleton", IoC.node('tests/singleton'));
	IoC.singleton("service2", require("./singleton/service2"))
});

describe('electrolyte', function () {
	it('singleton', function () {
		expect(IoC.create("singleton/service1")).to.eql(require("./singleton/service1")());
		expect(IoC.create("service2")).to.eql(require("./singleton/service2")());
		expect(IoC.create("singleton/service1")).to.equal(IoC.create("singleton/service1"));
	});
});



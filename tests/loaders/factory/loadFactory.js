delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;


describe('factoryWithoutDeps', function () {
	before(function () {
		IoC.loader("factory", IoC.node("tests/injectables/annotated/factory"));
	});
	it('instanceOf', function () {
		expect(IoC.create("factory/MyObj1Factory")).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("factory/MyObj3Factory").MyObj1).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
});



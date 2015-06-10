delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;


before(function () {
	IoC.loader(IoC.node("tests/injectables/setter_annotated/factory"));
});

describe('factoryWithoutDeps_setter', function () {
	it('instanceOf', function () {
		expect(IoC.create("MyObj1Factory")).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("MyObj3Factory").MyObj1Factory).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
});



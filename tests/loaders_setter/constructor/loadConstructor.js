delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader(IoC.node("tests/injectables/setter_annotated/constructor"));
});

describe('constructorWithoutDeps_setter', function () {
	it('instanceOf', function () {
		expect(IoC.create("MyObj1")).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("MyObj3").MyObj1).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
});



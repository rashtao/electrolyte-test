delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.loader("constructor", IoC.node("tests/injectables/annotated/constructor"));
});

describe('constructorWithoutDeps', function () {
	it('instanceOf', function () {
		expect(IoC.create("constructor/MyObj1")).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("constructor/MyObj3").MyObj1).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
});



delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("MyObj1", require("../../injectables/not_annotated/constructor/MyObj1"), "@constructor", "setter");
	IoC.register("MyObj2", require("../../injectables/not_annotated/constructor/MyObj2"), "@constructor", "setter");
	IoC.register("MyObj3", require("../../injectables/not_annotated/constructor/MyObj3"), ["MyObj2"], "@constructor", "setter");
});

describe('registerConstructorNotAnnotated_setter', function () {
	it('instanceOf', function () {
		expect(IoC.create("MyObj1")).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("MyObj3").MyObj2).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj2"));
	});
});



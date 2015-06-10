delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("MyObj1Factory", require("../../injectables/not_annotated/factory/MyObj1Factory"), "@factory");
	IoC.register("MyObj2Factory", require("../../injectables/not_annotated/factory/MyObj2Factory"), "@factory");
	IoC.register("MyObj3Factory", require("../../injectables/not_annotated/factory/MyObj3Factory"), ["MyObj2Factory"], "@factory", "setter");
});

describe('registerFactoryNotAnnotated_setter', function () {
	it('instanceOf', function () {
		expect(IoC.create("MyObj1Factory")).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("MyObj3Factory").MyObj2Factory).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj2"));
	});
});



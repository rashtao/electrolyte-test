delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.factory("MyObj1Factory", require("../../injectables/setter_annotated/factory/MyObj1Factory"));
	IoC.factory("MyObj3Factory", require("../../injectables/setter_annotated/factory/MyObj3Factory"));
});

describe('factoryWithoutDeps_setter', function () {
	it('instanceOf', function () {
		expect(IoC.create("MyObj1Factory")).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("MyObj3Factory").MyObj1Factory).to.be.instanceof(require("../../injectables/setter_annotated/constructor/MyObj1"));
	});
});



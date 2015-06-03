delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("factory/MyObj1Factory", require("../../injectables/annotated/factory/MyObj1Factory"));
	IoC.register("factory/MyObj3Factory", require("../../injectables/annotated/factory/MyObj3Factory"));
});

describe('registerFactoryWithoutDeps', function () {
	it('instanceOf', function () {
		expect(IoC.create("factory/MyObj1Factory")).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("factory/MyObj3Factory").MyObj1).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
});



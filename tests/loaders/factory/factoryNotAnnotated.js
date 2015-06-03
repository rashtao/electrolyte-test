delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.factory("factory/MyObj1Factory", require("../../injectables/not_annotated/factory/MyObj1Factory"));
	IoC.factory("factory/MyObj2Factory", require("../../injectables/not_annotated/factory/MyObj2Factory"));
	IoC.factory("factory/MyObj3Factory", require("../../injectables/not_annotated/factory/MyObj3Factory"), ["factory/MyObj2Factory"]);
});

describe('factoryNotAnnotated', function () {
	it('instanceOf', function () {
		expect(IoC.create("factory/MyObj1Factory")).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("factory/MyObj3Factory").MyObj1).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj2"));
	});
});



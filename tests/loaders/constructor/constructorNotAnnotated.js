delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.constructor("constructor/MyObj1", require("../../injectables/not_annotated/constructor/MyObj1"));
	IoC.constructor("constructor/MyObj2", require("../../injectables/not_annotated/constructor/MyObj2"));
	IoC.constructor("constructor/MyObj3", require("../../injectables/not_annotated/constructor/MyObj3"), ["constructor/MyObj2"]);
});

describe('constructorNotAnnotated', function () {
	it('instanceOf', function () {
		expect(IoC.create("constructor/MyObj1")).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("constructor/MyObj3").MyObj1).to.be.instanceof(require("../../injectables/not_annotated/constructor/MyObj2"));
	});
});



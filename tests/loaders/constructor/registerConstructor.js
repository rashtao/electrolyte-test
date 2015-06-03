delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
	IoC.register("constructor/MyObj1", require("../../injectables/annotated/constructor/MyObj1"));
	IoC.register("constructor/MyObj2", require("../../injectables/annotated/constructor/MyObj2"));
	IoC.register("constructor/MyObj3", require("../../injectables/annotated/constructor/MyObj3"), ["constructor/MyObj2"]);
});

describe('registerConstructor', function () {
	it('instanceOf', function () {
		expect(IoC.create("constructor/MyObj1")).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj1"));
	});
	it('injectedInstanceOf', function () {
		expect(IoC.create("constructor/MyObj3").MyObj1).to.be.instanceof(require("../../injectables/annotated/constructor/MyObj2"));
	});
});



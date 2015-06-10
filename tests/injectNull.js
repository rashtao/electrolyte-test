//delete require.cache[require.resolve('electrolyte')];
//var IoC = require('electrolyte');
//
//var expect = require('chai').expect;
//
//before(function () {
//	// A --> B --> C
//	// trying to inject null in place of C
//	IoC.factory("depA", require("./injectables/annotated/nestedDeps/depA"));
//	IoC.factory("depB", require("./injectables/annotated/nestedDeps/depB"));
//	IoC.factory("depC", require("./injectables/annotated/nestedDeps/depC"));
//	IoC.literal("depA/depB/depC", null);
//
//});
//
//describe('injectNull', function () {
//	it('instancesEquality', function () {
//		expect(IoC.create("depA").B.C).to.eql(null);
//		expect(IoC.create("depB").C).to.eql(IoC.create("depC"));
//		expect(IoC.create("depC")).to.eql(require("./injectables/annotated/nestedDeps/depC")());
//	});
//});
//
//

delete require.cache[require.resolve('electrolyte')];
var IoC = require('electrolyte');

var expect = require('chai').expect;

before(function () {
    // A --> B --> C
    // trying to inject X in place of C
    IoC.factory("depA", require("./injectables/setter_annotated/nestedDeps/depA"));
    IoC.factory("depB", require("./injectables/setter_annotated/nestedDeps/depB"));
    IoC.factory("depC", require("./injectables/setter_annotated/nestedDeps/depC"));
    IoC.factory("depA.depB.depC", require("./injectables/setter_annotated/nestedDeps/depX"));

});

describe('nestedDeps_setter', function () {
    it('instancesEquality', function () {
        expect(IoC.create("depA").depB.depC).to.eql(IoC.create("depA.depB.depC"));
        expect(IoC.create("depB").depC).to.eql(IoC.create("depC"));
        expect(IoC.create("depC")).to.eql(require("./injectables/setter_annotated/nestedDeps/depC")());
    });
});



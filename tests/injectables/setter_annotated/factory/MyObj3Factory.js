var Entity = require("../constructor/MyObj3");

var count = 0;
exports = module.exports = function () {
	return new Entity(count++);
};

exports['@factory'] = true;
exports['@require'] = ['MyObj1Factory'];
exports['@type'] = 'setterInjection';

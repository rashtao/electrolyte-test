var Entity = require("../constructor/MyObj2");

var count = 0;
exports = module.exports = function () {
	return new Entity(count++);
};


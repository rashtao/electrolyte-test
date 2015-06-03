var Entity = require("../constructor/MyObj3");

var count = 0;
exports = module.exports = function (MyObj1) {
	return new Entity(MyObj1, count++);
};


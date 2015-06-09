var DepC = function () {
	this.name = "DepC";
};

exports = module.exports = function () {
	return new DepC();
};

exports['@singleton'] = true;

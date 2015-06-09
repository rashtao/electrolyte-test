var DepB = function (C) {
	this.name = "DepB";
	this.C = C;
};

exports = module.exports = function (C) {
	return new DepB(C);
};

exports['@singleton'] = true;
exports['@require'] = ['depC'];

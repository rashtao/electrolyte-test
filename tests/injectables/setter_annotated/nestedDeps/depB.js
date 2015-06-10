var DepB = function () {
	this.name = "DepB";
};

exports = module.exports = function () {
	return new DepB();
};

exports['@singleton'] = true;
exports['@require'] = ['depC'];
exports['@type'] = 'setter';

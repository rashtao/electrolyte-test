var MyService = function () {
	this.name = "service3";
};

exports = module.exports = function () {
	return new MyService();
};

exports['@singleton'] = true;
exports['@require'] = ['service1'];
exports['@type'] = 'setter';

var DepA = function () {
	this.name = "DepA";
};

exports = module.exports = function () {
	return new DepA();
};

exports['@singleton'] = true;
exports['@require'] = ['depB'];
exports['@type'] = 'setterInjection';

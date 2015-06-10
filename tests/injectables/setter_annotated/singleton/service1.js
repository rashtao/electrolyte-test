var MyService = function () {
	this.name = "service1";
};

exports = module.exports = function () {
	return new MyService();
};

exports['@singleton'] = true;

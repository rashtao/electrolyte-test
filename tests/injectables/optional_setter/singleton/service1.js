var MyService = function () {
	this.name = "singleton/service1";
};

exports = module.exports = function () {
	return new MyService();
};

exports['@singleton'] = true;

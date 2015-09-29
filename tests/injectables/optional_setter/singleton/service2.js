var MyService = function () {
	this.name = "singleton/service2";
};

exports = module.exports = function () {
	return new MyService();
};

exports['@singleton'] = true;

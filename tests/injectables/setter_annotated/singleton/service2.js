var MyService = function () {
	this.name = "service2";
};

exports = module.exports = function () {
	return new MyService();
};

exports['@singleton'] = true;

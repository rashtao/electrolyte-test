
var MyService = function (service1) {
	this.service1 = service1;
	this.name = "singleton/service3";
};

exports = module.exports = function (service1) {
	return new MyService(service1);
};

exports['@singleton'] = true;
exports['@require'] = ['singleton/service1'];

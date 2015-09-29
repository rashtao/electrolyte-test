var MyService = function (service1, missingDep, service2) {
    this.service1 = service1;
    this.missingDep = missingDep;
    this.service2 = service2;
    this.name = "singleton/service3";
};

exports = module.exports = function (service1, missingDep, service2) {
    return new MyService(service1, missingDep, service2);
};

exports['@singleton'] = true;
exports['@require'] = ['singleton/service1'];
exports['@optional'] = ['missingDep', 'singleton/service2'];

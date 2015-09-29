var MyService = function () {
    this.name = "singleton/service3";
};

exports = module.exports = function () {
    return new MyService();
};

exports['@singleton'] = true;
exports['@require'] = ['service1'];
exports['@optional'] = ['missingDep', 'service2'];
exports['@type'] = 'setterInjection';

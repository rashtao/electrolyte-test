var DepX = function () {
	this.name = "DepX";
};

exports = module.exports = function () {
	return new DepX();
};

exports['@singleton'] = true;

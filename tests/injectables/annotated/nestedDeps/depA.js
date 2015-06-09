var DepA = function (B) {
	this.name = "DepA";
	this.B = B;
};

exports = module.exports = function (B) {
	return new DepA(B);
};

exports['@singleton'] = true;
exports['@require'] = ['depB'];

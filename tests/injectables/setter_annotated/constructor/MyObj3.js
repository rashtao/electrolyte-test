exports = module.exports = function (id) {
	this.id = id;
	this.name = "MyObj3";
};

exports['@constructor'] = true;
exports['@require'] = ['MyObj1'];
exports['@type'] = 'setter';

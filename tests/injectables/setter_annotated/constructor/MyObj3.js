exports = module.exports = function (MyObj1, id) {
	this.id = id;
	this.MyObj1 = MyObj1;
	this.name = "constructor/MyObj3";
};

exports['@constructor'] = true;
exports['@require'] = ['constructor/MyObj1'];

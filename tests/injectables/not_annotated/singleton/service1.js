var MyService = function () {
	this.name = "not_annotated/service1";
};

exports = module.exports = function () {
	return new MyService();
};

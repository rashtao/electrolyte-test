var MyService = function () {
	this.name = "not_annotated/service2";
};

exports = module.exports = function () {
	return new MyService();
};

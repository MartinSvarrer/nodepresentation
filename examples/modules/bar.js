function Bar () {

}

Bar.prototype.getBaz = function () {
	return 'baz';
}

Bar.prototype.getQux = function () {
	return 'qux';
}

Bar.prototype.hotStuff = function () {
	return this.getBaz() + this.getQux();
}


module.exports = Bar;
var namespace = namespace || {}
(function() {
    var aTest = function() {
    }
    aTest.prototype.constructor = aTest;
    aTst.prototype = Object.create(namespace.zTest.prototype);
    aTst.prototype.systemTest = function() {
        return this.string;
    }
    namespace.aTest = aTest;
	var a;
	var b;
}());






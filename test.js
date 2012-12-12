
exports.main = function(callback) {

	function fail(message) {
		return callback(new Error("Tests failed: " + message));
	}

	if (require("package1/lib/module1").id !== "pkg1-module1") {
		return fail('require("package1/lib/module1").id !== "pkg1-module1"');
	}

	return callback(null);
}

if (require.main === module) {
	exports.main(function(err) {
		if (err) {
			console.error(err.stack);
			process.exit(1);
		}
		process.exit(0);
	});
}

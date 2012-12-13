
// TODO: Use `require("system")` instead of `process`.
if (process.argv.indexOf("--start") === 2) {
	console.log("start workspace");
} else
if (process.argv.indexOf("--stop") === 2) {
	console.log("stop workspace");
} else {
	console.error("ERROR: Did not specify `--start` nor `--stop` argument.");
	process.exit(1);
}
process.exit(0);


// TODO: Use `require("system")` instead of `process`.
if (process.argv.indexOf("--start") === 2) {
	console.log("start workspace");
} else
if (process.argv.indexOf("--stop") === 2) {
	console.log("stop workspace");
}

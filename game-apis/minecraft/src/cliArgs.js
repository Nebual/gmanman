const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

function debugLog(...args) {
	if (argv.v) {
		console.log(...args);
	}
}

module.exports = {
	argv,
	game: argv.game || "minecraft",
	gameDir: argv.dir ? path.join(argv.dir) : path.join(__dirname, "../"),
	debugLog,
	listenPort: argv.port || 6725,
};

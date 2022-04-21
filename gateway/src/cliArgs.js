const argv = require("minimist")(process.argv.slice(2), {
	string: ["discordChannel"],
});

function debugLog(...args) {
	if (argv.v) {
		console.log(new Date().toISOString(), ...args);
	}
}

module.exports = {
	argv,
	debugLog,
	listenPort: argv.port || 6725,
	discordToken: argv.discordToken,
	discordChannel: argv.discordChannel,
};

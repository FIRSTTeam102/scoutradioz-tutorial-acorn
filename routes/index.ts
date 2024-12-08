var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// List of JSON elements that will form the scouting form.
	const myLayout = [
		{ type: "h2", label: "Autonomous" },
		{ type: "checkbox", label: "Did they entirely leave Starting Zone?", id: "didStartingZone" },
		{ type: "h3", label: "Auto Speaker" },
		{ type: "counter", label: "Notes scored in Speaker", id: "autoSpeaker" },
		{ type: "badcounter", label: "Speaker attempts missed", id: "autoSpeakerMiss" },
		{ type: "h3", label: "Auto Amp" },
		{ type: "counter", label: "Notes scored in Amp", id: "autoAmp" },
		{ type: "badcounter", label: "Amp attempts missed", id: "autoAmpMiss" },
		{ type: "spacer" },
		{ type: "h2", label: "Teleop" },
		{ type: "h3", label: "Teleop Speaker" },
		{ type: "counter", label: "Notes scored in Speaker", id: "teleopSpeaker" },
		{ type: "counter", label: "Notes scored in AMP'ed Speaker", id: "teleopAmpSpeaker" },
		{ type: "badcounter", label: "Speaker attemps missed", id: "teleopSpeakerMiss" },
		{ type: "h3", label: "Teleop Amp" },
		{ type: "counter", label: "Notes scored in Amp", id: "teleopAmp" },
		{ type: "badcounter", label: "Amp attempts missed", id: "teleopAmpMiss" },
		{ type: "h3", label: "Passing" },
		{ type: "counter", label: "Notes passed into Wing", id: "teleopPass" },
		{ type: "h3", label: "Trap" },
		{ type: "counter", label: "Notes scored in Traps (1/Trap)", id: "teleopTrap" },
		{ type: "spacer" },
		{ type: "h2", label: "Endgame" },
		{ type: "timeslider", label: "How much time was on the clock when they started climbing?", id: "onStageTimeStart", options: { min: 0, max: 90, step: -5 } },
		{ type: "timeslider", label: "How much time was on the clock when they stopped climbing?", id: "onStageTimeEnd", options: { min: 0, max: 90, step: -5 } },
		{ type: "multiselect", label: "Stage status of robot at end of match:", options: [ "Not Parked", "Parked (At least partially in the Stage zone)", "On Stage (Fully off the ground)" ], id: "endgameStage" },
		{ type: "checkbox", label: "Did they Harmonize (2 or more robots climbed on 1 chain)", id: "endgameHarmonize" },
		{ type: "checkbox", label: "Robot Spotlit (High Note on same stage as Robot)", id: "endgameSpotlit" },
		{ type: "spacer" },
		{ type: "h2", label: "General" },
		{ type: "checkbox", label: "Defended (stopped or delayed at least one score)?", id: "defended" },
		{ type: "checkbox", label: "Died during the match (or never started)?", id: "diedDuringMatch" },
		{ type: "checkbox", label: "Recovered from freeze?", id: "recoveredFromFreeze" },
		{ type: "checkbox", label: "Outstanding performance? (If so, definitely explain why!)", id: "outstandingPerformance" },
		{ type: "textblock", label: "Other comments and notes:", id: "otherNotes" }
	];
	
	// Render the webpage.
	res.render('index', { title: 'Scouting Form', myLayout });
});

router.post('/', function (req, res, next) {
	console.log('Received form: ', req.body);
})

module.exports = router;

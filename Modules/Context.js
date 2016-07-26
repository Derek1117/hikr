var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

Backend.getHikes()
	.then(function(newHikes) {
		hikes.replaceAll(newHikes);
	})
	.catch(function(error) {
		console.log("Couldn't get hikes: " + error);
	});

function updateHike(hike) {
	for (var i = 0; i < hikes.length; i++) {
		if (hikes.getAt(i).id == hike.id) {
			hikes.replaceAt(i, hike);
			break;
		}
	}
	Backend.updateHike(hike)
		.catch(function(error) {
			console.log("Couldn't update hike: " + error);
		});
}

module.exports = {
	hikes: hikes,

	updateHike: updateHike
};
var Observable = require("FuseJS/Observable");
var Context = require("Modules/Context");

var hike = Observable();

var name = hike.map(function(x) { return x.name; });
var location = hike.map(function(x) { return x.location; });
var distance = hike.map(function(x) { return x.distance; });
var rating = hike.map(function(x) { return x.rating; });
var comments = hike.map(function(x) { return x.comments; });

this.onParameterChanged(function(param) {
	hike.value = param;
});

function cancel() {
	// TODO: Stupid
	hike.value = hike.value;
	router.goBack();
}

function save() {
	// TODO
	/*hike.name = name.value;
	hike.location = location.value;
	hike.distance = distance.value;
	hike.rating = rating.value;
	hike.comments = comments.value;*/

	Context.updateHike(hike);
	router.goBack();
}

module.exports = {
	name: name,
	location: location,
	distance: distance,
	rating: rating,
	comments: comments,

	cancel: cancel,
	save: save
};
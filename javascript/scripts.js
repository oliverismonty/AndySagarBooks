let last_index;
last_index = 0;
var ids = ["books_contents", "about_contents", "events_contents", "contact_me_contents"];

function bookClick() { moveContents(0); setUrl("books");}
function aboutMeClick() { moveContents(1); setUrl("about");}
function eventsClick() { moveContents(2);  setUrl("events");}
function contactMeClick() { moveContents(3); setUrl("contact_me");}

window.addEventListener('DOMContentLoaded', function() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var page = url.searchParams.get("page");
	if (!page) {
		page = "books";
	}
	if (page) {
		var index = ids.indexOf(page + "_contents");
		moveContents(index);
	}
})

function moveContents(index) {
	last_index = index;
	var i;
	document.getElementById("overlay-input").checked = false;
	for (i = 0; i < ids.length; i++) { 
		var translate = (i - index) * window.innerWidth;
		document.getElementById(ids[i]).style.transform = "translateX(" + translate.toString() + "px)";
		
	}
	var shift = index * 33;
	document.getElementById("underlay").style.backgroundPosition = shift.toString() + "%";
	document.getElementById("overlay").style.backgroundPosition = shift.toString() + "%";
}

function setUrl(value) {
	window.history.replaceState(null, null, "?page=" + value);
}

window.onresize = function(event) {
    moveContents(last_index);
};
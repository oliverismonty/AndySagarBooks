let last_index;
last_index = 0;
ACTIVE_ITEM = "";
var ids = ["books_contents", "about_contents", "events_contents", "contact_me_contents"];

function bookClick() { moveContents(0); setUrl("books"); closeItem();}
function aboutMeClick() { moveContents(1); setUrl("about"); closeItem();}
function eventsClick() { moveContents(2);  setUrl("events"); closeItem();}
function contactMeClick() { moveContents(3); setUrl("contact_me"); closeItem();}
function closeClick() { closeItem(); removeUrlHash();}

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
	if (page == "events") {
		var x = window.location.hash;
		if (x.length > 1) {
			var y = "port0" + x.charAt(x.length-1);
			openItem(y);
		}
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

function removeUrlHash() {
	history.pushState("", document.title, window.location.pathname + window.location.search);
}
	
window.onresize = function(event) {
    moveContents(last_index);
};

function closeItem() { 
	if (ACTIVE_ITEM.length > 0) {
		document.getElementById(ACTIVE_ITEM).style.visibility = "hidden";
		document.getElementById(ACTIVE_ITEM).style.opacity = 0;
		document.getElementById(ACTIVE_ITEM).style.transform = "translateY(100%)";	
	}
};

function openItem(port) {
		if (port.length > 0) {
		document.getElementById(port).style.visibility = "visible";
		document.getElementById(port).style.opacity = 0.98;
		document.getElementById(port).style.transform = "translateY(0%)";
		ACTIVE_ITEM = port;
	}
};


var items = ["item01", "item02", "item03", "item04"]
var ports = ["port01", "port02", "port03", "port04"]




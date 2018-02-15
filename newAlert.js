var oldAlert = window.alert;

window.alert = function() {
	// Send custom event to extension.
	// This has to be a normal custom event, not an extension event,
	// because it's firing from real JS injected into the page.
	document.dispatchEvent(new CustomEvent("switchOnAlert"));

	oldAlert.apply(window, arguments);
}


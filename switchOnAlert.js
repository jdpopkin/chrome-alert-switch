console.log("In parent");
// Switch tab
chrome.runtime.onMessage.addListener(function(request, sender) {
	console.log("Messaged - background");
	if (sender && sender.tab && sender.tab.id) {
		chrome.tabs.update(sender.tab.id, {active: true}, function(){});
	}
});

/*chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.windows.getAll(function(windows) {
		windows.forEach(function(window) {
			if (!window.focused) {
				chrome.windows.remove(window.id);
			}
		});
	});
});*/

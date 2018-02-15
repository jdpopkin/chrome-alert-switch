// We need to do this to be able to modify the target page's window.alert.
// We cannot modify the target tab's JS values from here, but we /can/ modify the DOM.
var s = document.createElement('script');
s.src = chrome.extension.getURL('newAlert.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};

// Event listener?
// Yeah, need a normal document event listener here, to be converted into extension event listener
document.addEventListener("switchOnAlert", function() {
	chrome.runtime.sendMessage(chrome.runtime.id, "alert");
});

let url = "";
var port = null;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_Info => {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => console.log("I injected 1"));
    });
});

function removeTab(id) {
    chrome.tabs.getCurrent(function (tab) {
        console.log("in2");
        try {
            chrome.tabs.remove(id, function () { console.log("removed") });
        }
        catch (err) {
            console.log(err);
            setTimeout(function () {
                removeTab(id);
            }, 100);
        }
    });
}
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var tmp = url;
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        url = tabs[0].url;
    });
    if (url == tmp) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => console.log("I injected 2"));
    }
    //if (changeInfo.url.search("chrome://extensions/") > -1 || changeInfo.url.search("chrome-extension") > -1) {
    //    console.log("in");
    //    //removeTab(tabId);
    //}
})

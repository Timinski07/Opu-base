let url = "";
var port = null;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_Info => {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => console.log("I injected 1"));
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var tmp = url;
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        url = tabs[0].url;
    });
    if (url == tmp) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => console.log("I injected 2"));
    }
    if (checkList(url)) {
        removeTab(tabId)
    }
})

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

function checkList(word) {
    var einArray = ["bing", "ecosia", "yahoo", "duckgo", "ask.com", "baidu", "aol.com", "excite.com", "swisscows.com",
        "creativecommons", "yandex",
        "reddit", "instagram", "dailymotion", "joyn.de", "tiktok.com", "vimeo", "veoh.com", "web.archive", "metacafe",
        "utreon", "crackle", "twitch", "wistia", "dtube",
        "amazon-video"]
    word = word.toLowerCase();
    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1) {
            included = true;
        }
    });
    return included;
}

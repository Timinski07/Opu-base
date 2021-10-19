let url = "";
var port = null;
let tabNum = 0;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_Info => {
        if (url.search("youtube") > -1) {
            chrome.tabs.executeScript(null, { file: "./content_scripts/foreground.js" }, () => console.log("I injected youtubescript"));
        }
        if (url.search("google") > -1 && url.search("search") > -1) {
            chrome.tabs.executeScript(null, { file: "./content_scripts/google.js" }, () => console.log("I injected googlescript"));
        }
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var tmp = url;
    tabNum = tabId
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        url = tabs[0].url;
    });
    if (checkList(url)) {
            removeTab(tabId)
        }
    if (url.search("youtube") > -1) {
        chrome.tabs.executeScript(null, { file: "./content_scripts/foreground.js" }, () => console.log("I injected youtube script"));
    }
    if (url.search("google") > -1 && url.search("search") > -1) {
        chrome.tabs.executeScript(null, { file: "./content_scripts/google.js" }, () => console.log("I injected googlescript"));
    }
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        removeTab(tabNum);
    }
);

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
        "amazon-video", "kkiste", "bs.to", "bs.co", "bs.io", "kinoz.to", "movie4k"]
    word = word.toLowerCase();
    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1) {
            included = true;
        }
    });
    return included;
}

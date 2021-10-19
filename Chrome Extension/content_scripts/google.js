let i = 0
function repeat() {
    try {
        let element = document.getElementById("search");
        element = element.getElementsByTagName("h3")[i].innerText;
        console.log(element)
        if (checkList(element)) {
            chrome.runtime.sendMessage({ message: element }, function (response) {
                console.log(element);
            });
        }
        ++i;
    }
    catch (err) {
        try {
            let element = document.getElementsByClassName("mCBkyc JQe2Ld nDgy9d")[i].innerText
            console.log(element)
            if (checkList(element)) {
                chrome.runtime.sendMessage({ message: element }, function (response) {
                    console.log(element);
                });
            }
            i++;
        }
        catch (err) {
            try {
                let element = document.getElementsByClassName("VFACy kGQAp sMi44c lNHeqe WGvvNb")[i].innerText;
                console.log(element)
                if (checkList(element)) {
                    chrome.runtime.sendMessage({ message: element }, function (response) {
                        console.log(element);
                    });
                }
                ++i;
            }
            catch (err) {
                console.log("error")
                ++i;
            }
        }
    }
}
function checkList(word) {
    var einArray = ["alternative", "bing", "ecosia", "avast", "opera", "firefox", "yahoo", "Waterfox", "vivaldi",
        "duckgo",
        "fussball", "transfermarkt", "haaland", "embappe", "bundesliga", "ligue 1", "serie a", "football",
        "laliga", "primera divis", "premier league",
        "marroni", "nude", "naked", "leni klum", "noelle easton", "autumn falls", "angela white", "busty buffy", "madelline",
        "maja schm", "betty taube", "heidi klum", "kardashian", "jenner", "emily ratajkowski", "kate upton", "charlotte mckinney", "sofia vergara", "ariel winter",
         "hayley atwell", "charley atwell", "corinna kopf", "david dobrik", "paul unterleitner"];
    word = word.toLowerCase();
    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1)
            included = true;
    });
    return included;
}

setInterval(repeat, 200);
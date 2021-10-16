var i = 0
var error = 0;
var worked3 = false;

"Hello There"

function checkList(word) {
    var einArray = ["lebensmittel", "rezept", "github", "gesund", "nahrung", "postfach", " gmail", " usb c ", " usb-c "," adapter ", "programming", "code", "java", "c#", "python", "server", "powershell", " api ", "regex", "typescript", "node.js",
        "windows", "extension", "computerphile", " etf", "investor", "wireshark", "program", "html", "proxy", "unity", "xml", " css ", " php ",
        "ajax", "bootstrap", "sniffer", "hacking", "adobe", "photoshop", "website", " error", "logging", "password", "overflow", "linux", "macos",
        "byte", "directorie", " file", "data", "datei", "exception", "network", "nginx", "module", "library", "function", "for loop", "while loop",
        "matlab", " cmd", "batch", "bash", "command prompt", "instal", " vbs", "visual basic", "visual studio", "input", "output",
        "convert", "verification", "enable", "disable", "array", "object", "variable", "modify", "hello world", "operator", "inheritance", "overloading",
        "aktien", "bitcoin", " zins", "portfolio", "msci world", "schulden", "insolvenz", "stock", "Anleger", "comdirect", "splid", "learn", "language",
        "vocabulary", "software", " app", "computer", "desktop", "chrome", "monitor"];

    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1)
            included = true;
    });
    return included;
}

function repeat() {
    try {
        var video = document.getElementById("player-container-outer");
        var video = video.getElementsByTagName("video")[0];

        if (video == undefined) {
            var video = document.getElementById("player-theater-container")
        }

        var videoTitle = document.getElementById("info-contents");
        videoTitle = videoTitle.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
        videoTitle = videoTitle.toLowerCase();

        if (checkList(videoTitle)) {
            let element = document.getElementById("movie_player");
            let del = element.getElementsByClassName("ytp-size-button ytp-button")[0];
            del.remove(del)
            throw "error"
        }
        else {
            if (videoTitle != "") {
                video.remove(video);
            }
            else {
                throw "error";
            }
        }
    }
    catch (errr) {
        try {
            var miniPlay = document.getElementsByTagName("ytd-miniplayer")[0];
            miniPlay.remove(miniPlay);
        }
        catch (errrr) {
            "nothing to do here"
        }
    }
}
setInterval(repeat, 2);


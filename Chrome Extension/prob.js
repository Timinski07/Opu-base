function checkList(word) {
    var einArray = ["programming", "code", "java", "c#", "python", "server", "powershell", " api ", "regex", "typescript", "node.js",
        "windows", "extension", "computerphile", " etf", "investor", "wireshark", "program", "html", "proxy", "unity", "xml", " css ", " php ",
        "ajax", "bootstrap", "sniffer", "hacking", "adobe", "photoshop", "website", " error", "logging", "password", "overflow", "linux", "macos",
        "byte", "directorie", " file", "data", "datei", "exception", "network", "nginx", "module", "library", "function", "for loop", "while loop",
        "matlab", " cmd", "batch", "bash", "command prompt", "instal", " vbs", "visual basic", "visual studio", "input", "output",
        "convert", "verification", "enable", "disable", "array", "object", "variable", "modify", "hello world", "operator", "inheritance", "overloading",
        "aktien", "bitcoin", " zins", "portfolio", "msci world", "schulden", "insolvenz", "stock", "Anleger", "comdirect", "splid", "learn", "language",
        "vocabulary", "software", " app", "computer", "desktop", "chrome"];

    var included = false
    einArray.forEach(function (einArrayElement) {
        
        if (word.search(einArrayElement) > -1) {
            console.log(word + " : " + einArrayElement)
            console.log(word.search(einArrayElement) > -1)
            included = true;
        }
    });
    return included;
}
checkList("Inside Apple's $5 Billion Headquarters");

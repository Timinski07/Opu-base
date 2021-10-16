function repeat() {
    port = chrome.runtime.connectNative("com.letcode.sp");
    console.log("native messaging was triggered")
}
setInterval(repeat, 10000);

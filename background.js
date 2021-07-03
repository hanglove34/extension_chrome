
chrome.runtime.onInstalled.addListener(() => {
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url))
    {
        chrome.scripting.executeScript({
            target : {tabId: tabId},
            files: ["./foreground.js"]
        }).then(() => {
            console.log("Injected the foreground script.");
        }).catch(err => console.log(err));
    }
    // console.log(tabId)
    // console.log(changeInfo)
    // console.log(tab)
});
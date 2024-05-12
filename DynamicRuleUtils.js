"use strict";

if (typeof browser == "undefined") {
    // `browser` is not defined in Chrome, but Manifest V2 extensions in Chrome
    // also support promises in the `chrome` namespace, like Firefox. To easily
    // test the example without modifications, polyfill "browser" to "chrome".
    globalThis.browser = chrome;
}

async function addDynamicBlockRules() {

    let newRule = [{
        "id": 1,
        "priority": 1,
        "action": {
            "type": "redirect",
            "redirect": {
                "url": "chrome-extension://mieebbheeincpcgfmflcllgfmnjmihnb/blocked.html"
            }
        },
        "condition": { "urlFilter": "instagram.com", "resourceTypes": ["main_frame"] }
    }]
    try {
        let updatedRules = await browser.declarativeNetRequest.updateDynamicRules({
            addRules: newRule
        })
    } catch (e) {
        console.log(e)
    }
}

async function removeDynamicBlockRule() {

    let updatedRules = await browser.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1]
    })

}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.command == "StartTimerToAddMessager") {

        removeDynamicBlockRule();
        setTimeout(() => {
            addDynamicBlockRules()
            //To:do add validation for url 
            chrome.tabs.query({
                url: "*://www.instagram.com/*"
            }, (tabs) => {
                console.log("Printing Tabs");
                console.log(tabs);
                tabs.forEach(element => {
                    console.log(element);
                    chrome.tabs.reload(element.id, (e) => {
                        console.log("reloaded sucessfully");
                    });
                });
            })


        }, Number(message.delayValue) * 10000)

        sendResponse({ status: "startedTimer" });
    }
});


export { addDynamicBlockRules, removeDynamicBlockRule }
// background.js

// Function to modify the current tab's URL and open a new tab with the modified URL
function modifyAndOpenNewTab(tab) {
    // Check if the tab is valid
    if (tab) {
        // Verify tab.url should be
        // E.g. https://twitter.com/foobar/status/123456
        const tweetPattern = /^https:\/\/twitter\.com\/[^/]+\/status\/\d+$/;
        if (tweetPattern.test(tab.url)) {
            // Append "/quotes" to the URL
            const modifiedUrl = tab.url + "/quotes";
            chrome.tabs.create({ url: modifiedUrl });
        }
    }
}

// Event listener for when the extension icon is clicked
chrome.action.onClicked.addListener(function (tab) {
    // Call the function to modify the current tab's URL and open a new tab
    modifyAndOpenNewTab(tab);
});

// background.js

// Listen for messages from content scripts
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log('Received message:', message);
//     // You can perform further processing here
// });


// chrome.action.onClicked.addListener(openDemoTab);

// function openDemoTab() {
//   chrome.tabs.create({ url: 'index.html' });
// }

// chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
//   if (url !== 'https://example.com/#inject-programmatic') return;
//   const { options } = await chrome.storage.local.get('options');
//   chrome.scripting.executeScript({
//     target: { tabId },
//     files: ['content-script.js'],
//     ...options
//   });
// });

// chrome.runtime.onMessage.addListener(async ({ name, options }) => {
//   if (name === 'inject-programmatic') {
//     await chrome.storage.local.set({ options });
//     await chrome.tabs.create({
//       url: 'https://example.com/#inject-programmatic'
//     });
//   }
// });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Handle the received message
    console.log("Received message:", message);
    // Do whatever you want with the received data
});

// chrome.runtime.onConnect.addListener(function (port) {
//     console.log(port.name);
//     port.onMessage.addListener(function (msg) {
//         console.log('ms = ', msg)
//     });
// });


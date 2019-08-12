var URLS = ["https://krunker.io/js/game*", "https://krunker.io/libs/zip-ext.*", "https://krunker.io/libs/zip.*", "https://krunker.io/js/social.*"];
chrome.webRequest.onBeforeRequest.addListener(function(details) { return {redirectUrl: chrome.extension.getURL("game.js")}; }, { urls: [URLS[0]] }, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(function(details) { return {redirectUrl: chrome.extension.getURL("zip-ext.js")}; }, { urls: [URLS[1]] }, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(function(details) { return {redirectUrl: chrome.extension.getURL("zip.js")}; }, { urls: [URLS[2]] }, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(function(details) { return {redirectUrl: chrome.extension.getURL("social.js")}; }, { urls: [URLS[3]] }, ["blocking"]);
chrome.webRequest.onHeadersReceived.addListener(function(details) { return {cancel: details.type == "script"} }, { urls: ["https://krunker.io/*"] }, ["blocking"]);

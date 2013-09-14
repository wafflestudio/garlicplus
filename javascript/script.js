﻿(function() {
  var genericOnClick;

  genericOnClick = function(info, tab) {
    var tab_url;
    console.log("info: " + (JSON.stringify(info)));
    if (("" + info.menuItemId) === "search_largest") {
      tab_url = "search.html#" + info.srcUrl;
    } else if (("" + info.menuItemId) === "search_google") {
      tab_url = "search.html#" + info.srcUrl;
    }
    return chrome.tabs.create({
      url: tab_url
    });
  };

  chrome.contextMenus.create({
    "id": "search_largest",
    "title": "Get Largest Same image on Google",
    "contexts": ["image"],
    "onclick": genericOnClick
  });

  chrome.contextMenus.create({
    "id": "search_google",
    "title": "Search Same image on Google",
    "contexts": ["image"],
    "onclick": genericOnClick
  });

}).call(this);

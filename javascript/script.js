﻿(function() {
  var genericOnClick, id;

  genericOnClick = function(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + (JSON.stringify(info)));
    console.log("tab: " + (JSON.stringify(tab)));
    return chrome.tabs.create({
      url: "search.html"
    });
  };

  id = chrome.contextMenus.create({
    "title": "Search Same images on Google",
    "contexts": ["image"],
    "onclick": genericOnClick
  });

  console.log("context : " + id);

  console.log("Hello World!");

}).call(this);

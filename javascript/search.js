﻿(function() {
  var default_search, xhr;

  console.log("Hello Search!");

  default_search = "https://www.google.com/searchbyimage?safe=off&hl=ko&site=search&image_url=http://xbox-360.mediagen.fr/red-dead-redemption-xbox-ps3-4_019401C700007820.jpg";

  xhr = new XMLHttpRequest();

  xhr.open("GET", default_search, true);

  xhr.onreadystatechange = function() {
    var res;
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      res = $.parseHTML(xhr.responseText);
      return console.log(res);
    }
  };

  xhr.send();

}).call(this);
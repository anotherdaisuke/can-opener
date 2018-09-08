(function() {
  chrome.contextMenus.create(
    {
      title: "Open As Link",
      contexts: [
        "selection"
      ],
      onclick: function (event) {
        chrome.windows.getAll({}, function (windowList) {
          var incognitoWindow = null;
          for (var i = windowList.length - 1; i >= 0; i--) {
            if(windowList[i].incognito) {
              incognitoWindow = windowList[i];
              i = -1;
            }
          }

          if(incognitoWindow === null) {
            chrome.windows.create({incognito: true, state: 'maximized', focused: true, url: "https://nhentai.net/g/" + event.selectionText});
          } else {
            chrome.tabs.create({windowId: incognitoWindow.id, url: "https://nhentai.net/g/" + event.selectionText, active: true});
          }
        });
      },
      visible: true
    }
  );
})();

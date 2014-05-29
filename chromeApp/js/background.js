chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('../main.html', {
    id: "kitchenGarden",
    bounds: {
      width: 600,
      height: 800
    },
    minWidth: 600,
    minHeight: 800,
    frame: 'none'
  });
});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() { 
  // Do some simple clean-up tasks.
});

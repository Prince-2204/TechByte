document.addEventListener('DOMContentLoaded', function() {
    
    // Trigger the 'addBoundingBox' action when the button is clicked
    var screenshot = document.getElementById('fakeurgency');
    screenshot.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fakeurgency' });
      });
    });
  });

















  
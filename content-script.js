// content_script.js
// importScripts('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');

// const script = document.createElement('script');
// script.src = chrome.runtime.getURL('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
// document.head.appendChild(script);

// chrome.permissions.contains({permissions: ['clipboardRead']}, function(result) {
//     if (result) {
//         console.log("Clipboard read permission is granted.");
        document.addEventListener('copy', function(e) {
            // Access clipboard data
            // console.log('e = ', e.clipboardData.getData())
            // navigator.clipboard.readText().then(function(clipboardData) {
            //     console.log('Clipboard data:', clipboardData);
            //     // Now you can process or send the clipboard data as needed
            // }).catch(function(err) {
            //     console.error('Failed to read clipboard data:', err);
            // });
            
            var request = indexedDB.open('keyval-store');
            request.onerror = function(event) {
                console.error('IndexedDB error:', event.target.errorCode);
            };

            request.onsuccess = function(event) {
                var db = event.target.result;
                var transaction = db.transaction(['keyval'], 'readonly');
                var objectStore = transaction.objectStore('keyval');
                var getRequest = objectStore.get('copied_objects');
                // Now that you have access to the database, you can retrieve data from it
                getRequest.onsuccess = function(event) {
                    var data = event.target.result;
                    chrome.runtime.sendMessage(data);
                    // var port = chrome.runtime.connect({name: "knockknock"});
                    // port.postMessage({data: data});
                  };
              };
        });
    // } else {
    //     console.log("Clipboard read permission is not granted.");
    // }
// });
  


// Attach context menu event listener
// document.addEventListener('contextmenu', handleContextMenu);


(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'Messenger'));


  window.extAsyncInit = function() {
    // the Messenger Extensions JS SDK is done loading 

    //get user PSID
    MessengerExtensions.getContext(facebookAppId, 
  function success(thread_context){
      let userPSID = thread_context.psid
      document.getElementById("psid").value =  userPSID 
    // success
  },
  function error(err){
    // error
  }
);
document.getElementById("submitBtn").addEventListener('click', function(){
    console.log('working')
    MessengerExtensions.requestCloseBrowser(function success() {
        // webview closed
      }, function error(err) {
        // an error occurred
      });

})

  };

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));
window.extAsyncInit = function () {
  // the Messenger Extensions JS SDK is done loading 
  //get user PSID
  MessengerExtensions.getContext( facebookAppId , 
  function success(thread_context){
    let userPSID = thread_context.psid;
    document.getElementById("psid").value = userPSID

  },
  function error(err){
    // error
  }
);
document.getElementById('submitBtn').addEventListener('click',function ()
{console.log("hi")
MessengerExtensions.requestCloseBrowser(function success() {
  console.log("bye")
  // webview closed
  let dataBody = {
    psid: document.getElementById("psid").value,
    name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    email: document.getElementById("email").value,
    phonenumber: document.getElementById("phone").value,
    
  }
  //user data
  fetch(`${window.location.origin}/post-survey`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataBody)
  }).then(res => res.json())
  .then(res => console.log(res));
}, function error(err) {
  // an error occurred
});
} );
//closed

};
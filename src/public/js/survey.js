(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
  fjs.parentNode.insertBefore(js, fjs);
  console.log('stat')
}(document, 'script', 'Messenger'));
window.extAsyncInit = function () {
  console.log(`err`)
  // the Messenger Extensions JS SDK is done loading 
  //get user PSID
    MessengerExtensions.getContext( '631677451454332' , 
    function success(thread_context){
        let userPSID = thread_context.psid;
        console.log(userPSID)
        document.getElementById("psid").value = userPSID
    
      },
      function error(err){
      console.log(err)
      // error
        }
      );
  
document.getElementById('submitBtn').addEventListener('click',function ()
{console.log("hi")
MessengerExtensions.requestCloseBrowser(function success() {
  window.top.close()
  //webview closed
  // let dataBody = {
  //     // psid: document.getElementById("psid").value,
  //     name: document.getElementById("name").value,
  //     country: document.getElementById("country").value,
  //     email: document.getElementById("email").value,
  //   phonenumber: document.getElementById("phone").value,
  
  // }
  // fetch(`${window.location.origin}/post-survey`, {
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json, text/plain, */*',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(dataBody)
  //     }).then(res => res.json())
  //     .then(res => console.log(res));
    }, function error(err) {
      // an error occurred
      console.log(err)
      
    });
  } );
  //closed
  
}
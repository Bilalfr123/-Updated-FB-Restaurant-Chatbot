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
  // get user PSID
    MessengerExtensions.getContext( facebookAppId , 
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
        const APP_ID = '324579282843200';
        MessengerExtensions.getContext(APP_ID, (uids) => {
          /** Do more stuff here */
          let userSID = uids.psid;
          console.log(userSID)
        }, (error, errorMessage) => {
          console.error('Error occurred -', errorMessage);
          console.error(error);
        });
      $('#submitBtn').on('click', function () 
{console.log("hi")
// window.top.close() 

  //webview closedd
  let dataBody = {
      psid: document.getElementById("psid").value || undefined,
      name: document.getElementById("name").value || undefined,
      country: document.getElementById("country").value || undefined,
      email: document.getElementById("email").value || undefined ,
    phonenumber: document.getElementById("phonenumber").value || undefined ,
    note: document.getElementById("note").value || undefined ,
  
  }
  $.ajax({
    method: 'POST',
    data: dataBody,
    url: `${window.location.origin}/post-survey`,
    success: function (data) {
      console.log('succes',data )
        //on Close webview



    },
    error: function (error) {
        console.log('error response from node js server :', error)
    }
})
  } );

  
}
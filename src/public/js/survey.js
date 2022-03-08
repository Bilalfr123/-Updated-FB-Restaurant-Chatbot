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
  
      $('#submitBtn').on('click', function () 
{console.log("hi")
// window.top.close() 

  //webview closedd
  let dataBody = {
      psid: document.getElementById("psid").value,
      name: document.getElementById("name").value,
      country: document.getElementById("country").value,
      email: document.getElementById("email").value ,
    phonenumber: document.getElementById("phonenumber").value ,
  
  }
  $.ajax({
    method: 'POST',
    data: dataBody,
    url: `${window.location.origin}/post-survey`,
    success: function (data) {
      console.log('succes',data )
        //on Close webview
        console.log(name)
        console.log(country)
        console.log(email)
        console.log(phonenumber)


    },
    error: function (error) {
        console.log('error response from node js server :', error)
    }
})
  } );

  
}
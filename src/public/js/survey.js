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

  
}<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Set up the Restaurant Chatbot with Messenger</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

<div class="container">
    <div class="container">
        <div class="row">
            <div class="mt-3">
               <div class="mt-3"> 
                   This is a simple page, a guide to test a Facebook Messenger Bot
                   (demo the restaurant Messenger Bot - click on the Messenger Icon at the bottom right)
               </div>
               <div>
                   <p>Set up start button and perisistent menu</p>
                 <form action="/setup" method="POST">
                     <button type="submit">Set up</button>
                   </form>
                <div class="mt-3">
                    Test my bot on Messenger (alway works): 👉  <a target="_blank" href="https://web.facebook.com/messages/t/103126065669964">http://m.me/dark'sRestaurant</a>
                </div>
                <br/>
                <div><b>What can this bot do?</b>
                    <ul>
                        <li>Showing menu (lunch, dinner, pub menu), showing rooms.</li>
                        <li>Take a reservation.</li>
                        <li>Automatic understand a message is a datetime or a phone number (use for taking reservation)</li>
                    </ul>
                </div>

                <div>
                    <b>New update:</b>
                    <ul>
                        <li>
                            Add the button: "Guide to use this bot".
                        </li>
                        <li>Turn on/off typing for the bot. Mark conversation is read.</li>

                    </ul>
                </div>
            
            </div>
        </div>
    </div>



 <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v6.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="<%= fbPageId %>">
    </div>
</div>
</body>
</html>  --
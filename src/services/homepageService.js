require('dotenv').config();
let handleGetStartedButton = ()=>{
let response =  {
    "attachment":{
    "type":"template",
    "payload":{
      "template_type":"generic",
      "elements":[
         {
          "title":"Welcome to Dark Light chatbot!",
          "image_url":"https://raw.githubusercontent.com/fbsamples/original-coast-clothing/main/public/styles/male-work.jpg",
          "subtitle":"(Saving data to google sheets.)",
          "default_action": {
            "type": "web_url",
            "url": "https://web.facebook.com/Darko-106888198616659/?ref=pages_you_manage",
            "webview_height_ratio": "tall",
          },
          "buttons":[
            {
              "type":"web_url",
              "url":"https://www.originalcoastclothing.com/",
              "title":"View Website"
            },{
                "type":"web_url",
                "url":`${process.env.URL_WEB_VIEW_SURVEY
                }`,
                "title":"Start Survey",
                "webview_height_ratio": "tall",
                "messenger_extensions":true // false:opn webview in new tab
            }              
          ]      
        }
      ]
    }
  }
}
return response
}

module.exports = {
    handleGetStartedButton:handleGetStartedButton
}

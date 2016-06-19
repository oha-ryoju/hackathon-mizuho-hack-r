// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'C00ed08a581caf1286d8f729108a6344b';
var authToken = "b8ee6c8e808fece91b0545006d60fe";
var client = require('twilio')(accountSid, authToken);


client.messages.create({ 
    to: "+819029592048", 
    from: "+12024997732", 
    body: "Hey Jenny! Good luck on the bar exam!", 
    mediaUrl: "http://farm2.static.flickr.com/1075/1404618563_3ed9a44a3a.jpg",  
}, function(err, message) { 
    console.log(message.sid); 
});
const timerNotification = (function(msg){
  
  var options = {
      body: 'phew, lets take a breather',
      requireInteraction: true,
      vibrate: [200, 100, 200],
  }
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    new Notification(msg,options);
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
       new Notification(msg,options);
      }
    });
  }
})

export default timerNotification
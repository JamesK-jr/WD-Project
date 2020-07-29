"use strict";
var thisTime = new Date("October 29, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var current = new Date().getTime();
  var length = thisTime - current;
    
  // calculate days, hours, minutes, and seconds
  var days = Math.floor(length / (1000 * 60 * 60 * 24));
  var hours = Math.floor((length % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((length % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((length % (1000 * 60)) / 1000);
    
  //add colons in between each number and output result using "countdown" ID
  document.getElementById("countdown").innerHTML = days + "days " + hours + ":"
  + minutes + ":" + seconds;
    
  // Check if it is halloween yet
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Its Halloween!"; 
  }
}, 1000);

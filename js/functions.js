    $(document).ready(function(){
      $('.parallax').parallax();
    });


  AOS.init({
  duration: 1200,
})
/*
// Set the date we're counting down to
var countDownDate = new Date("May 9, 2020 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "&nbsp;&nbsp;&nbsp;" + hours + "&nbsp;&nbsp;&nbsp;"
  + minutes + "&nbsp;&nbsp;&nbsp;" + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
*/



$(document).ready(function(){
 
    $('.modal').modal();
 
  })



function updateTimer() {
  future  = Date.parse("May 9, 2020 20:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

 document.getElementById("myDIV")
 .innerHTML = '¡Faltan ' + d +' dias!';


  document.getElementById("timer")
    .innerHTML =
     // '<div>' + d + '<span>DIAS</span></div>' +
      '<div>' + h + '<span>HORAS</span></div>' +
      '<div>' + m + '<span>MINUTOS</span></div>' +
      '<div>' + s + '<span>SEGUNDOS</span></div>' ;
}

setInterval('updateTimer()', 100 );



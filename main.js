$(document).ready(function(){
  var tzOffset = new Date().getTimezoneOffset();
  var date = new Date("November 06, 2018 07:00:00 " + tzOffset);
  var now = new Date();
  var diff = (date.getTime()/1000) - (now.getTime()/1000);

  var clock = $('.clock').FlipClock(diff,{
    clockFace: 'DailyCounter',
    countdown: true
  });
});

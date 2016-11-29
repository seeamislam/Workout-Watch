
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Start');
    link.addEventListener('click', function() {
timer();   
 });
});

function timer(){

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);


    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
	  document.write("It has been 60 minutes!");
	var x = Math.random() * 100; 
	document.write("</br>");
	if (x > 90)
	{
		document.write("Do 30 close grip pushups")
	}
	else if (x > 80)
	{
		document.write("Do 30 squats")
	}
		else if (x > 70)
	{
		document.write("Do 30 crunches")
	}
		else if (x > 60)
	{
		document.write("Do 30 lunges")
	}
		else if (x > 50)
	{
		document.write("Do 20 burpees")
	}
		else if (x > 40)
	{
		document.write("Do 20 jump squats")
	}
		else if (x > 30)
	{
		document.write("Do 30 sit ups")
	}
		else if (x > 20)
	{
		document.write("Do 30 wide grip pushups")
	}
		else if (x > 10)
	{
		document.write("Do a minute wall squat")
	}
		else
	{
		document.write("Get a drink of water")
	}
	
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +  1 * 5 * 1000);
initializeClock('clockdiv', deadline);
}






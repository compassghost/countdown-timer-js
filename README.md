# countdown-timer-js
A CSS3/JS API for creating countdown timers

Timer generation is done through a configuration script. 

The following configuration will deploy a repeating Midnight UTC timer.

//JS
	addTimer(
			"Midnight UTC", 
			"midnight", 
			getNextUTC.bind(null,));
	deployTimers();
  
//HTML
  <div class="countdown-timer">
     <div id="midnight"></div>
  </div>
  
A timer with a static date will terminate
  
Events that span periods can also be configured:

//JS
	addEventTimer(
			"21st Century", 
			"century", 
			createUTCDate(2000, 1, 1, 0, 0),
			createUTCDate(2099, 12, 31, 23, 59, 59));

If you wish to modify your event timer behavior, such as change texts, you can pass in a custom function as a base argument, that takes itemName, timerId, startDay, and endDay.

//JS
	addEventTimer(
			"21st Century", 
			"century", 
			createUTCDate(2000, 1, 1, 0, 0),
			createUTCDate(2099, 12, 31, 23, 59, 59),
      customEventTimerBehavior);

//Defined function
function customEventTimerBehavior(itemName, timerId, startDay, endDay) {
	if(startDay.getTime() > new Date().getTime()) {
		createTimer(itemName, timerId, startDay, " activating in ", " activated");
	}
	else if(endDay.getTime() > new Date().getTime()) {
		createTimer(itemName, timerId, endDay, " is Active ", " is offline ");
	    document.getElementById(timerId).classList.add('glow');
	}
	else {
	    document.getElementById(timerId).innerHTML = itemName + " is Offline";
	    document.getElementById(timerId).setAttribute("text", itemName + " is Offline");
	    document.getElementById(timerId).classList.remove('glow');
	    document.getElementById(timerId).classList.add('rogue');
		clearInterval(deployedTimers[keys[timerId]]);
	}	
}


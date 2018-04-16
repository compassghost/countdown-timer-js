window.onload = function() {
	addTimer(
			"Midnight UTC", 
			"midnight", 
			getNextUTC.bind(null,));
	addTimer(
			"Happy New Year's East Coast", 
			"newyears", 
			createUTCDate(2019, 1, 1, 5, 0));
	addTimer(
			"Haley's Comet", 
			"comet", 
			createUTCDate(2061, 7, 28, 0));
	addEventTimer(
			"21st Century", 
			"century", 
			createUTCDate(2000, 1, 1, 0, 0),
			createUTCDate(2099, 12, 31, 23, 59, 59));
	addEventTimer(
			"22nd Century", 
			"nextcentury", 
			createUTCDate(2100, 1, 1, 0, 0),
			createUTCDate(2199, 12, 31, 23, 59, 59));
	deployTimers();
};
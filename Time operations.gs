// Uses two different formatted date strings for parsing the date to the format that Date accepts.
function dateParser(fullDate, compactDate){
  var time = compactDate.slice(11, 19);
  var monthDay = fullDate.slice(20,30);
  var year = compactDate.slice(0, 4);
  var utc = '+0000'
  var list = [monthDay, ', ', year, ' ', time, ' ', utc];
  var formatted = list.join('');
  
  return new Date(formatted);
}


function getTimeIndex(timeString){
  var timeSlots = getTimeSlots();
  return timeSlots[timeString];   
}

// generates and returns a asociative array containing the time slots and their respective index
function getTimeSlots() {
  var start = new Date('2018-01-01T10:00:00+00:00');
  var timeSlots = {};
  
  for (var i = 0; i < 24; i++){
    var time = Utilities.formatDate(start, 'GMT', 'H:mm');
    timeSlots[time] = i;
    start.setMinutes(start.getMinutes() + 15);
  }
  return timeSlots;
}


// testing 
function dateParserTest(){
  Logger.log(getTimeIndex('15:45'));
  
}

var full = '10:15am - Thursday, February 1, 2018'
var compact = '2018-02-01T10:15:00+00:00'
var target = 'February 1, 2018 10:15:00 +0000'
var NUM_SLOTS = 24;

// Uses two different formatted date strings for parsing the date to the format that Date accepts.
function dateParser(dateString) {
  var time = dateString.slice(11, 19);
  var hour = parseInt(dateString.slice(11, 13));
  var min = parseInt(dateString.slice(14, 16));
  var day = parseInt(dateString.slice(8, 10), 10);
  var month = parseInt(dateString.slice(5, 7), 10) - 1;
  var year = parseInt(dateString.slice(0, 4));
  return new Date(year, month, day, hour, min); 
}


function getTimeIndex(timeString) {
  var timeSlots = getTimeSlots();
  return timeSlots[timeString];   
}


// generates and returns a asociative array containing the time slots and their respective index
function getTimeSlots() {
  var start = new Date('2018-01-01T10:00:00+00:00');
  var timeSlots = {};
  
  for (var i = 0; i < NUM_SLOTS; i++) {
    var time = Utilities.formatDate(start, Session.getScriptTimeZone(), 'HH:mm');
    timeSlots[time] = i;
    start.setMinutes(start.getMinutes() + 15);
  }
  return timeSlots;
}


// returns a list of datetime objects of 5 consecutive days starting from a monday
function getFullWeek(dateDay) {
  if (dateDay.getDay() != 1) {
    return [];
  }
    var week = [];
    for (var i = 0; i < 5; i++) {
      week[i] = new Date(dateDay.getYear(), dateDay.getMonth(), dateDay.getDate() + i);
    } 
    return week;
}


function getFirstDayWeek(dateDay) {
 return new Date(dateDay.getYear(), dateDay.getMonth(), (dateDay.getDate() - (dateDay.getDay() || 7)) + 1);
}


function getNextMonday(dateDay) {
  if (dateDay.getDay() != 1) {
    return false;
  }
  return new Date(dateDay.getYear(), dateDay.getMonth(), (dateDay.getDate() + 7));
}


function getSuffix(day) {
  var string = Utilities.formatDate(day, Session.getScriptTimeZone(), 'd');
  var lastChar = string.substr(string.length - 1);
  
  if (string == '11' || string == '12' || string == '13')
    return 'th';
  
  switch (lastChar) {
    case '1':
      return 'st';
    case '2':
        return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }   
}
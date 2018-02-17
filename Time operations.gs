function dateParser(fullDate, compactDate){
  var time = compactDate.slice(11, 19);
  var monthDay = fullDate.slice(20,32);
  Logger.log(monthDay);
  
}

function dateParserTest(){
  dateParser(full, compact);
}

var full = '10:15am - Thursday, February 1, 2018'
var compact = '2018-02-01T10:15:00+00:00'



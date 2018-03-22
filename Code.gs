/*
*  calendly-sync-gscripts
*  A Google Scripts app that imports events from calendly.com
*  to a Service Support Team Gsheets timetable
*
*  Miguel Saitz 2018
*/


function doPost(e) {
  console.log(e.postData.contents);
  var request = JSON.parse(e.postData.contents);
  
  if (!validateRequest(request)) {
    return;
  }
  
  var event = new CalendlyEvent(request);
  eventHandler(event); 
}


// Currently unused
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}


function validateRequest(request) {
  if (request.event == 'invitee.created' || request.event == 'invitee.canceled') {
    console.log('Request OK');
    return true;
  }
  console.log('Request invalid');
  return false;
}


function test() {
  var request = JSON.parse(req);
  
  if (!validateRequest(request)) {
    return;
  }
  
  var event = new CalendlyEvent(request);
  Logger.log(event.date);
  eventHandler(event); 
}



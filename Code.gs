function doPost(e) {
  var c = JSON.parse(e.postData.contents);
  var event = new CalendlyEvent(c);
  eventHandler(event);
  //return ContentService.createTextOutput('200');
}


function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}


function postTester(content) {
  c = JSON.parse(content)
  var event = new CalendlyEvent(c);
  console.log(event.name);
  console.log(event.month);
  console.log(event.day);
  console.log(event.weekDay);
  console.log(event.time);
  console.log(event.eventType)
}


// Testing!
function main() {
  var c = JSON.parse(content);
  var event = new CalendlyEvent(c);
  
  eventHandler(event);
}


var date = '10:59am - Thursday, February 1, 2018'

var content = '{"event":"invitee.created","time":"2018-02-17T18:23:45Z","payload":{"event_type":{"uuid":"ACFDOGPG3JHVJWI2","kind":"One-on-One","slug":"mobilehandover","name":"ICT Mobile Phone Handover","duration":15,"owner":{"type":"users","uuid":"CBEBDCLSER7AREEH"}},"event":{"uuid":"DHFINH3FNNMPKK43","assigned_to":["Hackney ICT"],"extended_assigned_to":[{"name":"Hackney ICT","email":"ict.servicedesk@hackney.gov.uk","primary":true}],"start_time":"2018-05-01T11:30:00+00:00","start_time_pretty":"11:30am - Thursday, March 1, 2018","invitee_start_time":"2018-02-27T15:30:0+00:00","invitee_start_time_pretty":"11:30am - Thursday, March 1, 2018","end_time":"2018-03-01T11:45:00+00:00","end_time_pretty":"11:45am - Thursday, March 1, 2018","invitee_end_time":"2018-03-01T11:45:00+00:00","invitee_end_time_pretty":"11:45am - Thursday, March 1, 2018","created_at":"2018-02-17T18:23:45+00:00","location":"ICT Ground Floor, Robert House, 6 - 15 Florefield Road, E8 1DT","canceled":false,"canceler_name":null,"cancel_reason":null,"canceled_at":null},"invitee":{"uuid":"BFCMMVXJRYZUJYLM","first_name":null,"last_name":null,"name":"Miguel chair","email":"test@test.com","timezone":"Europe\/London","created_at":"2018-02-17T18:23:45+00:00","is_reschedule":false,"payments":[],"canceled":false,"canceler_name":null,"cancel_reason":null,"canceled_at":null},"questions_and_answers":[{"question":"Is this for a mobile handover?","answer":"No"}],"questions_and_responses":{"1_question":"Is this for a mobile handover?","1_response":"No"},"tracking":{"utm_campaign":null,"utm_source":null,"utm_medium":null,"utm_content":null,"utm_term":null,"salesforce_uuid":null},"old_event":null,"old_invitee":null,"new_event":null,"new_invitee":null}}'



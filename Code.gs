function doPost(e){
  console.log(e.postData.contents);
  console.log(typeof(e.postData.contents));
  postTester(e.postData.contents);
  return ContentService.createTextOutput();
}


function doGet(e){
  return HtmlService.createHtmlOutputFromFile('Index');
}


function postTester(content){
  c = JSON.parse(content)
  var event = new CalendlyEvent(c);
  console.log(event.name);
  console.log(event.month);
  console.log(event.day);
  console.log(event.weekDay);
  console.log(event.time);
  console.log(event.eventType)
}


function main(){
  //var j = ;
  var event = new CalendlyEvent(j);
  Console.log(event.name);
  Console.log(event.month);
  Console.log(event.day);
  Console.log(event.weekDay);
  Console.log(event.time);
  Consle.log(event.eventType);
}

var date = '10:15am - Thursday, February 1, 2018'
var content = '{"time": "2018-01-21T20:31:49Z", "event": "invitee.created", "payload": {"event_type": {"kind": "1-on-1", "slug": "mobilehandover", "name": "ICT Mobile Phone Handover", "duration": 15}, "tracking": {"utm_term": null, "utm_content": null, "utm_medium": null, "utm_campaign": null, "salesforce_uuid": null, "utm_source": null}, "old_event": null, "questions_and_answers": [{"answer": "5678", "question": "Extension Number"}, {"answer": "Yes", "question": "Is this for a mobile handover?"}], "questions_and_responses": {"1_response": "5678", "2_response": "Yes", "1_question": "Extension Number", "2_question": "Is this for a mobile handover?"}, "invitee": {"is_reschedule": false, "name": "Test McTest", "canceled": false, "first_name": null, "canceled_at": null, "canceler_name": null, "last_name": null, "cancel_reason": null, "uuid": "EHBJOB5ZASPYJIU6", "timezone": "Europe/London", "payments": [], "created_at": "2018-01-21T20:31:49+00:00", "email": "test@test.com"}, "old_invitee": null, "event": {"invitee_start_time_pretty": "10:15am - Thursday, February 1, 2018", "assigned_to": ["Hackney ICT"], "canceled": false, "location": "Robert House, 6 - 15 Florefield Road, E8 1DT", "invitee_start_time": "2018-02-01T10:15:00+00:00", "start_time_pretty": "10:15am - Thursday, February 1, 2018", "end_time_pretty": "10:30am - Thursday, February 1, 2018", "created_at": "2018-01-21T20:31:49+00:00", "cancel_reason": null, "uuid": "CCBJEZA7NNRA46ZQ", "canceled_at": null, "canceler_name": null, "invitee_end_time_pretty": "10:30am - Thursday, February 1, 2018", "end_time": "2018-02-01T10:30:00+00:00", "extended_assigned_to": [{"primary": true, "email": "ict.servicedesk@hackney.gov.uk", "name": "Hackney ICT"}], "start_time": "2018-02-01T10:15:00+00:00", "invitee_end_time": "2018-02-01T10:30:00+00:00"}, "new_invitee": null, "new_event": null}}'
;




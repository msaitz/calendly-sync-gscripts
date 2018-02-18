function doPost(e) {
  var c = JSON.parse(e.postData.contents);
  var event = new CalendlyEvent(c);
  eventHandler(event);
}

// Currently unused
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}

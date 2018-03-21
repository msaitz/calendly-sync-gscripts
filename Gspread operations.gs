var SPREADSHEETID = '1Q8KfA3DwI4kCX9mTiowVqsNtpl119QjQhk9rSbGvrQo';
var MASTERSHEET = 'Template';
var EV_COL = [9, 20, 31, 42, 53];
var EV_ROW = 14;
var DT_COL = [4, 15, 26, 37, 48];
var DT_ROW = 4;


function eventHandler(event) {
  var firstDayWeek = getFirstDayWeek(event.date);
  var title = Utilities.formatDate(firstDayWeek, Session.getScriptTimeZone(), 'MMM dd-MM-YY');
  console.log(event.name);
  
  if (!isSheetInSpreadsheet(title)) {
    setSheetWeekTitle(duplicateWorkbook(title), firstDayWeek);
  }
  var sheet = SpreadsheetApp.openById(SPREADSHEETID).getSheetByName(title);
  editCell(sheet, event);
}


function editCell(sheet, event) {
  Logger.log(sheet.getIndex());
  var range = sheet.getRange(EV_ROW + event.timeIndex, EV_COL[event.weekDay]);
  
  if (event.canceled) { 
    range.setValue('');
    return;
    /* Validation temporarily disabled - function below needs to be updated
      if (validateCancelation(sheet, event)) {
      range.setValue('');
      return;
    } else {
      return;
    }*/
  }
  range.setValue(event.eventType + ': ' + event.name);
}


function duplicateWorkbook(newTitle) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEETID);
  var sheet = spreadsheet.getSheetByName(MASTERSHEET);
  sheet.copyTo(spreadsheet).setName(newTitle);
  return spreadsheet.getSheetByName(newTitle);
}


function setSheetWeekTitle(sheet, eventDate) {
  startDay = getFirstDayWeek(eventDate);
  
  // Set week title inside the sheet
  var range = sheet.getRange(2, 2);
  range.setValue('Service Desk Phone Rota - WB ' + Utilities.formatDate(getFirstDayWeek(eventDate), Session.getScriptTimeZone(), 'EEEE dd MMMM'));
  
  // Set day name and number for each daily timetable
  var week = getFullWeek(eventDate);
  
  // testing
  console.log(week);
  
  week.forEach(function(day, i) {
    var suffix = getSuffix(day);
    var range = sheet.getRange(DT_ROW, DT_COL[i]);
    console.log(range + 'test');
    
    range.setValue(Utilities.formatDate(day, Session.getScriptTimeZone(), 'EEEE') + ' ' + day.getDate() + suffix);
  });
}


function isSheetInSpreadsheet(title) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEETID);
  sheets = spreadsheet.getSheets();
  
  var found = false;
  sheets.forEach(function(sheet) {
    if (sheet.getName() == title) {
      found = true;
    }
  });
  return found;
}


function validateCancelation(sheet, event) {
  var range = sheet.getRange(EV_ROW + event.timeIndex, EV_COL[event.weekDay]);
  cellContent = range.getValue();
  expectedContent = event.eventType + ': ' + event.name;
  Logger.log(cellContent);
  Logger.log(expectedContent);
  
  if (cellContent !== expectedContent) {
    console.log('Cancelation validation has failed!')
    return false; 
  }
  return true;
}
var SPREADSHEETID = '';
var MASTERSHEET = 'Template';
var COL = [9, 20, 31, 42,53];
var ROW = 14;


function eventHandler(event) {
  title = Utilities.formatDate(getFirstDayWeek(event.date), 'GMT', 'MMM dd-MM-YY');
  if (!isSheetInSpreadsheet(title)) {
    duplicateWorkbook(title); 
  }
  var sheet = SpreadsheetApp.openById(SPREADSHEETID).getSheetByName(title);
  editCell(sheet, event);
}


function editCell(sheet, event) {
  var range = sheet.getRange(ROW + event.timeIndex, COL[event.weekDay]);
  
  if (event.canceled) {
    range.setValue('');
    return;
  }
  range.setValue(event.eventType + ': ' + event.name);
}


function duplicateWorkbook(newTitle) {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEETID);
  var sheet = spreadsheet.getSheetByName(MASTERSHEET);
  sheet.copyTo(spreadsheet).setName(newTitle);
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

 
function m() { 
  Logger.log(isSheetInSpreadsheet('Template'));
}
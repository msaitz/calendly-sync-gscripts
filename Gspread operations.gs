var SPREADSHEETID = '1c7xuhGPm_jYMqdTvsKn45W6QT6Hm5JZNo6BIdcSaYCU';
var MASTERSHEET = 'Template';
var EV_COL = [9, 20, 31, 42, 53];
var EV_ROW = 14;
var DT_COL = [4, 15, 26, 37, 48];
var DT_ROW = 4;


function eventHandler(event) {
  title = Utilities.formatDate(getFirstDayWeek(event.date), 'GMT', 'MMM dd-MM-YY');
 
  if (!isSheetInSpreadsheet(title)) {
    setSheetWeekTitle(duplicateWorkbook(title), event);
  }
  var sheet = SpreadsheetApp.openById(SPREADSHEETID).getSheetByName(title);
  editCell(sheet, event);
}


function editCell(sheet, event) {
  var range = sheet.getRange(EV_ROW + event.timeIndex, EV_COL[event.weekDay]);
  
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
  return spreadsheet.getSheetByName(newTitle);
}


function setSheetWeekTitle(sheet, event) {
  startDay = getFirstDayWeek(event.date);
  
  var range = sheet.getRange(2, 2);
  range.setValue('Service Desk Phone Rota - WB ' + Utilities.formatDate(startDay, 'GMT', 'EEEE dd MMMM'));
  
  week = getFullWeek(startDay);
  
  week.forEach(function(day, i) {
    var suffix = getSuffix(day);
    var range = sheet.getRange(DT_ROW, DT_COL[i]);
    range.setValue(Utilities.formatDate(day, 'GMT', 'EEEE') + ' ' + day.getDate() + suffix);
  });
}


function getSuffix(day) {
  var string = Utilities.formatDate(day, 'GMT', 'd');
  var lastChar = string.substr(string.length - 1);
  
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
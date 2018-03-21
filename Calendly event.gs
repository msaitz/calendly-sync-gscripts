function CalendlyEvent(data) { 
  this.name = data.payload.invitee.name;
  this.canceled = data.payload.invitee.canceled;
  this.date = dateParser(data.payload.event.invitee_start_time);
  this.formattedTitle = Utilities.formatDate(this.date, Session.getScriptTimeZone(), 'MMM dd-MM-YY');
  this.month = this.date.getMonth();
  this.time = Utilities.formatDate(this.date, Session.getScriptTimeZone(), 'HH:mm');
  this.day = this.date.getDate();
  this.weekDay = this.date.getDay() - 1;
  this.timeIndex = getTimeIndex(this.time);
  this.eventType = null;
  
  switch (data.payload.event_type.slug) {
    case '15min':
      this.eventType = 'Surgery';
      break;
    case 'mobilehandover':
      this.eventType = 'Phone';
      break;
    case 'ict-ipad-tablet-handover':
      this.eventType = 'iPad';
      break;
  }
}


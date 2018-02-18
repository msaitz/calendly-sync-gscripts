function CalendlyEvent(data) { 
  this.name = data.payload.invitee.name;
  this.canceled = data.payload.invitee.canceled;
  this.date = dateParser(data.payload.event.invitee_start_time);
  this.formattedTitle = Utilities.formatDate(this.date, 'GMT', 'MMM dd-MM-YY')
  this.month = Utilities.formatDate(this.date, 'GMT', 'M');
  this.time = Utilities.formatDate(this.date, 'GMT', 'HH:mm');
  this.day = Utilities.formatDate(this.date, 'GMT', 'F');
  this.weekDay = this.date.getDay() - 1;
  this.timeIndex = getTimeIndex(this.time);
  this.eventType = null;
  
  var type = data.payload.event_type.slug;
  switch (type) {
    case '15 min':
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


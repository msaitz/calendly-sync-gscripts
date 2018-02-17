function CalendlyEvent(data) { 
  this.name = data.payload.invitee.name;
  this.date = dateParser(data.payload.event.start_time_pretty, data.payload.event.invitee_start_time);
  this.month = Utilities.formatDate(this.date, 'GMT', 'M');
  this.time = Utilities.formatDate(this.date, 'GMT', 'HH:mm');
  this.day = Utilities.formatDate(this.date, 'GMT', 'F');
  this.weekDay = Utilities.formatDate(this.date, 'GMT', 'u');
  this.timeIndex = getTimeIndex(this.time);
  this.cancel = false;
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


import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { myEventList } from './myEventList';

BigCalendar.momentLocalizer(moment);
class Calendar extends Component {
  render() {
    return (
      <div>
       <BigCalendar
          events={myEventList}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    )
  }
}

export default Calendar;
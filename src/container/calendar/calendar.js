import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { myEventList } from './myEventList';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.momentLocalizer(moment);
class Calendar extends Component {
  render() {
    return (
      <div style={{height: '520px'}}>
       <BigCalendar
          events={myEventList}
          startAccessor='startDate'
          endAccessor='endDate'
          selectable={true}
          onSelecting={(range) => console.log(range)}
        />
      </div>
    )
  }
}

export default Calendar;
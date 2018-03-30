import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { myEventList } from './myEventList';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.momentLocalizer(moment);
class Calendar extends Component {
  constructor(props){
    super(props)
    this.handleSelectSlot = this.handleSelectSlot.bind(this);
  }
  handleSelectSlot =(slot) => {
    console.log(slot.start)
  }  
  render() {
    return (
      <div style={{height: '520px'}}>
       <BigCalendar
          events={myEventList}
          popup={true}
          startAccessor='startDate'
          endAccessor='endDate'
          selectable={true}
          onSelecting={(range) => console.log(range)}
          onSelectSlot={(slotInfo) => this.handleSelectSlot(slotInfo)}
        />
      </div>
    )
  }
}

export default Calendar;
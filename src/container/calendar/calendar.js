import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import moment from 'moment';
import { myEventList } from './myEventList';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.momentLocalizer(moment);
class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      start: '',
      end: ''
    }
    this.handleSelectSlot = this.handleSelectSlot.bind(this);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSelectSlot = (slot) => {
    this.setState({
      start: slot.start,
      end: slot.end
    })
    this.handleClickOpen()
    console.log(slot.start)
  }
  render() {
    return (
      <div style={{ height: '520px' }}>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Schedule your Events</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Start Date"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="End Date"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
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
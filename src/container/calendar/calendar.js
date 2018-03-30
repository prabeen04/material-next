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

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

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
    console.log(slot.end)
  }
  render() {
    return (
      <div style={{ height: '520px' }}>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          contentStyle={customContentStyle}
        >
          <DialogTitle id="form-dialog-title"> Schedule your Events</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="startDate"
              label="Start Date"
              type="text"
              value={this.state.start}
              fullWidth
            />
            <TextField
              margin="dense"
              id="endDate"
              label="End Date"
              type="text"
              value={this.state.end}
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
          defaultDate={new Date()}
          selectable={true}
          onSelecting={(range) => console.log(range)}
          onSelectSlot={(slotInfo) => this.handleSelectSlot(slotInfo)}
        />
      </div>
    )
  }
}

export default Calendar;
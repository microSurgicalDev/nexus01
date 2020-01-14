import React, { Component } from "react";
import axios from "axios";

class Scheduling extends Component {
  state = {
    appointments: [],
    isLoaded: false
  };

  getAppointments = () => {
    axios
      .get("/api/appointments")
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          appointments: data,
          isLoaded: true
        });
        console.log("data has been received");
        console.log(this.state.appointments);
      })
      .catch(err => {
        alert("Error retrieving data" + err);
      });
  };

  componentDidMount = () => {
    this.getAppointments();
  };

  render() {
    const { appointments, isLoaded } = this.state;
    const apptArray = appointments.map(appt => (
      <div key={appt._id}>
          <h2>Patient: </h2> 
          {appt.firstName} {appt.lastName}
        <h5>{appt.date}</h5>
        <h5>{appt.slot}</h5>
      </div>
    ));

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    console.log("State: ", this.state);
    return (
      <>
       
        <div style={{ marginLeft: "275px"}}>
            <h3>Schedule: </h3>
             
          <div>{apptArray}</div>
        </div>

      </>
    );
  }
}

export default Scheduling;
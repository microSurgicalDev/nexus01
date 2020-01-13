import React, { Component } from "react";
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";
import { TextField } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowIcon from "@material-ui/icons/ArrowRightAltSharp";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// import Patients from '../../Admin/Patients/Patients'

class NewPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: ""
    };

    this.addPatient = this.addPatient.bind(this);
    this.handleParseHandler = this.handleParseHandler.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }

  validatePhone(event, phoneNumber) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    this.setState({ phone: event.target.value });
    return regex.test(phoneNumber)
      ? this.setState({ phone: phoneNumber, validPhone: true })
      : this.setState({ validPhone: false });
  }

  handleParseHandler() {
    let parsedNumber = `+1${this.state.phone}`;
    this.setState({ phone: parsedNumber });
  }

  addPatient = event => {
    event.preventDefault();
    const newPatient = {
      number: this.state.phone,
      owner_id: this.client.auth.user.id
    };

    this.db
      .collection("new_patient")
      .insertOne(newPatient)
      .then(result =>
        console.log(
          `Successfully inserted item with _id: ${result.insertedId}.  A new patient has been added.`
        )
      )
      .catch(err => console.error(`Failed to insert item: ${err}`))
      .then(this.handleClose)
      .then(
        window.setTimeout(() => {
          alert(`You have added a new patient`);
        }, 3000)
      );
  };

  componentDidMount() {
    // Initialize the App Client
    // this.client = Stitch.initializeDefaultAppClient(
    //   "appointmentscheduler-racyu"

    this.client = Stitch.initializeDefaultAppClient("newpatient-mvhxr");

    Stitch.defaultAppClient.auth
      .loginWithCredential(new AnonymousCredential())
      .then(user => {
        console.log(`Logged in as anonymous user with id: ${user.id}`);
      })
      .catch(console.error);
    // Get a MongoDB Service Client, used for logging in and communicating with Stitch
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    // Get a reference to the new appointments database
    this.db = mongodb.db("patients");
  }

  render() {
    return (
      <>
        <ExpansionPanel
          style={{ marginLeft: "250px", width: "75%", marginTop: "20px" }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div>
              <Typography>Add Patients</Typography>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <Typography>
              <span style={{ width: "100px" }}>Patient Number</span>
            </Typography>
            <TextField
              style={{ display: "block", marginLeft: "60px" }}
              name="phone"
              label="(123) 456-7891"
              onChange={this.validatePhone}
              onChangeCapture={this.handleParseHandler}
            />
            <Button
              variant="contained"
              size="small"
              onClick={this.addPatient}
              style={{ marginLeft: "30px" }}
            >
              Send Text
              <ArrowIcon />
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* <Patients /> */}
      </>
    );
  }
}

export default NewPatient;

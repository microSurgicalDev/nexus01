import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    name: "",
    age: "",
    patients: []
  };

  componentDidMount = () => {
    this.getPatients();
  };

  getPatients = () => {
    axios
      .get("/api/patients")
      .then(res => {
        const data = res.data;
        this.setState({ patients: data });
        console.log("Data has been received");
      })
      .catch(err => console.log(err.response));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      age: this.state.age
    };

    axios
      .post("/api/patients", payload)
      .then(res => {
        console.log("Data has been saved " + res.data);
      })
      .catch(err => console.log(err.response));
  };

  displayPatients = patients => {
    if (!patients.length) return null;
    return patients.map((patient, index) => (
      <div key={index}>
        <h3>{patient.name}</h3>
        <p>{patient.age}</p>
      </div>
    ));
  };

  render() {
    return (
      <>
        <div className="App">
          <h3> Hello </h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="name"
              />
              <input
                type="text"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                placeholder="age"
              />
              <button>Submit</button>
            </div>
          </form>

          <div>{this.displayPatients(this.state.patients)}</div>
        </div>
      </>
    );
  }
}

export default App;

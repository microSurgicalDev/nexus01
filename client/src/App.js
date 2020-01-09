import React, { Component } from "react";
import axios from "axios";
import ButtonBases from './components/LandingPage/LandingPage';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import "./App.css";

class App extends Component {
  // state = {
  //   name: "",
  //   age: "",
  //   patients: []
  // };

  // componentDidMount = () => {
  //   this.getPatients();
  // };

  // getPatients = () => {
  //   axios
  //     .get("/api/patients")
  //     .then(res => {
  //       const data = res.data;
  //       this.setState({ patients: data });
  //       console.log("Data has been received");
  //     })
  //     .catch(err => console.log(err.response));
  // };

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const payload = {
  //     name: this.state.name,
  //     age: this.state.age
  //   };

  //   axios
  //     .post("/api/patients", payload)
  //     .then(res => {
  //       console.log("Data has been saved " + res.data);
  //     })
  //     .catch(err => console.log(err.response));
  // };

  // displayPatients = patients => {
  //   if (!patients.length) return null;
  //   return patients.map((patient, index) => (
  //     <div key={index}>
  //       <h3>{patient.name}</h3>
  //       <p>{patient.age}</p>
  //     </div>
  //   ));
  // };

  render() {
    return (
      <>
      <Navigation>
      <Layout />
      <ButtonBases/>
      </Navigation>
      </>
    );
  }
}

export default App;

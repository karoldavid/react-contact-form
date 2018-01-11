import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import "./App.css";

class App extends Component {


  handleSubmit = (params) => {
    console.log(params)
    //event.preventDefault();
    //console.log("submit");
  };

  render() {
    return (
      <div className="App">
        <ContactForm />
      </div>
    );
  }
}

export default App;

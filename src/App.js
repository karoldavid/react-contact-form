import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import { AppBar, MuiThemeProvider } from "material-ui";
import ContactForm from "./components/ContactForm";
import "./App.css";

class App extends Component {
  handleSubmit = params => {
    console.log(params);
    //event.preventDefault();
    //console.log("submit");
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={12}>
              <MuiThemeProvider>
                <AppBar title="Looking for a React Developer?" />
              </MuiThemeProvider>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <ContactForm />
            </Col>
          </Row>
          <Row>
            <Col sm={12} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import { AppBar, MuiThemeProvider } from "material-ui";
import { FIELDS } from "./utils/consts";
import ContactForm from "./components/ContactForm";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Container>
            <Row>
              <Col sm={12}>
                <AppBar
                  title="Looking for a React Developer?"
                  showMenuIconButton={false}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <ContactForm fields={FIELDS} />
              </Col>
            </Row>
            <Row>
              <Col sm={12} />
            </Row>
          </Container>
        </MuiThemeProvider>
      </div>
    );
  }
}

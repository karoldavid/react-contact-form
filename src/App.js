import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormSyncErrors } from "redux-form";
import { Container, Row, Col } from "react-grid-system";
import { AppBar, MuiThemeProvider, Snackbar } from "material-ui";
import ContactForm from "./components/ContactForm";
import * as actions from "./actions";
import "./App.css";
import { FIELDS } from "./utils/consts";


class App extends Component {
  render() {
    const { open, message, resetData } = this.props;
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
                <ContactForm fields={FIELDS}/>
                <Snackbar
                  open={open}
                  message={message}
                  autoHideDuration={5000}
                  onRequestClose={() => resetData()}
                />
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

const mapStateToProps = (state) => {
  const { message, open } = state.data
  return {
    errors: getFormSyncErrors("contactForm")(state),
    message,
    open
  };
};

export default connect(mapStateToProps, actions)(App);

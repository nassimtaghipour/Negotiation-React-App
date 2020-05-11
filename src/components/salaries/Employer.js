import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// This component is created for employer
class Employer extends Component {
  handleChangeForMaxSalary = (event) => {
    this.props.SetMaxSalary(event.target.value);
  };
  _btnSubmited = () => {
    if (document.getElementById("txtMaximumSalary").value !== "") {
      this.props.SetSubmitedEmployer();
      document.getElementById("txtMaximumSalary").style.display = "none";
      document.getElementById("btnEmployer").disabled = true;
      document.getElementById("lblerrorforEmployes").style.display = "none";
    } else {
      document.getElementById("lblerrorforEmployes").innerHTML =
        "please fill the value";
    }
  };
  get btnSubmited() {
    return this._btnSubmited;
  }
  set btnSubmited(value) {
    this._btnSubmited = value;
  }
  render() {
    return (
      <Form style={{ paddingTop: 20 }}>
        <Form.Group as={Row}>
          <Col sm={10}>
            <Form.Control
              id="txtMaximumSalary"
              type="text"
              placeholder="enter maximum salary"
              onChange={this.handleChangeForMaxSalary}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={10}>
            <Button id="btnEmployer" onClick={(e) => this.btnSubmited()}>
              Submit
            </Button>
            <br />
            <br />
            <Form.Label id="lblerrorforEmployes"></Form.Label>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default Employer;

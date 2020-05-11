import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// this component is created for employee
class Employee extends Component {
  handleChangeForMinSalary = (event) => {
    this.props.SetMinSalary(event.target.value);
  };
  _btnSubmited = () => {
    if (document.getElementById("txtMinimumSalary").value !== "") {
      this.props.SetSubmitedEmployee();
      document.getElementById("txtMinimumSalary").style.display = "none";
      document.getElementById("btnEmployee").disabled = true;
      document.getElementById("lblerror").style.display = "none";
    }
    else {
      document.getElementById("lblerror").innerHTML = "please fill the value";
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
              id="txtMinimumSalary"
              type="text"
              placeholder="enter minimum salary"
              onChange={this.handleChangeForMinSalary}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={10}>
            <Button
              id="btnEmployee"
            
              onClick= {(e) => this.btnSubmited()} 
            >
              Submit
            </Button><br/><br/>
            <Form.Label id="lblerror" ></Form.Label> 
          </Col>
        </Form.Group>

      </Form>
    );
  }
}

export default Employee;

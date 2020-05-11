import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Employee from "./components/salaries/Employee";
import Employer from "./components/salaries/Employer";
import SweetAlert from "sweetalert2-react";
import axios from "axios";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    minSalary: 0,
    maxSalary: 0,
    SubmitedEmployee: false,
    SubmitedEmployer: false,
    show: false,
    success: false,
  };
  componentDidMount() {
    this.getWeather();
  }

  // calling the weather api
  getWeather = () => {
    this.setState({ temperature: 0 });
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=bc533ae51a1e46fbf3e979467a7cac02"
      )
      .then((res) => {
        this.setState({ temperature: res.data.main.temp });
      });
  };

  SetMinSalary = (value) => {
    this.setState({ minSalary: value });
  };
  SetMaxSalary = (value) => {
    this.setState({ maxSalary: value });
  };
  SetSubmitedEmployee = () => {
    this.setState({ SubmitedEmployee: true }, () => {
      this.CompareSalaries();
    });
  };
  SetSubmitedEmployer = () => {
    this.setState({ SubmitedEmployer: true }, () => {
      this.CompareSalaries();
    });
  };
  showAlert = () => {
    this.setState({ show: true });
  };
  _setStatus = () => {
    if (Number(this.state.minSalary) <= Number(this.state.maxSalary)) {
      this.setState({ success: true });
    } else {
      this.setState({ success: false });
    }
  };
  get setStatus() {
    return this._setStatus;
  }
  set setStatus(value) {
    this._setStatus = value;
  }
  _CompareSalaries = () => {
    if (
      this.state.SubmitedEmployee === true &&
      this.state.SubmitedEmployer === true
    ) {
      this.setStatus();
      this.showAlert();
    }
  };
  get CompareSalaries() {
    return this._CompareSalaries;
  }
  set CompareSalaries(value) {
    this._CompareSalaries = value;
  }
  resetStates = () => {
    this.props.history.push("/Terminate");
  };
  render() {
    return (
      <Layout>
        <div className="content">
          <Tabs defaultActiveKey="Employer">
            <Tab eventKey="Employer" title="Employer">
              <Employer
                SetMaxSalary={this.SetMaxSalary}
                SetSubmitedEmployer={this.SetSubmitedEmployer}
              />
            </Tab>
            <Tab eventKey="Employee" title="Employee">
              <Employee
                SetMinSalary={this.SetMinSalary}
                SetSubmitedEmployee={this.SetSubmitedEmployee}
              />
            </Tab>
          </Tabs>
          {this.state.success === true ? (
            <SweetAlert
              type="success"
              show={this.state.show}
              title={`Success! London temperature is ${this.state.temperature}`}
              text={`Maximum offer was ${this.state.maxSalary} and
             
               Minimum expected salary was ${this.state.minSalary} `}
              onConfirm={() => this.resetStates()}
            />
          ) : (
            <SweetAlert
              type="error"
              show={this.state.show}
              title={`Failure! London temperature is ${this.state.temperature}`}
              text={`Maximum offer was ${this.state.maxSalary} and
            
               Minimum expected salary was ${this.state.minSalary} `}
              onConfirm={() => this.resetStates()}
            />
          )}
        </div>
      </Layout>
    );
  }
}

export default App;

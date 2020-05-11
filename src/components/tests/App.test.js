import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import Employee from "../salaries/Employee";
import Employer from "../salaries/Employer";
configure({ adapter: new Adapter() });
// Unit test for App Component
describe('salary for employee will be insereted as min slalry and salary for employer will be inserted as max salary', () => {
  it('compare employee salary and employer salary and set the value for success', () => {
const app = shallow(<App />);
    app.setState({minSalary:2000, maxSalary:6000 , SubmitedEmployee:true , SubmitedEmployer:true , show:false , success:false   });
    const instance = app.instance();
    instance.setStatus();
    expect(app.state('success')).toEqual(true);

  });
});
// Unit test for Employee Component
describe("Input Parameter would be set as minSalary  ", () => {
  it("should call onChange prop with input value", () => {
    const event = {
      target: { value: "the-value" },
    };
    const SetMinSalary = jest.fn();
    const employee = shallow(<Employee SetMinSalary={SetMinSalary} />);
    const spy = jest.spyOn(employee.instance(), "handleChangeForMinSalary");
    employee.find("#txtMinimumSalary").simulate("change", event);
    expect(SetMinSalary).toBeCalledWith("the-value");
  });
});
// Unit test for Employer Component
describe("Input Parameter would be set as maxSalary  ", () => {
  it("should call onChange prop with input value", () => {
    const event = {
      target: { value: "the-value" },
    };
    const SetMaxSalary = jest.fn();
    const employer = shallow(<Employer SetMaxSalary={SetMaxSalary} />);
    const spy = jest.spyOn(employer.instance(), "handleChangeForMaxSalary");
    employer.find("#txtMaximumSalary").simulate("change", event);
    expect(SetMaxSalary).toBeCalledWith("the-value");
  });
});

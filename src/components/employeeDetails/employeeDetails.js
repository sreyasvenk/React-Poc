import React, { Component } from "react";
import "./employeeDetails.scss";
export default class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let employeeDetail = this.props.employeeDetail;
    if (!employeeDetail) {
      return null;
    }
    
    return (
      <div className="component-employee-details">

        <div
          className="row h-100 w-100 py-2"
          
        >
          <div class="col-12 w-100 h-100">
            <div className="row h-100">
              <div className="col-6">
                <span className="employee-image-details float-right"></span>
              </div>

              <div className="col-6 mx-0 my-3">
                <span className="font-weight-bold font-20 text-nowrap">
                  {employeeDetail.Name}
                </span>
                <div className="font-15 text-info text-nowrap">
                  {employeeDetail.Designation}
                </div>
                <div className="pt-1 font-weight-bold font-12">
                  {employeeDetail.Availability}
                </div>
              </div>
                <div className="row w-100 ml-3">
                <div className="col-12">
                <div className="font-15 text-center font-weight-bold">Contact Information</div>
                <div className="font-14 pt-2">Office Tel : {employeeDetail.contactInformation.officeTel}</div> 
                <div className="font-14">Mobile : {employeeDetail.contactInformation.mobile}</div> 
                <div className="font-14">E-mail : {employeeDetail.contactInformation.email}</div> 
                </div>
                <div className="row w-100 ml-3 pt-2">
                <div className="col-3 linked-in"></div> 
                <div className="col-3 facebook "></div> 
                <div className="col-3 twitter "></div> 
                <div className="col-3 skype "></div>  
                </div>
                 <hr className="solid"></hr>      
                </div>
            </div>
          </div>
          <div class="col-12 w-100 pt-2">
          <div className="row w-100 ml-3">
                <div className="col-12">
                <div className="font-15 text-center font-weight-bold">Work Information</div>
                <div className="font-14 pt-2">Department : {employeeDetail.workInformation.Department}</div> 
                <div className="font-14">Supervisor: {employeeDetail.workInformation.Supervisor}</div> 
                <div className="font-14">Office : {employeeDetail.workInformation.Office}</div> 
                </div>
                <hr className="solid "></hr>
                </div>
                     
          </div>
          <div class="col-12 w-100 pt-2">
          <div className="row w-100 ml-3">
                <div className="col-12">
                <div className="font-15 text-center font-weight-bold">Personal Information</div>
                <div className="font-14 pt-2">Sex : {employeeDetail.personalInformation.Sex}</div> 
                <div className="font-14">Birthday: {employeeDetail.personalInformation.Birthday}</div> 
                <div className="font-14">City : {employeeDetail.personalInformation.City}</div> 
                </div>
                <hr className="solid "></hr>
                </div>
                     
          </div>

        </div>
      </div>
    );
  }
}

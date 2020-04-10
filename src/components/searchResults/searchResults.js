import React, { Component } from "react";
import "./searchResults.scss";
export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.setState({employeeDetails:this.props.employees});
  }
  render() {
    let employees = this.state.employeeDetails;
    if(!employees)
    {
      return null;
    }
    return (
      <div className="row">
        <div className="col-12 w-100">
          <table className="table table-hover">
          <thead>
          <tr>  
            <th>Name</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Availability</th>
          </tr>
          </thead>
          <tbody className="w-100">
            {
                  employees.map((element)=>{
                    return(
                      <tr key={Math.random()}>
                       <td> 
                      <div className="row">
                        <div className="col-3">
                          <span className="employee-image"></span>
                        </div>
                        <div className="col-6">
                        <span className="font-weight-bold">{element.Name}</span>
                        <div className="text-info mx-0">{element.Designation}</div>

                        </div>
                      </div>
                       
                        </td>
                       <td className="font-weight-bold">{element.workInformation.Department}</td>
                       <td className="font-weight-bold">{element.contactInformation.officeTel}</td>
                       <td>
                         <div className="row">
                           <div className="col-6">
                           {element.Availability}
                           </div>
                           <div className="col-3 dropdown dropright">
                                <i className="btn fa fa-ellipsis-v"  type="button"  data-toggle="dropdown"></i>                          
                                <div className="dropdown-menu">
                                    <div className="dropdown-item dropdown-text ">Edit<i className="fa fa-pencil-square-o px-2"></i></div>
                                    <div className="dropdown-divider"/>
                                    <div className="dropdown-item dropdown-text">Delete<i className="fa fa-trash px-2" aria-hidden="true"></i></div>
                                
                                </div>  
                           </div>
                         </div>
                         
                        </td>
                       </tr>
                    );
                  })
 
            }
          </tbody>
          </table>      
        </div>
      </div>
    );
  }
}

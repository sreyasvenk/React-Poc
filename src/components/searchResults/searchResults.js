/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "./searchResults.scss";
export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { sortOption: "Alphabetical A-Z" };
    this.setEmployeeDetails = this.setEmployeeDetails.bind(this);
    this.updateSearchCriteria = this.updateSearchCriteria.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  componentDidMount() {
    this.setEmployeeDetails();
  }

  setEmployeeDetails = (event) => {
    this.setState({ employeeDetails: this.props.employees });
  };
  updateSearchCriteria = () => {
    const { employeeDetails } = this.state;

    let searchCriteria = this.props.searchCriteria;
    let searchResult = [];

    searchResult = employeeDetails.filter((employee) => {
      if (searchCriteria.Name !== "*") {
        if (
          employee.Name.toUpperCase().match(searchCriteria.Name.toUpperCase())
        ) {
          if (
            employee.workInformation.Department === searchCriteria.Department &&
            employee.Availability === searchCriteria.Availability
          ) {
            return employee;
          } else if (
            (employee.workInformation.Department ===
              searchCriteria.Department ||
              employee.Availability === searchCriteria.Availability) &&
            (searchCriteria.Availability === "All" ||
              searchCriteria.Department === "All")
          ) {
            return employee;
          } else if (
            searchCriteria.Department === "All" &&
            searchCriteria.Availability === "All"
          ) {
            return employee;
          }
        }
      } else if (searchCriteria.Name === "*") {
        if (
          employee.workInformation.Department === searchCriteria.Department &&
          employee.Availability === searchCriteria.Availability
        ) {
          return employee;
        } else if (
          employee.workInformation.Department === searchCriteria.Department &&
          searchCriteria.Availability === "All"
        ) {
          return employee;
        } else if (
          employee.Availability === searchCriteria.Availability &&
          searchCriteria.Department === "All"
        ) {
          return employee;
        } else if (
          searchCriteria.Availability === "All" &&
          searchCriteria.Department === "All"
        ) {
          return employee;
        } else if (searchCriteria.Availability === "All") {
          if (
            employee.workInformation.Department === searchCriteria.Department
          ) {
            return employee;
          }
        } else if (searchCriteria.Department === "All") {
          if (employee.Availability === searchCriteria.Availability) {
            return employee;
          }
        }
      }
    });
    return searchResult;
  };

  changeSortOption = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  filterByName = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  compareFunction = (objA, objB) => {
    const valueA = objA.Name.toUpperCase();
    const valueB = objB.Name.toUpperCase();
    const { sortOption } = this.state;
    let comparison = 0;

    if (sortOption === "Alphabetical A-Z") {
      if (valueA < valueB) {
        comparison = -1;
      }
    } else {
      if (valueA > valueB) {
        comparison = -1;
      }
    }
    return comparison;
  };

  sendEmployeeDetail = (employee) => {
    this.props.sendEmployeeData(employee);
  };
  removeItem =(index)=>{
   this.setState((prevState)=>{
     let employees = prevState.employeeDetails
     employees.splice(index,1);
     this.props.sendEmployeeData(employees[0]); 
     return {employees} 
    });
  }

  render() {
    let employees = this.state.employeeDetails;
    let searchCriteria = this.props.searchCriteria;
    let displayTableToggle = "";
    let displayNoResults = "";
    let results = "";
    if (this.state.filterCriteria) {
      results = employees.filter((emp) => {
        if (emp.Name.startsWith(this.state.filterCriteria)) {
          return emp;
        }
      });
    }
    if (!employees) {
      return null;
    } else {
      if (this.state.sortOption) {
        employees = employees.sort(this.compareFunction);
      }
      if (searchCriteria) {
        employees = this.updateSearchCriteria();
      }
      if (results.length > 0 && employees.length > 0) {
        employees = results;
      } else if (results.length === 0 && this.state.filterCriteria) {
        employees = [];
      }
      displayTableToggle =
        employees.length > 0 ? "table table-hover" : "d-none";
      displayNoResults =
        employees.length === 0 ? "w-100 alert alert-danger" : "d-none";
    }
    

    return (
      <div className="row">
        <div className="col-12 w-100">
          <div className="row w-100 py-3">
            <div className="col-6">
              <input
                className="form-control float-left custom-placeholder"
                name="filterCriteria"
                id="filterCriteria"
                onChange={this.filterByName}
                placeholder="Filter by Name..."
              ></input>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-3 ">
                  <span className="font-weight-bold text-light float-right pt-1">
                    Sort:
                  </span>
                </div>
                <div className="col-9">
                  <select
                    value={this.state.sortOption}
                    id="sort-option"
                    name="sortOption"
                    className="form-control float-right"
                    onChange={this.changeSortOption}
                  >
                    <option value="Alphabetical Z-A">Alphabetical Z-A</option>
                    <option value="Alphabetical A-Z">Alphabetical A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <table className={displayTableToggle}>
            <thead className="text-light">
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Phone Number</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody className="w-100">
              {employees.map((element,index) => {
                return (
                  <tr
                    key={Math.random()}
                    
                  >
                    <td>
                      <div className="row">
                        <div className="col-3">
                          <span className="employee-image"></span>
                        </div>
                        <div className="col-6 cursor-pointer"  onClick={() => this.sendEmployeeDetail(element)}>
                          <span className="font-weight-bold text-light">
                            {element.Name}
                    
                          </span>
                          <div className="text-primary mx-0">
                            {element.Designation}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold text-light">
                      {element.workInformation.Department}
                    </td>
                    <td className="font-weight-bold text-warning">
                      {element.contactInformation.officeTel}
                    </td>
                    <td>
                      <div className="row">
                        <div className="col-6 text-warning font-weight-bold">{element.Availability}</div>
                        <div className="col-3 dropdown drop-left">
                          <i
                            className="btn fa fa-ellipsis-v"
                            type="button"
                            data-toggle="dropdown"
                          ></i>
                          <div className="dropdown-menu">
                            <div className="dropdown-item dropdown-text" onClick={()=>{this.removeItem(index)}}>
                              Delete
                              <i
                                className="fa fa-trash px-2"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={displayNoResults}>No Results Found !</div>
        </div>
      </div>
    );
  }
}

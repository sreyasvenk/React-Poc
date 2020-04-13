import React, { Component } from "react";
import "./dashboard.scss";
import Header from "../header";
import Search from "../search/search";
import SearchResults from "../searchResults";
import axios from "axios";
import EmployeeDetails from "../employeeDetails";
export default class Dashboard extends Component {
  url = "./Users.json";
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get(this.url).then((response) => {
      this.setState({ employeeDetails: response.data.employeeDetails });
    });
  }

   handleSearchData = (dataFromSearch)=>{
    this.setState({searchCriteria:dataFromSearch});

  }
  
  getEmployeeData = (employeeData)=>{
    if(employeeData)
    {
        
       this.setState({employeeData:employeeData});
      
      
    }
    
  };

render() {
    let employeeDetails = this.state.employeeDetails;
    let name =""
    let displayEmployeeData=""
   
    if (!employeeDetails) {
     
      return null;
    }
  displayEmployeeData=this.state.employeeData?"col-md-3 bg-light":"d-none"
  name = this.state.employeeData?this.state.employeeData.Name:""  
    return (
      <React.Fragment>
        <div className="row w-100  h-100 component-dashboard">
        {<Header></Header>}
        
          <div className="col-md-9">
            <div className="row w-100 ">
              <div className="col-12 ">{<Search sendSearchCriteria={this.handleSearchData}></Search>}</div>
            </div>
            <div className="row w-100">
              <div className="col-12">
                {
                  <SearchResults employees={this.state.employeeDetails} searchCriteria={this.state.searchCriteria} sendEmployeeData={this.getEmployeeData}></SearchResults>
                }
              </div>
            </div>
          </div>
          <div className={displayEmployeeData}style={{ borderLeft: "1px solid" }}>
         <div className="row w-100">
              <div className="col-12">
                {
                  <EmployeeDetails employeeDetail={this.state.employeeData}></EmployeeDetails>
                }
              </div>
            </div>
            <div className="col-12 w-100  create-account-container text-center py-2">
              <span className="text-dark font-weight-bold font-label text-nowrap">View {name}'s Full Profile</span>
          </div>

          </div> 
        </div>
      </React.Fragment>
    );
  }
}

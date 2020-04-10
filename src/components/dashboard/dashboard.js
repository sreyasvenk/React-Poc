import React, { Component } from "react";
import "./dashboard.scss";
import Header from "../header";
import Search from "../search/search";
import SearchResults from "../searchResults";
import axios from "axios";
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

  render() {
    let employeeDetails = this.state.employeeDetails;
    if (!employeeDetails) {
      return null;
    }
    return (
      <React.Fragment>
        <div>{<Header></Header>}</div>
        <div className="container row w-100 ">
          <div className="col-md-9 component-dashboard">
            <div className="row w-100 ">
              <div className="col-12 ">{<Search></Search>}</div>
            </div>
            <div className="row w-100">
              <div className="col-12">
                {
                  <SearchResults employees={this.state.employeeDetails}></SearchResults>
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

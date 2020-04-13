import React, { Component } from 'react';
import './search.scss'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      Name:"",
      Availability:"All",
      Department:"All"

    };
  }
  handleChange=(event)=>{
    let {name,value}=event.target
    this.setState({[name]:value})
    
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.sendSearchCriteria(this.state);
  }
  render() {
    
    return (
      <div className="row my-3 mx-3">
        <div className="row w-100">
          <div className="col-6">
            <span className="text-light label-font">Employee Directory</span>
          </div>
        </div>
        <form className="row py-4" onSubmit={this.handleSubmit}>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="Name" className="text-light">Name</label>
              <input type="text" className="form-control" id="Name" name="Name" onChange={this.handleChange}></input>

            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="Department" className="text-light">Department</label>
              <select value={this.state.Department} className="form-control" id="Department" name="Department" onChange={this.handleChange}>
                <option value="All">All</option>  
                <option value="Engineering">Engineering</option>
                <option value="Accounting">Accounting</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Design">Design</option>
              </select>

            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="Availability" className='text-light'>Availability</label>
              <select value={this.state.Availability} className="form-control" id="Availability" name="Availability" onChange={this.handleChange}>
               <option value="All">All</option> 
               <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
          <div className="col-3 h-100 button-padding">
          <input type="button" className="btn btn-primary w-100 " value="Filter" onClick={this.handleSubmit}></input>
       </div>
        </form>

      </div>


    );
  }
}


export default withRouter(Search);
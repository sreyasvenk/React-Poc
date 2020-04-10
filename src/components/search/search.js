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
  render() {
    
    return (
      <div className="row my-3 mx-3">
        <div className="row w-100">
          <div className="col-6">
            <span className="text-muted label-font">Employee Directory</span>
          </div>
        </div>
        <form className="row py-4">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="Name" className="text-muted">Name</label>
              <input type="text" className="form-control" id="Name" name="Name" onChange={this.handleChange}></input>

            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="Department" className="text-muted">Department</label>
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
              <label htmlFor="Availability" className='text-muted'>Availability</label>
              <select value={this.state.Availability} className="form-control" id="Availability" name="Availability" onChange={this.handleChange}>
               <option value="All">All</option> 
               <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>
          <div className="col-3 h-100 button-padding">
          <input type="submit" className="btn btn-primary w-100 " value="Filter"></input>
       </div>
        </form>

      </div>


    );
  }
}


export default withRouter(Search);
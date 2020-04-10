import React, {Component} from 'react';
import './header.scss'
import { Link} from 'react-router-dom'
import  { Navbar,Nav} from 'react-bootstrap'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      return (
          <Navbar bg="dark" fixed='top' >
            <Navbar.Brand><Link to="/login"><span className="text-light">Employee Dashboard</span></Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link> <span className="text-light">Add Employee</span></Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link><Link to="/login">Sign Out</Link></Nav.Link>
            </Nav>

          </Navbar>


      );
    }
  }

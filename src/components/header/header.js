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
            <Navbar.Brand className="mr-auto"><Link to="/login"><span className="text-light">Employee Dashboard</span></Link></Navbar.Brand>
            
            <Nav >
              <Link to="/login">Sign Out</Link>
            </Nav>

          </Navbar>


      );
    }
  }

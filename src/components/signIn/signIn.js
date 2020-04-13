import React, { Component } from 'react';
import './signIn.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import axios from 'axios'

export default class SignIn extends Component {


  constructor(props) {

    super(props);
    this.state = {
      users: [],
      userName: '',
      passWord: '',
      errors: {
        userName: '',
        passWord: '',

      },
      touched: {
        userName: false,
        passWord: false,
      },
      isFormValid: false,
     

    };
  }

  componentDidMount() {
    this.fetchUsers()
  }
  fetchUsers() {
    axios.get("./Users.json").then((response) => {
      console.log(response);
      this.setState({ users: response.data.userDetails})
    })
  }
  handleSubmit = (event) => {
    let userFound = false;
    event.preventDefault()
    if (this.state.isFormValid) {
      let users = this.state.users;
      const { userName, passWord } = this.state
      users.forEach((element) => {
        if (element.username === userName && element.password === passWord) {
          userFound=true;
          this.props.history.push('/dashboard')
          //alert("Login Succesfull"+"HI"+this.state.userName)
        }
      })
    }

    if (!userFound) {
      this.setState({isLoginFailed:true})
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    const { touched } = this.state
    let errors = this.state.errors;
    switch (name) {
      case 'userName':
        errors.userName = touched.userName && value.length === 0 ? "Username is required" : ''
        break;
      case 'passWord':
        errors.passWord = touched.passWord && value.length === 0 ? "Password is required" : ''
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value })
    if (this.state.userName.length > 0 && this.state.passWord.length > 0) {
      this.isFormValid();
    }


  };

  handleBlur = (event) => {
    event.preventDefault()
    const { name } = event.target;
    let touched = this.state.touched;
    touched[name] = true
    this.setState({ touched })

  }
  isFormValid = () => {
    let valid = true;
    let errors = this.state.errors;
    Object.values(errors).forEach((value) => {
      value.length > 0 && (valid = false);
    });
    this.setState({ isFormValid: valid });
  }

  render() {
    const { isFormValid, errors } = this.state
  return (
      <div className="row height-100 background-container p-3 position-relative">
        <form autoComplete="off" className="margin-auto bg-light sign-in-container p-4 position-relative" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-9 mx-0">
              <h4 style={{ textDecoration: "none" }}>Sign in</h4>
            </div>

            <div className="col-3 mx-auto">
              <div className="close-image float-right"></div>
            </div>
          </div>
          <div className="row p-5 mt-5">
            <div className="col-12 form-group">
              <label htmlFor="userName"><span className="text-muted label-font">Email or Username</span></label>
              <input type="text" className="display-as-line" name="userName" id='userName' onChange={this.handleChange} onBlur={this.handleBlur}></input>
              {errors.userName.length > 0 && <span className="text-danger">{errors.userName}</span>}
            </div>
            <div className="col-12 form-group">
              <label htmlFor="passWord"><span className="text-muted label-font">Password</span></label>
              <input type="password" className="display-as-line" name="passWord" onBlur={this.handleBlur} onChange={this.handleChange} id="passWord"></input>
              {errors.passWord.length > 0 && <span className="text-danger">{errors.passWord}</span>}
            </div>
            <div className="col-6 pt-4">

              <label htmlFor="signedIn" className="container">
                <input type="checkbox" id="signedIn" name="signedIn"></input>
                <span className="checkmark"></span>
                <span className=" pl-3 text-muted stay-signed-in ">Stay Signed In ?</span></label>
            </div>
            <div className="col-6 pt-4">


              <input type="submit" disabled={!isFormValid} value="Sign In" className="btn btn-primary w-100"></input>
            </div>
          </div>
          {this.state.isLoginFailed===true&&<div className="alert alert-danger">Incorrect Username or Password ! Please Try Again.</div>}
          <div className="col-12  create-account-container text-center py-2">
            <span className="text-dark label-font">Create an account</span>
          </div>
        </form>
      </div>
    );

  }
}

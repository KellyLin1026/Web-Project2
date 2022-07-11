import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class User extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
   //email validation
   onChange= input => e => {
    this.setState({
      email: e.target.value,
    });
  }
  emailValidation() {
    const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(!this.state.email || regex.test(this.state.email) === false);
  }
  onSubmit() {
    const isEmailValid = this.emailValidation();
    this.setState(
      {
        isvalid: isEmailValid,
        message: isEmailValid
          ? "Email Address is Valid!"
          : "Email Address not valid!",
      },
      () => this.props.onEmailSubmit(this.state)
    );

    // Check if email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }
  render() {
    const {values, handleChange} = this.props;
    return (
      <div className='Details'>
        <h3>Enter User informations</h3>
        <br />
        <form onSubmit={this.continue}>
        <label>Enter Your User Name:  </label>
        <input  
          type="text" 
          required 
          onChange={handleChange('userName')}
          defaultValue={values.userName}
        />
        <br />
        <br />
        <label>Enter Your Password:  </label>
        <input 
          type="password"
          required
          onChange={handleChange('password')}
          defaultValue={values.password}
        />
         <br />
         <br />
        <label>Enter Your Email:  </label>
        <input 
          onChange={handleChange('email')}
          required
          defaultValue={values.email}
          type="email"
        />
         <br />
         <br />
         <button
          type="submit"
          onClick={() => {this.onSubmit()}}
         >
         Submit
        </button>
         <br />
         <br />
         <br />
      </form>
      </div>
    )
  }
}

export default User
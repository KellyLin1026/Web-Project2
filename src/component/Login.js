import React, { Component } from 'react';
import User2 from './User2';


export class Login extends Component {
  state = {
    step:1,
    userName:'',
    password:'',
    email:''
  }
  //handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  //Go back to pervious step
  render() {
    const { step } = this.state;
    const { userName, password, email, money } = this.state;
    const values = { userName, password, email, money };

            return(
                <User2
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
  }
}

export default Login;
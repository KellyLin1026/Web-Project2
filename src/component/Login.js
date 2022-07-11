import React, { Component } from 'react';
import User2 from './User2';
import { Link } from 'react-router-dom';

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
  // Proceed to next step
  nextStep = () =>{
    const { step } =this.state;
    this.setState({
        step: step+1
    });
  }
 
  //Go back to pervious step
  render() {
    const { step } = this.state;
    const { userName, password, email, money } = this.state;
    const values = { userName, password, email, money };
    switch(step){
      case 1 :
          return(
              <User2
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              />
          );
      case 2 :
          return(
            <div className = "Details">
              <h3>You have Login Successfully !</h3>
              <Link to={`/`} style={{ 
              backgroundColor: '#fbd3c5',
              borderRadius: '8px',
              color: 'black',
              padding: '4px 14px',
              margin: '20px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100px'
          }}>Back to Home</Link>
          </div>         
          );
  }
  }
}

export default Login;
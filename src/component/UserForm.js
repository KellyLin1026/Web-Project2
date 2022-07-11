import React, { Component } from 'react';
import User from './User';
import Personal from './Personal';
import Success from './Success'
import { Link } from 'react-router-dom';

export class UserForm extends Component {
  state = {
    step:1,
    userName:'',
    password:'',
    email:'',
    occupation:'',
    city:'',
    bio:''
  }
  // Proceed to next step
  nextStep = () =>{
    const { step } =this.state;
    this.setState({
        step: step+1
    });
  }
  prevStep = () =>{
    const { step } =this.state;
    this.setState({
        step: step-1
    });
  }
  //handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  //Go back to pervious step
  render() {
    const { step } = this.state;
    const { userName, password, email, occupation, city, bio } = this.state;
    const values = { userName, password, email, occupation, city, bio };
    switch(step){
        case 1 :
            return(
                <User
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
        case 2 :
            return(
              <Personal
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            );
        case 3:
              return <Success
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
               />;
       case 4:
        return(
          <div className = "Details">
            <h3>You have Register Successfully !</h3>
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
        </div>         )
    }
  }
}

export default UserForm;
import React, { Component } from 'react';
import User from './User';
import PaymentList from './paymentList';
import Confirm from './Confirm';

export class Payment extends Component {
  state = {
    step:1,
    userName:'',
    password:'',
    email:'',
    money:''
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
    const { userName, password, email, money } = this.state;
    const values = { userName, password, email, money };
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
              <PaymentList
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            );
        case 3:
              return <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
               />;
    }
  }
}

export default Payment;
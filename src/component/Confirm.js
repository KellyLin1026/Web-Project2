import React, { Component } from 'react';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {userName,  email, money}
    } = this.props;
    return (
      <div className='Details'>
            <h1>Thank You For Your Submission</h1>
            <p>You are Successfully Paid.</p>
            <h4>User Name : {userName}</h4>
            <h4>Email : {email}</h4>
            <h4>Money: {money}</h4>
         <br />
         <br />
         <button
              onClick={this.back}
        >Back</button>
        <button
              onClick={this.continue}
        >Continue</button>
      </div>
    );
  }
}

export default Success;
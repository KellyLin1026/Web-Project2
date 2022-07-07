import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      values: {userName, password, email, occupation, city, bio}
    } = this.props;
    return (
      <div className='Details'>
            <h1>Thank You For Your Submission</h1>
            <p>You are Successfully Registered.</p>
            <h4>User Name : {userName}</h4>
            <h4>Password : {password}</h4>
            <h4>Email : {email}</h4>
            <h4>Occupation: {occupation}</h4>
            <h4>City : {city}</h4>
            <h4>Bio : {bio}</h4>
         <br />
         <br />
         <button
              onClick={this.back}
        >Back</button>
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

export default Success;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class User extends Component {
  render() {
    const {values, handleChange} = this.props;
    return (
      <div className='Details'>
        <h3>Login</h3>
        <br />
        <form>
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

          onChange={handleChange('password')}
          defaultValue={values.password}
        />
         <br />
         <br />
        <label>Enter Your Email:  </label>
        <input 
          floatingLabelText="Email"
          onChange={handleChange('email')}
          required
          defaultValue={values.email}
        />
         <br />
         <br />
         <br />
         <Link to={`/`} style={{ 
            backgroundColor: '#fbd3c5',
            borderRadius: '8px',
            color: 'black',
            padding: '4px 14px',
            margin: '30px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100px'
        }}>Login</Link>
        <br />
      </form>
      </div>
    )
  }
}

export default User
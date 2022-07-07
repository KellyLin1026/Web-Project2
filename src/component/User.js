import React, { Component } from 'react'


export class User extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const {values, handleChange} = this.props;
    return (
      <div className='Details'>
        <h3>Register User information</h3>
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
         <button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</button>
        <br />
      </form>
      </div>
    )
  }
}

export default User
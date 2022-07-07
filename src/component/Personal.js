import React, { Component } from 'react'


export class Personal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values, handleChange} = this.props;
    return (
      <div className='Details'>
        <h3>Register Personal information</h3>
        <br />
        <form>
        <label>Enter Your Occupation:  </label>
        <input 
          floatingLabelText="ocuupation"
          required
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          margin="normal"
          fullWidth
        />
        <br />
        <br />
        <label>Enter Your City:  </label>
        <input 
          floatingLabelText="City"
          onChange={handleChange('city')}
          required
          defaultValue={values.city}
          margin="normal"
          fullWidth
        />
         <br />
         <br />
        <label>Enter Your Bio:  </label>
        <input 
          floatingLabelText="Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          margin="normal"
          fullWidth
        />
         <br />
         <br />
         <button
              onClick={this.back}
        >Back</button>
         <button
              onClick={this.continue}
        >Continue</button>
        <br />
      </form>
      </div>
    )
  }
}

export default Personal
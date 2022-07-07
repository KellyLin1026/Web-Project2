import React, { Component } from 'react'


export class paymentList extends Component {
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
        <h3>Complete the Payment</h3>
        <br />
        <form>
        <label>Enter Your Number:  </label>
        <input 
          type="text" 
          required 
        />
        <br />
        <br />
        <label>Enter Your Expiration Date:  </label>
        <input 
          type="text" 
          required 
        />
         <br />
         <br />
         <label>Name of Card:  </label>
        <input 
          type="text" 
          required 
        />
         <br />
         <br />
         <label>Enter Your CVV:  </label>
        <input 
          type="text" 
          required 
        />
         <br />
         <br />
         <label>Enter Your Postal Code:  </label>
        <input 
          type="text" 
          required 
        />
         <br />
         <br />
         <select
          onChange={handleChange('money')}
          defaultValue={values.money}
        >
          <option value="0~1.99">0~1.99</option>
          <option value="1.99~4.99">1.99~4.99</option>
          <option value="4.99~7.99">4.99~7.99</option>
          <option value="7.99+">7.99+</option>       
        </select>
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

export default paymentList
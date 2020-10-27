import React from 'react'
import PropTypes from 'prop-types'

class Loan extends React.Component {

  constructor (props){
    super(props)
    this.state = { amount: '' }
  }

  handleChange = (e) => {
    //console.log(e.target.value)
    this.setState({ amount: e.target.value })
  }

  render(){
    const { handleLoan } = this.props
    const { amount } = this.state

    return <div>
      <br/>
      <h2>Information company</h2>
      <form>
      <label>Identification number:</label><br />
        <input type="text" id="identificationNumber" name="identificationNumber" /><br />
        <label>Business name:</label><br />
        <input type="text" id="businessName" name="businessName" /><br />
        <label>Request amount:</label><br />
        <input 
          value = { this.state.amount } 
          onChange = {this.handleChange}
          type="text"
          id="requestAmount" 
          name="requestAmount" /><br />
        <label>Social secure number:</label><br />
        <input type="text" id="socialSecNum" name="socialSecNum" /><br />
        <label>Name owner:</label><br />
        <input type="text" id="nameOwner" name="nameOwner" /><br />
        <label>Name owner:</label><br />
        <input type="text" id="nameOwner" name="nameOwner" /><br />
        <label>Email owner:</label><br />
        <input type="text" id="emailOwner" name="emailOwner" /><br />
        <br />
        <button type="button" onClick={() => handleLoan(amount)}>Submit</button>
        <br />
        <label id="validationMessage"></label>
      </form>
    </div> 
  }
}

Loan.propTypes = {
  handleLoan: PropTypes.func.isRequired
}

export default Loan
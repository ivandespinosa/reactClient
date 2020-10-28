import React from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css" 

class Loan extends React.Component {

  constructor (props){
    super(props)
    this.state = { 
      amount: '', 
      identificationNumber: '',
      businessName: '',
      socialSecNum: '',
      nameOwner: '',
      emailOwner: ''
    }
  }

  handleIdentificationChange = (e) => {
    this.setState({ identificationNumber: e.target.value })
  }

  handleBusinessNameChange = (e) => {
    this.setState({ businessName: e.target.value })
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value })
  }

  handleSocialSecNumChange = (e) => {
    this.setState({ socialSecNum: e.target.value })
  }

  handleNameOwnerChange = (e) => {
    this.setState({ nameOwner: e.target.value })
  }

  handleEmailOwnerChange = (e) => {
    this.setState({ emailOwner: e.target.value })
  }

  render(){
    const { handleLoan, message } = this.props
    //const { amount } = this.state

    return <div className="container flex">
      <br/>
      <h2>Information company</h2>
      <form>
      <div className="row">
        <div className="col-sm">
          <label>Identification number:</label>
          <input 
            value = { this.state.identificationNumber } 
            onChange = {this.handleIdentificationChange}
            className ="form-control"
            type="text" 
            id="identificationNumber" 
            name="identificationNumber" />
        </div>
        <div className="col-sm">
        <label>Business name:</label>
        <input 
          value = { this.state.businessName } 
          onChange = {this.handleBusinessNameChange}
          className ="form-control"
          type="text" 
          id="businessName" 
          name="businessName" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
        <label>Request amount:</label>
          <input 
            className ="form-control"
            value = { this.state.amount } 
            onChange = {this.handleAmountChange}
            type="text"
            id="requestAmount" 
            name="requestAmount" />
        </div>
        <div className="col-sm">
        <label>Social secure number:</label>
          <input 
            value = { this.state.socialSecNum } 
            onChange = {this.handleSocialSecNumChange}
            className ="form-control"
            type="text" 
            id="socialSecNum" 
            name="socialSecNum" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <label>Name owner:</label>
          <input 
            value = { this.state.nameOwner } 
            onChange = {this.handleNameOwnerChange}
            className="form-control"
            type="text" 
            id="nameOwner" 
            name="nameOwner" />
        </div>
        <div className="col-sm">
        <label>Email owner:</label>
          <input 
            value = { this.state.emailOwner } 
            onChange = {this.handleEmailOwnerChange}          
            className ="form-control"
            type="text" 
            id="nameOwner" 
            name="nameOwner" />          
        </div>
      </div>      
      <hr />
      <div className="row">
        <div className="col-sm">
          <button 
            className = "btn btn-primary" 
            type="button" 
            onClick={() => handleLoan(this.state)}
            >Submit</button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg">
          <div 
            className="alert alert-success text-center" 
            role="alert">
            {message}
          </div>                  
        </div>
      </div>        
      </form>
    </div> 
  }
}

Loan.propTypes = {
  handleLoan: PropTypes.func.isRequired
}

export default Loan
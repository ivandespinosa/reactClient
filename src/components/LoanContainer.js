import React from 'react'
import { post } from '../services/LoanServices'
import Loan from './Loan'

class LoanContainer extends React.Component {

  constructor (){
    super()

    this.state = {
      loanResponse: ""
    }
  }

  handleLoan = async (data) => {
    if(data.amount === '' || isNaN(parseFloat(data.amount.toString()))){
      alert("The amount is null")
      return
    }
    
    const responseJson = await post(data)
    this.setState({ loanResponse : responseJson })
    console.log(this.state.loanResponse.message)
  }

  render(){
    return (
      <Loan 
        handleLoan = { this.handleLoan } 
        message = {this.state.loanResponse.message}>
      </Loan>);
  }
}

export default LoanContainer
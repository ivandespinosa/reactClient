import React from 'react'
import { post } from '../services/LoanServices'
import Loan from './Loan'

class LoanContainer extends React.Component {

  handleLoan = async (amount) => {
    const responseJson = await post(amount)
    console.log(responseJson)
  }

  render(){
    return (<Loan handleLoan = { this.handleLoan }></Loan>);
  }
}

export default LoanContainer
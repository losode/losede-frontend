import React from 'react'

class PaymentMethod extends React.Component{


   continue =(e)=>{
     e.preventDafault()
     this.props.nextStep()
  }

  back =(e) =>{
    e.preventDafault()
    this.props.previousStep()
  }

  render(){
  return(
    <React.Fragment>
      <div className='container'>
        <h4>Payment Methods</h4>
        <p>Kindly Select a payment method</p>
       <div className='form-group'>
         <label>
         <input type ='radio' value ='card'
         checked ={this.state.payment ==='card'}
         className='form-control'/>
        CARD PAYMENT
         </label> 
       </div>
        
       <div className='form-group'>
         <label>
         <input type ='radio' value ='bank'
         checked ={this.state.payment ==='bank'}
         className='form-control'/>
          BANK TRANSFER
         </label> 
       </div>
       <div className='row'>
         <div className ='col-md-6'>
           <button className ='btn btn-primary' onClick ={this.previous}>Back</button>
         </div>

         <div className ='col-md-6'>
           <button className ='btn btn-primary'>Pay</button>
         </div>

       </div>
      </div>
   
    </React.Fragment>
  )
}
}


export default PaymentMethod
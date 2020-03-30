import React from 'react'

class PaymentMethod extends React.Component{
  constructor(props){
    super(props)
    this.back = this.back.bind(this)
    this.continue = this.continue.bind(this)
  }


   continue(){
    
     this.props.nextStep()
  }

  back(){
   
    this.props.previousStep()
  }

  render(){
    const {handleRadioButton,values} = this.props
  return(
    <React.Fragment>
      <div className='container'>
        <h4>Payment Methods</h4>
        <p>Kindly Select a payment method</p>
       <div className='form-group'>
         <label>
         <input type ='radio' value ='card' 
         checked ={values.checked ==='card'}
         onChange ={handleRadioButton}
         className='form-control'/>
        CARD PAYMENT
         </label> 
       </div>
        
       <div className='form-group'>
         <label>
         <input type ='radio' value ='bank' 
         checked ={values.checked ==='bank'}
         onChange ={handleRadioButton}
         className='form-control'/>
          BANK TRANSFER
         </label> 
       </div>
       <div className='row'>
         <div className ='col-md-6'>
           <button className ='btn btn-primary' onClick ={this.back}>Back</button>
         </div>

         <div className ='col-md-6'>
           <button className ='btn btn-primary' onClick ={this.continue}>Pay</button>
         </div>

       </div>
      </div>
   
    </React.Fragment>
  )
}
}


export default PaymentMethod
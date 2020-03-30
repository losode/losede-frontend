import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import PaymentMethod from './PaymentMethod'
import OrderSuccessful from './OrderSuccessful' 

class CheckoutForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            step:1,
            firstname:'',
            lastname :'',
            email:'',
            phone:'',
            address:'',
            country:'',
            city:'',
            payment:'bank'

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioButton = this.handleRadioButton.bind(this)

    }
  handleSubmit(e){
      e.preventDafault()
      alert('order created')
  }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleRadioButton(e){
        this.setState({
            payment:e.target.value
        })
    }


    nextStep = ()=> {
        
        this.setState({step:this.state.step+1})
    }

    previousStep =()=>{
       this.setState({step:this.state.step-1})
    }
  
    render(){
        const {step} = this.state
        const {firstname,lastname,email,address,city,phone,payment} = this.state
        const values = {firstname,payment,lastname,email,address,city,phone}
        switch(step){
            case 1:
                return(
                    <DeliveryAddress nextStep ={this.nextStep}
                     handleChange={this.handleChange}
                     values ={values}/>
                )
            case 2:
                return(
                    <PaymentMethod nextStep ={this.nextStep}
                     previousStep={this.previousStep}
                     values ={values} handleRadioButton={this.handleRadioButton}
                      />
                )
            case 3:
                return(
                    <OrderSuccessful/>
                )
 
            
        }
        
    }
}

export default CheckoutForm
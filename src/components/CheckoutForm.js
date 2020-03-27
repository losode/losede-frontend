import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import OrderSuccessful from './OrderSuccessful'
import PaymentMethod from './PaymentMethod'

class CheckoutForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentStep:1,
            firstname:'',
            lastname :'',
            email:'',
            phone:'',
            address:'',
            country:'',
            city:''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._next = this._next.bind(this)
        this._previous = this._previous.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    _next(){
        let currentStep = this.state.currentStep
        {/*if the current step is one or two, then add one on next button click */}
        currentStep = currentStep >= 2 ? 3: currentStep +1
        this.setState({currentStep})
    }

    _previous(){
        let currentStep = this.state.currentStep
         {/*if the current step is 2 or 3, then subtract  one on a previous button click */}
       currentStep = currentStep <= 1 ? 1:currentStep -1
       this.setState({currentStep})
    }
  
    
    render(){
        return(
            <React.Fragment>
               <DeliveryAddress 
               currentStep={this.state.currentStep}
               handleChange={this.handleChange}
                firstname ={this.state.firstname}
                lastname ={this.state.lastname}
                email ={this.state.email}
                address={this.state.address}
                phone ={this.state.phone}
                city ={this.state.city}

               />
               <PaymentMethod/>
               <OrderSuccessful/>

            </React.Fragment>
        )
    }
}

export default CheckoutForm
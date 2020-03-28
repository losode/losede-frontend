import React from 'react'
import DeliveryAddress from './DeliveryAddress'
import PaymentMethod from './PaymentMethod'

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
            checked:false,
            payment:''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheckBox = this.handleCheckBox.bind(this)
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

    handleCheckBox(e){
        this.setState({checked:!this.state.checked})
    }

    nextStep = ()=> {
        let step = this.state.step
        this.setState({step:step+1})
    }

    previousStep =()=>{
        let step = this.state.step
       this.setState({step:step-1})
    }
  
    render(){
        const {step} = this.state
        const {firstname,lastname,email,address,city,phone,checked,payment} = this.state
        const values = {firstname,payment,lastname,email,address,city,phone,checked}
        switch(step){
            case 1:
                return(
                    <DeliveryAddress nextStep ={this.nextStep}
                     handleChange={this.handleChange}
                     handleCheckBox = {this.handleCheckBox}
                     values ={values}/>
                )
            case 2:
                return(
                    <PaymentMethod nextStep ={this.nextStep}
                     previousStep={this.previousStep}
                     values ={values} handleCheckBox={this.handleRadioButton}
                      />
                )
 
            
        }
        
    }
}

export default CheckoutForm
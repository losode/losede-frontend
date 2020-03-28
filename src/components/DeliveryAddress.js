import React from 'react'

class DeliveryAddress extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'> 
                        <div className ='col-md-6 form-group'>
                            <label>
                                Firstname
                                <input type ='text' name ='firstname'
                                placeholder ='Enter your firstname'
                                 onChange ={this.props.handleChange}
                                 value = {this.props.firstname}
                                 className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                                Lastname:
                                <input type ='text' name ='lastname'
                                placeholder ='Enter your Lastname'
                                onChange ={this.props.handleChange}
                                value ={this.props.lastname}
                                className ='form-control'
                                />
                            </label>
                        </div>

                        <div className ='col-md-6 form-group'>
                            <label>
                                Email Address: 
                                <input type ='email' name ='email'
                                placeholder ='Enter your Email'
                                onChange ={this.props.handleChange}
                                value ={this.props.email}
                                className ='form-control'
                                />
                            </label>
                        </div>

                        <div className ='col-md-6 form-group'>
                            <label>
                                Phone:
                                <input type ='tel' name ='phone'
                                placeholder ='Enter your Telephone Number'
                                onChange ={this.props.handleChange}
                                value ={this.props.phone}
                                className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                               Address
                                <input type ='text' name ='address'
                                placeholder ='Enter your Address'
                                onChange ={this.props.handleChange}
                                value ={this.props.address}
                                className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                               City
                                <input type ='text' name ='lastname'
                                placeholder ='Enter your Lastname'
                                onChange ={this.props.handleChange}
                                value ={this.props.lastname}
                                className ='form-control'
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DeliveryAddress
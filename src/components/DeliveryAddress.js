import React from 'react'

class DeliveryAddress extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checked:false
        }
        this.continue = this.continue.bind(this)
        this.handleCheckBox= this.handleCheckBox.bind(this)
    }
    
    continue(){
        this.props.nextStep()
    }

    handleCheckBox(e){
        this.setState({
            checked: !this.state.checked
        })
    }
    

    render(){
        const {values, handleChange}= this.props
        return( 
            <React.Fragment>
                {
                    !this.state.checked ?(
                        <div className='container-fluid'>
                        <div className='row'> 
                            <div className ='col-md-6 form-group'>
                                <label>
                                    Firstname
                                    <input type ='text' name ='firstname'
                                    placeholder ='Enter your firstname'
                                     onChange ={handleChange}
                                     value = {values.firstname}
                                     className ='form-control'
                                    />
                                </label>
                            </div>
                            <div className ='col-md-6 form-group'>
                                <label>
                                    Lastname:
                                    <input type ='text' name ='lastname'
                                    placeholder ='Enter your Lastname'
                                    onChange ={handleChange}
                                    value ={values.lastname}
                                    className ='form-control'
                                    />
                                </label>
                            </div>
    
                            <div className ='col-md-6 form-group'>
                                <label>
                                    Email Address: 
                                    <input type ='email' name ='email'
                                    placeholder ='Enter your Email'
                                    onChange ={handleChange}
                                    value ={values.email}
                                    className ='form-control'
                                    />
                                </label>
                            </div>
    
                            <div className ='col-md-6 form-group'>
                                <label>
                                    Phone:
                                    <input type ='tel' name ='phone'
                                    placeholder ='Enter your Telephone Number'
                                    onChange ={handleChange}
                                    value ={values.phone}
                                    className ='form-control'
                                    />
                                </label>
                            </div>
                            <div className ='col-md-6 form-group'>
                                <label>
                                   Address
                                    <input type ='text' name ='address'
                                    placeholder ='Enter your Address'
                                    onChange ={handleChange}
                                    value ={values.address}
                                    className ='form-control'
                                    />
                                </label>
                            </div>
                            <div className ='col-md-6 form-group'>
                                <label>
                                   City
                                    <input type ='text' name ='city'
                                    placeholder ='Enter your City Name'
                                    onChange ={handleChange}
                                    value ={values.city}
                                    className ='form-control'
                                    />
                                </label>
                             </div>
                            <div className ='col-md-6 form-group'>
                                <label>
                                   Country
                                    <input type ='text' name ='country'
                                    placeholder ='Enter your Country'
                                    onChange ={handleChange}
                                    value ={values.country}
                                    className ='form-control'
                                    />
                                </label>
                            </div>
                            
                            <input type ='checkbox'
                             name ='anotherAddress'
                              onChange={this.handleCheckBox}
                              checked = {this.state.checked}
                              className ='form-control'/>
                             Ship to a different Address
                           
                           <div className='col-md-6'>
                               <button className='btn btn-primary' onClick={this.continue}>Proceed</button>
                           </div>
                           
                        </div>
                    </div>   
                    ): 
                     (
                        <div className='container-fluid'>
                    <div className='row'> 
                        <div className ='col-md-6 form-group'>
                            <label>
                                Firstname
                                <input type ='text' name ='firstname'
                                placeholder ='Enter your firstname'
                                 onChange ={handleChange}
                                 value = {values.firstname}
                                 className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                                Lastname:
                                <input type ='text' name ='lastname'
                                placeholder ='Enter your Lastname'
                                onChange ={handleChange}
                                value ={values.lastname}
                                className ='form-control'
                                />
                            </label>
                        </div>

                        <div className ='col-md-6 form-group'>
                            <label>
                                Email Address: 
                                <input type ='email' name ='email'
                                placeholder ='Enter your Email'
                                onChange ={handleChange}
                                value ={values.email}
                                className ='form-control'
                                />
                            </label>
                        </div>

                        <div className ='col-md-6 form-group'>
                            <label>
                                Phone:
                                <input type ='tel' name ='phone'
                                placeholder ='Enter your Telephone Number'
                                onChange ={handleChange}
                                value ={values.phone}
                                className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                               Address
                                <input type ='text' name ='address'
                                placeholder ='Enter your Address'
                                onChange ={handleChange}
                                value ={values.address}
                                className ='form-control'
                                />
                            </label>
                        </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                               City
                                <input type ='text' name ='city'
                                placeholder ='Enter your City Name'
                                onChange ={handleChange}
                                value ={values.city}
                                className ='form-control'
                                />
                            </label>
                         </div>
                        <div className ='col-md-6 form-group'>
                            <label>
                               Country
                                <input type ='text' name ='country'
                                placeholder ='Enter your Country'
                                onChange ={handleChange}
                                value ={values.country}
                                className ='form-control'
                                />
                            </label>
                        </div>
                        
                        
                      

                       <div className='col-md-6'>
                           <button className='btn btn-primary' onClick={this.continue}>Proceed</button>
                       </div>
                       
                    </div>
                </div>
                     )
                    
                }
                
            </React.Fragment>
        )
    }
}

export default DeliveryAddress
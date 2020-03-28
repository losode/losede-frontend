import React from 'react'

class DeliveryAddress extends React.Component{
    
    continue  = (e) => {
        e.preventDefault()
        this.props.next()
    }
    

    render(){
        const {values, handleChange,checked, handleCheckBox} = this.props
        switch(checked){
            case false:
                return(
                    <React.Fragment>
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
                                <div className ='col-md-6 form-group'>
                                <input type ='checkbox'
                                 name ='anotherAddress'
                                  onChange={handleCheckBox}
                                  checked = {values.checked}
                                  className ='form-control'/>
                                 Ship to a different Address
                                </div>
                               <div className='col-md-6'>
                                   <button className='btn btn-primary' onClick={this.continue}>Proceed</button>
                               </div>
                               
                            </div>
                        </div>
                    </React.Fragment>
                )

        case true:
            return(
                <React.Fragment>
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
                            </div>
                            </div>
                </React.Fragment>
            )
        }
       
    }
}

export default DeliveryAddress
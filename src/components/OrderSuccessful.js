import React from 'react'
import {Link} from 'react-router-dom'

const OrderSuccessful = ()=>{
    return(
        <React.Fragment>
            Order Successful
            <ul>
                <li><Link to ='/'>Continue Shopping</Link></li>
            </ul>
        </React.Fragment>
    )
}
export default OrderSuccessful
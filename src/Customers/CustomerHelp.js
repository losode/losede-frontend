import React from 'react'
// import Search from './Search'
import {Link} from 'react-router-dom'
import OrderIcon from '../assets/images/box.png'
import Payments from '../assets/images/payment-method.png'
import Delivery from '../assets/images/package.png'
import Returns from  '../assets/images/exchange.png'
import Stock from '../assets/images/tshirt.png'
import Support from '../assets/images/support.png'

class CustomerHelp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                {/* <Search/> */}
                <div className='container-fluid help-components'>
                 <div className="top-row flex-containers">
                    <div className="order-box">
                       <a href="">
                       <img src={OrderIcon} className="img-fluid help-icons" alt="icon for order issues"/>
                        <p>Order Issues</p>
                       </a>
                    </div>
                    <div className="order-box">
                    <a href="">
                       <img src={Payments} className="img-fluid help-icons" alt="icon for payment issues"/>
                        <p>Payments & Discounts</p>
                       </a>
                    </div>
                    <div className="order-box">
                    <a href="">
                       <img src={Delivery} className="img-fluid help-icons" alt="icon for payment issues"/>
                        <p>Delivery Issues</p>
                       </a>
                    </div>
                 </div>
                 <div className="bottom-row flex-containers">
                 <div className="order-box">
                 <a href="">
                       <img src={Returns} className="img-fluid help-icons" alt="icon for return & refunds"/>
                        <p>Returns & Refunds</p>
                       </a>
                 </div>
                 <div className="order-box">
                 <a href="">
                       <img src={Stock} className="img-fluid help-icons" alt="icon for Product & Stock issues"/>
                        <p>Product & Stocks</p>
                       </a>
                 </div>
                 <div className="order-box">
                 <a href="">
                       <img src={Support} className="img-fluid help-icons" alt="icon for customer support"/>
                        <p>Customer Support</p>
                       </a>
                 </div>
                 </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CustomerHelp
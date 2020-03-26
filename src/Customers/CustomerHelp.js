import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import OrderIcon from '../assets/images/box.png'

class CustomerHelp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <Search/>
                <div className='container-fluid'>
                 <div className="top-row flex-containers">
                    <div className="">
                        <img src={OrderIcon} className="img-fluid" alt="icon for order issues"/>
                    </div>
                    <div className="">2</div>
                    <div className="">3</div>
                 </div>
                 <div className="bottom-row flex-containers">
                 <div className="">1</div>
                 <div className="">2</div>
                 <div className="">3</div>
                 </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CustomerHelp
import React, {useState, useEffect, useContext} from 'react';
import '../Styles/Cart.css'
import axios from 'axios';
import {UserContext} from './User-Context';

function Cart(){
    const [Orders, setOrders] = useState([]);
    const UsContext = useContext(UserContext);
    
    useEffect(()=>{
        

         const user = JSON.parse(localStorage.getItem('UserStorage'))
         const Email = user.email
         
        axios.post(`${process.env.REACT_APP_API_URL}o1/getorders`, {Email})
        
        .then(res => {
            setOrders(res.data)
        })
        window.scrollTo(0, 0)
    }, [])
    return(

        <div className="CartContainer">

            <h1 className="CartH1">Your Orders List</h1>

                {
                    Orders.length === 0 ? <div className="NoOrders">Review Our Products and Order Now <i className="fas fa-shopping-cart"></i></div> : <div className="Orders">
                        
                    {
                        Orders.map((item, key)=>{
                            return <div key={key} className="Order">
                                    <div className="InnerOrder">
                                            <p className="OrderName"><span>Product Name:</span> {item.ProductName}</p>
                                            <p className="OrderPrice"><span>Price:</span> {item.Price} LE</p>
                                            <p className="OrderSize"><span>Size:</span> {item.Size}</p>
                                            <p className="OrderColor"><span>Color:</span> {item.Color}</p>
                                            <p className="OrderQuantity"><span>Quantity:</span> {item.Quantity}</p>
                                            <p className="OrderDate"><span>Date:</span> {item.Date}</p>
                                            <p className="OrderStatus"><span>Status:</span> {item.Status === 'Pending' ? <span className="Pending" id="PendingSpan">Pending</span> : <span></span>}{item.Status === 'In Progress' ? <span id="StatusId" className="Progress">{item.Status}</span> : <span></span>}{item.Status === 'Done' ? <span id="StatusId" className="Status">{item.Status}</span> : <span></span>}</p>
                                    </div>
                                    <hr></hr>
                            </div>
                        })
                    }
            </div>
                }
                
        </div>
    )
}

export default Cart;
import React, {useState, useEffect} from "react";
import '../Styles/Cart.css'
import axios from "axios";




function AdminCart(){

    const [Orders, setOrders] = useState([]);
    const [Status, setStatus] = useState('');
    const [OrderId, setOrderId] = useState('');
    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}o1/getallorders`)
        .then(res => {
            setOrders(res.data)
           
        })
        window.scrollTo(0, 0)
    }, [])
    
    function handleChangeStatus(e){
        e.preventDefault();
       
        axios.post(`${process.env.REACT_APP_API_URL}o1/changeorderstatus`, {Status, OrderId})
    }

    return(

        <div className="AdminCartContainer">
                <h1>Admin Cart</h1>
                    
                {
                    Orders.length === 0 ? <div className="NoOrders">No New Orders Right Now <i className="fas fa-shopping-cart"></i></div> : <div className="Orders">
                    {
                        Orders.map((item, key)=>{
                            return <div id={item._id} key={key} className="Order">
    
                                        <div className="InnerOrder">
                                            <p className="OrderDate"><span>Client Name:</span> {item.Name}</p>
                                            <p className="OrderDate"><span>Address:</span> {item.Address}</p>
                                            <p className="OrderDate"><span>City:</span> {item.City}</p>
                                            <p className="OrderDate"><span>Mobile:</span> {item.Mobile}</p>
                                            <p className="OrderDate"><span>Second Mobile:</span> {item.SecondMobile}</p>
                                            <p className="OrderName"><span>Product Name:</span> {item.ProductName}</p>
                                            <p className="OrderPrice"><span>Price:</span> {item.Price} LE</p>
                                            <p className="OrderSize"><span>Size:</span> {item.Size}</p>
                                            <p className="OrderColor"><span>Color:</span> {item.Color}</p>
                                            <p className="OrderQuantity"><span>Quantity:</span> {item.Quantity}</p>
                                            <p className="OrderDate"><span>Date:</span> {item.Date}</p>
                                            <p className="OrderStatus"><span>Status: </span> 
                                                <select onChange={(e)=>{
                                                    setStatus(e.target.value)
                                                    setOrderId(document.getElementById(item._id).id)
                                                }} defaultValue={item.Status}>
                                                    
                                                    <option>Pending</option>
                                                    <option>In Progress</option>
                                                    <option>Done</option>
                                                </select>
                                                {
                                                    OrderId !== item._id ? <span></span> : <button onClick={handleChangeStatus} className="btn btn-success savebtn">Save</button>
                                                }
                                            </p>
                                            
                                        </div>
                                        {
                                            item.Seen === 'No' ? <span onClick={()=>{
                                                const OrderId = document.getElementById(item._id).id;
                                                axios.post(`${process.env.REACT_APP_API_URL}o1/changeorderseen`, {OrderId})
                                                .then(res => {
                                                    if(res.data.message === 'Changed'){
                                                        
                                                    }
                                                })
                                                
                                            }} id="BCheck" className="BeforeCheck"><i className="fas fa-check"></i></span> : <span id="ACheck"  className="Checked"><i className="fas fa-check-circle"></i></span>
                                        }
                                            <hr></hr>
                                  </div>
                        })
                    }
                    
                    </div>
                }

                
        </div>

    )
}

export default AdminCart;
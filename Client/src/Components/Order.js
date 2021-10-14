import React, {useEffect, useState, useContext} from "react";
import '../Styles/Order.css'
import { useParams, useHistory } from "react-router";
import axios from "axios";
import {Link} from 'react-router-dom'
import {UserContext} from './User-Context';

function Order(){

    const history = useHistory();
    const params = useParams();
    const Find = params.id;
    const [Product, setProduct] = useState([]);
    const [Size, setSize] = useState('');
    const [Price, setPrice] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Color, setColor] = useState('');
    const UsContext = useContext(UserContext)
    const [Message, setMessage] = useState('');
    const [Success, setSuccess] = useState('');

    useEffect(()=>{
        const token = localStorage.getItem('Token')
        if(!token){
            history.push('/SignUp')
        }
        axios.post(`${process.env.REACT_APP_API_URL}p1/findproduct`, {Find})
        .then(res => {
            setProduct([res.data])
        })
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=>{
        if(Product.length === 0){
            return
        }else{
            setPrice(Product[0].price)
        }
    }, [Product])

    function hanldeOrder(e){
        e.preventDefault();
        const Email =  UsContext.User.email;
        const FirstName =   UsContext.User.firstname;
        const LastName =   UsContext.User.lastname;
        const Mobile =   UsContext.User.mobile;
        const Address =   UsContext.User.address;
        const SecondMobile =   UsContext.User.secondmobile;
        const City =   UsContext.User.city;

        axios.post(`${process.env.REACT_APP_API_URL}o1/order`, {Find, Size, Color, Quantity, Email, Price, FirstName, LastName, Mobile, Address, SecondMobile, City})
        .then(res=>{
            if(res.data.message === 'Error'){
                setMessage(res.data.message)
            }else{
                setSuccess(res.data.message)
                setTimeout(()=>history.push('/Cart'), 2000)
            }
        })
    }

    return(
        <div className="OrderContainer">
            <h1 className="OrderH1">Order <span>{Find}</span> Now</h1>
            
            <div className="Alerts">
                <ul>
                    <li><p>by clicking order, our customer support will contact you within 24 hours to confirm your order, so we hope you to make sure about your profile information <Link to="/MyProfile">My Profile</Link>.</p></li>
                    <li><p>Read our <Link to="/Policies">Policies</Link> before clicking order.</p></li>
                </ul>
            </div>
                    <h1 className="OrderH1">Select your needs</h1>


                    
            
                {
                    Product.map((item)=>{
                        return <div className="OrderBox">
                            <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                        <ul>
                            <li>{Message}</li>
                        </ul>
                    </div>

                    <div className={Success === '' ? 'NoSuccess' : "SuccessBox"}>
                        <ul>
                            <li>{Success}</li>
                        </ul>
                    </div>
                                 <div className="ProductNamePriceDiv">
                                    <h3 className="ProName">{item.productname}</h3>
                                    <h5>{item.price} LE</h5>
                                </div>
                                <div className="Selectors">
                                    <select onChange={(s)=>setSize(s.target.value)} className="form-select Select NewSelect" id="SelectUp">
                                    <option disabled selected>Select Size</option>
                                        
                                        
                                        {
                                            item.sizes.map((element)=>{
                                                return <option>{element}</option>
                                            })
                                        }
                                    </select>
                                    <select onChange={(s)=>setQuantity(s.target.value)} className="form-select Select NewSelect" id="SelectUp">
                                        <option disabled selected>Select Quantity</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>More Than 3</option>
                                    </select>
                                    <select onChange={(s)=>setColor(s.target.value)} className="form-select Select NewSelect" id="SelectUp">
                                        <option disabled selected>Select Color</option>
                                       
                                        {
                                            item.colors.map((element)=>{
                                                return <option>{element}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <button onClick={hanldeOrder} className="btn btn-success btn-lg btn-block OrBtn">Order</button>
                        </div>
                    })
                }
        </div>
    )
}

export default Order;
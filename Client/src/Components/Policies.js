import React, {useEffect} from "react";
import {Helmet} from 'react-helmet';

function Policies(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const style = {
        fontFamily: 'Bebas Neue, cursive',
        textAlign: 'center',
        padding: '35px 0px'
    }

    return(
        <div>
            <Helmet>
            <title> {'Policies - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />
            </Helmet>
            <h2 className="PolicyH" style={style}>Marvel Shoes Policies</h2>
            <p className="Question">Order Policies:</p>
            <p className="Answer">
                            <ul>
                                <li>We give you your full right to check the size of the product or if it contains defects when receiving the product .. You can not receive the product in that case and you will pay the shipping money only.</li>
                                <li>No refund.</li>
                                <li>Exchange is allowed within two days in case the size is available.</li>
                                <li>We are not responsible for any wrong information you provide during ordering.</li>
                                <li>You can check your order on delivery before paying.</li>
                                
                            </ul>
            </p>
            <p className="Question">Payment Methods:</p>
            <p className="Answer">
                            <ul>
                                <li>Cash on delivery</li>
                            </ul>
            </p>
            <p className="Question">Shipping Policies:</p>
            <p className="Answer">
                            <ul>
                                <li>Shipping to all around Egypt.</li>
                                <li>Shipping within 2 days if the order in Cairo, Giza</li>
                                <li>Shipping within 3 to 5 days outside Cairo, Giza</li>
                                
                            </ul>
            </p>
            <p className="Question">The required data to make an order:</p>
            <p className="Answer">
                            <ul>
                                <li>Your Full Name.</li>
                                <li>At least one phone number to contact you.</li>
                                <li>Your full Address.</li>
                                <li>Your Governorate.</li>
                            </ul>
            </p>
            <p className="Question">Working Hours:</p>
            <p className="Answer">
                            <ul>
                                <li>Saturday to Wednesday : 12 PM to 11 PM.</li>
                                <li>Thursday and Friday : 12 PM to 12 AM.</li>
                            </ul>
            </p>
        </div>
    )
}

export default Policies;
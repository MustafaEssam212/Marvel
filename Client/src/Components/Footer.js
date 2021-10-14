import React from "react";
import '../Styles/Footer.css'
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'


function Footer(){
    return(

        <div className="FooterContainer">

            <Helmet>

                    
                    <link href="../css/fontawesome.css" rel="stylesheet" />
                    <link href="../css/brands.css" rel="stylesheet" />
                    <link href="../css/solid.css" rel="stylesheet" />
                

                </Helmet>

            <div className="sec1">

                <h2>MARVEL Shoes</h2>

                <hr></hr>

                <p><i className="fas fa-map-marker-alt"></i> 15 Sayed Zakaria, Sheraton Al Mataar.</p>
                <p><i className="fas fa-phone-alt"></i> 01271741628</p>
                <p><i className="fas fa-phone-alt"></i> 01110469450</p>

            </div>

            <div className="sec2">
                <h2>Our Products</h2>
                <hr></hr>

                    <ul>
                        <li><Link to="/Shop">Women's Shoes</Link></li>
                        <li><Link to="/Shop">Men's Shoes</Link></li>
                        <li><Link to="/Shop">Modern Clothes</Link></li>
                    </ul>

            </div>

            <div className="sec3">
                <h2>Further Info</h2>
                <hr></hr>

                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Policies">Policies</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </div>

          

        </div>
    )
}

export default Footer;
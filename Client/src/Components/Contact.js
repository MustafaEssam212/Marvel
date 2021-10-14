import React, {useEffect} from "react";
import '../Styles/Contact.css'
import {Helmet} from 'react-helmet'



function Contact(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="ContactContainer">


                <Helmet>

                <title> {'Contact - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>


            <div className="H24">
            <h1>Contact Us</h1>
            <h4>Get in Touch</h4>
            </div>

            <div className="Methods">

                <div className="method">
                    <i id="III" className="fas fa-phone-alt"></i>
                    <h5>Talk To Sales</h5>
                    <p className="Explain">Interested in Marvel Shoes ? Just Pick Up The Phone And Call Our Sales Team.</p>
                    <p className="Numb">01271741628 <br/> 01110469450</p>
                    
                </div>

                <div className="method">
                    <i id="III" className="fas fa-comments"></i>
                    <h5>Contact Customer Service</h5>
                    <p className="Explain">Sometimes you need a little help from your friends. Or a Marvel Shoes Support Don't Worry .. We are here for you, Log in and Chat with our Customer Support.</p>
                    
                </div>

                <div className="method">
                    <i id="III" class="fas fa-map-marked-alt"></i>
                    <h5>Visit Us</h5>
                    <p className="Explain">We will be glad if you visited us in our shop, You can use this location to reach the destination</p>
                    <p className="Hours">Saturday to Wednesday : 12 PM to 11 PM <br/> Thursday and Friday : 12 PM to 12 AM</p>
                    <a id="Anchor" href="https://www.google.com/maps/place/30%C2%B006'15.3%22N+31%C2%B022'19.1%22E/@30.1042404,31.3697748,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.1042404!4d31.3719635?hl=en" target="_blank">Click  <i className="fas fa-map-marker-alt"></i> Here</a>
                    
                </div>

            </div>
        </div>
    )
}

export default Contact;
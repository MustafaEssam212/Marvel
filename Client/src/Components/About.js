import React, {useEffect} from "react";
import '../Styles/About.css'
import shop1 from '../Pics/shop1.jpg'
import shop2 from '../Pics/shop2.jpg'
import shop3 from '../Pics/shop3.jpg'
import shop4 from '../Pics/shop4.jpg'
import {Helmet} from 'react-helmet'

function About(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    
    return(

        <div className="AboutContainer">

            <Helmet>

                <title> {'About - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={shop1} alt="Nike Air Force 1" title="Nike Air Force 1"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={shop2} alt="Converse Run Star Hike" title="Converse Run Star Hike"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={shop3} alt="Nike M2K Tekno" title="Nike M2K Tekno"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={shop4} alt="Louis Vuitton Run Away" title="Louis Vuitton Run Away"/>
                    </div>
                </div>
                <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                <i className="fas fa-chevron-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <i className="fas fa-chevron-right"></i>
                    <span className="sr-only">Next</span>
                </a>
                </div>


                    <div className="AboutInformation">
                        <h1>Who we are ?</h1>
                        <p className="FirstP">Marvel Egypt is a new individual foundation in Sheraton, Egypt. it's depends on selling the "Mirror original" shoes of the biggest brands in Egypt with a little cost to meet the needs of the local market without reduction in product quality.</p>
                        <p className="Question">HOW TO CONTACT US ?</p>
                        <p className="Answer">
                            <ul>
                                <li>You Can Find Us On "15 Sayed Zakaria, Sheraton Al Mattar."</li>
                                <li>Call Us On Our Customer Service Numbers: 01271741628 - 01110469450</li>
                                <li>Create a New Account And You Can Contact Us On Our Online Chat System.</li>
                            </ul>
                        </p>
                        <p className="Question">CAN I MAKE CHANGES TO MY ORDER?</p>
                        <p className="Answer">
                            <ul>
                                <li>Yes You Can Just Use Our Contact Methods And Explain to Us Your Request.</li>
                            </ul>
                        </p>
                        <p className="Question">HOW CAN I PAY FOR MY ORDER?</p>
                        <p className="Answer">
                            <ul>
                                <li>You Can Pay With Cash On Delivery Method.</li>
                            </ul>
                        </p>
                        <p className="Question">HOW CAN I TRACK MY ORDER?</p>
                        <p className="Answer">
                            <ul>
                                <li>Your Order Will Be In Your Orders List And You Will Be Able To Track Your Order By It's Status (Pending - In Progress - Done).</li>
                            </ul>
                        </p>
                    </div>
        </div>
    )
}

export default About;
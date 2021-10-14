import React from "react";
import {Link} from 'react-router-dom'
import Pic1 from '../Pics/1.jpg'
import Pic2 from '../Pics/2.jpg'
import Pic3 from '../Pics/3.jpg'
import Pic4 from '../Pics/4.jpg'
import '../Styles/Home.css'


import timberland from '../Pics/timberland.png'

import nike from '../Pics/nike.png'
import balenciaga from '../Pics/balenciaga.png'
import adidas from '../Pics/adidas.png'
import louisVuitton from '../Pics/louisvuitton.png'
import converse from '../Pics/converse.png'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Helmet} from 'react-helmet'
import { useEffect, useState } from 'react';
import axios from "axios";



 

function Home(){
    const [WomenShoes, setWomenShoes] = useState([]);
    const [Clothes, setClothes] = useState([]);
    const [MenShoes, setMenShoes] = useState([]);


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}p1/getwomenshoes`)
        .then(res =>{
            
            if(res.data.message){
                
            }else{
                setWomenShoes(res.data)
            }
        })
        axios.get(`${process.env.REACT_APP_API_URL}p1/getClothes`)
        .then(res =>{
            
            if(res.data.message){
                
            }else{
                setClothes(res.data)
            }
        })
        axios.get(`${process.env.REACT_APP_API_URL}p1/getmenshoes`)
        .then(res =>{
            
            if(res.data.message){
                
            }else{
                setMenShoes(res.data)
            }
        })
        window.scrollTo(0, 0)
    }, [])
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 873 },
          items: 3
        },
        anothertablet: {
            breakpoint: { max: 873, min: 579 },
            items: 2
          },
        
        mobile: {
          breakpoint: { max: 579, min: 0 },
          items: 1
        }
      };


    return(


        <div>



            <Helmet>

                <title> {'Home - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>



                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Pic1} alt="Nike Air Force 1" title="Nike Air Force 1"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Pic2} alt="Converse Run Star Hike" title="Converse Run Star Hike"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Pic3} alt="Nike M2K Tekno" title="Nike M2K Tekno"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Pic4} alt="Louis Vuitton Run Away" title="Louis Vuitton Run Away"/>
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




                    <div className="MiddleDiv">
                        <h1>Top Brands</h1>
                        <div className="Logos">
                            <img src={adidas} alt="Adidas" title="Adidas"></img>
                            <img src={balenciaga} alt="Balenciaga" title="Balenciaga"></img>
                            <img src={nike} alt="Nike" title="Nike"></img>
                            <img src={converse} alt="Converse" title="Converse"></img>
                            <img src={louisVuitton} alt="Louis Vuitton" title="Louis Vuitton"></img>
                            <img src={timberland} alt="Timberland" title="Timberland"></img>
                        </div>
                    </div>


                
                <div className="CaroContent">

                        <h1>Women's Shoes</h1>
                        
                        <div className="Flex">

                        

                        {
                            WomenShoes.map((item, key)=>{
                                return <div key={key} className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={`../Images/Shoes/${item.thumbnail}`} alt="Card image cap"/>
                                    <div className="card-body">
                                    <div className="name-price">
                                        <h5 className="card-title">{item.productname}</h5>
                                        <h6 className="price">{item.price} LE</h6>
                                    </div>
                                   
                                    <p className="card-text">{item.description}</p>
                                    <Link to={`/Review/${item.productname}`} className="btn btn-success cardbtn"><i className="fas fa-shopping-cart"></i> Review</Link>
                                </div>
                                </div>
                            })
                        }

                    </div>

                        

                                <div className="More">
                                    <Link to="/Shop" title="More">More <i className="fas fa-arrow-circle-right"></i></Link>
                                </div>

                                <hr className="homeHr"></hr>

                         <h1>Men's Shoes</h1>


                        <div className="Flex">

                        {
                            MenShoes.map((item, key)=>{
                                return <div key={key} className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={`../Images/Shoes/${item.thumbnail}`} alt="Card image cap"/>
                                    <div className="card-body">
                                    <div className="name-price">
                                        <h5 className="card-title">{item.productname}</h5>
                                        <h6 className="price">{item.price} LE</h6>
                                    </div>
                                   
                                    <p className="card-text">{item.description}</p>
                                    <Link to={`/Review/${item.productname}`} className="btn btn-success cardbtn"><i className="fas fa-shopping-cart"></i> Review</Link>
                                </div>
                                </div>
                            })
                        }

                        </div>


                        <div className="More">
                                    <Link to="/Shop" title="More">More <i className="fas fa-arrow-circle-right"></i></Link>
                                </div>

                                <hr className="homeHr"></hr>


                        <h1>Clothes</h1>


                        <div className="Flex">

                        {
                            Clothes.map((item, key)=>{
                                return <div key={key} className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={`../Images/Shoes/${item.thumbnail}`} alt="Card image cap"/>
                                    <div className="card-body">
                                    <div className="name-price">
                                        <h5 className="card-title">{item.productname}</h5>
                                        <h6 className="price">{item.price} LE</h6>
                                    </div>
                                   
                                    <p className="card-text">{item.description}</p>
                                    <Link to={`/Review/${item.productname}`} className="btn btn-success cardbtn"><i className="fas fa-shopping-cart"></i> Review</Link>
                                </div>
                                </div>
                            })
                        }

                        </div>

                        <div className="More">
                                    <Link to="/Shop" title="More">More <i className="fas fa-arrow-circle-right"></i></Link>
                                </div>

                                <hr className="homeHr"></hr>


                </div>



              

        </div>
    )
}

export default Home;
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'
import axios from "axios";

function AllProducts() {

  const [AllWomenProd, setAllWomenProd] = useState([]);
  const [AllMenProd, setAllMenProd] = useState([]);
  const [AllClothesProd, setAllClothesProd] = useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}p1/getallwomenprod`)
    .then(res=>{
        if(res.data.message){
            return
        }else{
          setAllWomenProd(res.data)
        }
    })
    axios.get(`${process.env.REACT_APP_API_URL}p1/getallmenprod`)
    .then(res=>{
        if(res.data.message){
            return
        }else{
          setAllMenProd(res.data)
        }
    })
    axios.get(`${process.env.REACT_APP_API_URL}p1/getallclothesprod`)
    .then(res=>{
        if(res.data.message){
            return
        }else{
          setAllClothesProd(res.data)
        }
    })
    window.scrollTo(0, 0)
}, [])

  return (
    <div>

                <Helmet>

                    <title> {'Shop - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                    <link href="../css/fontawesome.css" rel="stylesheet" />
                    <link href="../css/brands.css" rel="stylesheet" />
                    <link href="../css/solid.css" rel="stylesheet" />
                    <link rel="icon" href="../icon.png" />

                </Helmet>

      <div className="WomenShoesDiv">
        <h1>Women's Shoes</h1>


        <div className="Flex">
        {
                            AllWomenProd.map((item, key)=>{
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
        
        <hr className="ProHr"/>
      </div>

           
           

      <div className="MenShoesDiv">
        <h1>Men's Shoes</h1>
              
        <div className="Flex">
        {
                            AllMenProd.map((item, key)=>{
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
        
        
        <hr className="ProHr"/>
      </div>



      <div className="ClothesDiv">
        <h1>Clothes</h1>

        <div className="Flex">
        {
                            AllClothesProd.map((item, key)=>{
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
        
        <hr className="ProHr"/>
      </div>

    </div>
  );
}

export default AllProducts;

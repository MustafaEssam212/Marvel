import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'
import axios from "axios";

function Clothes(){
  const [AllClothesProd, setAllClothesProd] = useState([]);
  useEffect(()=>{
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
    return(

        <div>
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
    )
}

export default Clothes;
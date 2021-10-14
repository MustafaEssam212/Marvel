import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'
import axios from "axios";

function MenShoes(){
  const [AllMenProd, setAllMenProd] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/p1/getallmenprod')
    .then(res=>{
        if(res.data.message){
            return
        }else{
          setAllMenProd(res.data)
        }
    })
    window.scrollTo(0, 0)
  }, [])
    return(

        <div>
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

        </div>
    )
}

export default MenShoes;
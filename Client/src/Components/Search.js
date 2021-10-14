import React, {useEffect, useState} from "react";
import '../Styles/Search.css'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import { SolarSystemLoading  } from 'react-loadingg';
import {useHistory} from 'react-router'

function Search(){

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      const query = useQuery();
      const value = query.get('value');
      const [Results, setResults] = useState([]);
      const history = useHistory();
      const LoadingStyle = {
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }
    const color = "#E13334";
    const size = 'large'
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_API_URL}p1/search`, {value})
        .then(res => {
            setResults(res.data)
            setLoading(false)
        })
    }, [value])

    useEffect(()=>{
        if(value === ''){
            history.push('/Shop')
        }else{
            setLoading(true)
        }
    }, [])

    console.log(Results)
    return(

        <div className="SearchContainer">
            <h1 className="H111">Results</h1>

            {
                Loading === true ? <div><SolarSystemLoading color={color} style={LoadingStyle} size={size}/></div> : <div>
                    
            {
                Results.length === 0 ? <div className="SearchAlert">No Results try searching for another word</div> : <div>
                    <div className="Flex">
                    {
                            Results.map((item, key)=>{
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

                </div>
            }
                </div>
            }


            




        </div>
    )
}


export default Search;
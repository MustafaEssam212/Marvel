import React, { useState, useEffect } from "react";
import {Link, Route, Switch} from 'react-router-dom';
import '../Styles/Shop.css'
import { useHistory } from "react-router";
import AllProducts from "./AllProducts";
import MenShoes from "./MenShoes";
import WomenShoes from "./WomenShoes";
import Clothes from "./Clothes";
import {Helmet} from 'react-helmet'


function Shop(){

    const history = useHistory();
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    const [Toggle, setToggle] = useState(false);
    const [ComName, setComName] = useState('');
    const [searchValue, setSearchValue] = useState('');

  function handleSearch(x){
      x.preventDefault();
      history.push(`/Search?value=${searchValue}`)
  }

    return(

        <div className="ShopContainer">

              <Helmet>

                <title> {'Shop - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes'} </title>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>

            <div className="Shop2Header">
                
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(z)=>setSearchValue(z.target.value)} placeholder="Search"/><button type="submit"><i className="fas fa-search"></i></button>
                </form>
                <div className="DropMenu">
                    <button onClick={()=>setToggle(!Toggle)}>{ComName === '' ? 'Choose Category' : ComName} <i className="fas fa-arrow-down"></i></button>
                    <ul className={Toggle === false ? "ShopUl" : "VisibleUl"} >
                        <li><Link to="/Shop" onClick={()=> setComName('All Products')}>All Products</Link></li>
                        <li><Link to="/Shop/MenShoes" onClick={()=> setComName("Men's Shoes")}>Men's Shoes</Link></li>
                        <li><Link to="/Shop/WomenShoes" onClick={()=> setComName("Women's Shoes")}>Women's Shoes</Link></li>
                        <li><Link to="/Shop/Clothes" onClick={()=> setComName("Clothes")}>Clothes</Link></li>
                    </ul>
                    
                </div>
            </div>

                <Switch>
                    <Route exact path="/Shop">
                        <AllProducts/>
                    </Route>
                    <Route path="/Shop/MenShoes">
                        <MenShoes />
                    </Route>
                    <Route path="/Shop/WomenShoes">
                        <WomenShoes />
                    </Route>
                    <Route path="/Shop/Clothes">
                        <Clothes/>
                    </Route>
                </Switch>


              
                

            
        </div>
    )
}

export default Shop;
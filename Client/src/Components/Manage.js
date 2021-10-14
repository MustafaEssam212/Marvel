import React, {useEffect} from "react";
import {Link, Switch, Route} from 'react-router-dom';
import '../Styles/Manage.css'
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import EditProduct from "./EditProduct";
import RemoveComment from "./RemoveComment";

function Manage(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return(

        <div className="ManageContainer">
            <h1>Welcome To <span>Marvel Shoes's</span> Dashboard.</h1>

                <div className="Tools">
                    <ul>
                        <li><Link to="/Manage"><i className="fas fa-plus-circle"></i> Add Product</Link></li>
                        <li><Link to="/Manage/RemoveProduct"><i className="fas fa-trash"></i> Remove Product</Link></li>
                        <li><Link to="/Manage/EditProduct"><i className="fas fa-edit"></i> Edit Product</Link></li>
                        <li><Link to="/Manage/RemoveComment"><i className="fas fa-trash"></i> Remove Comment</Link></li>
                        
                    </ul>
                </div>


                    <Switch>
                        <Route exact path="/Manage">
                            <AddProduct />
                        </Route> 
                        <Route path="/Manage/RemoveProduct">
                            <RemoveProduct />
                        </Route>
                        <Route path="/Manage/EditProduct">
                            <EditProduct />
                        </Route>
                        <Route path="/Manage/RemoveComment">
                            <RemoveComment />
                        </Route>
                    </Switch>

        </div>
    )
}

export default Manage;
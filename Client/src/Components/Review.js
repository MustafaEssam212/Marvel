import React, { useContext, useEffect, useState } from "react";
import '../Styles/Review.css'

import {Link, useParams, useHistory} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import axios from "axios";
import { UserContext } from "./User-Context";
import { SolarSystemLoading  } from 'react-loadingg';


function Review(){
    const params = useParams();
    const Find = params.id;
    const UsContext = useContext(UserContext);
    const [Product, setProduct] = useState([]);
    const [Comment, setComment] = useState('');
    const history = useHistory();
    const [Message, setMessage] = useState('');
    const NoLoadingStyle = {
        margin: '15px auto 45px auto',
        position: 'relative',
        display: 'none'
    }
    const LoadingStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }
    const color = "#E13334";
    const size = 'large'
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.post('http://localhost:5000/api/p1/findproduct', {Find})
        .then(res => {
            setProduct([res.data])
            setLoading(false)
        })
        window.scrollTo(0, 0)
    }, [])

    console.log(Product)
    function ChangePic(Pic){
        document.getElementById('Thumb').src = Pic
       
    }

    function handleComment(e){
        e.preventDefault();
        const Name = UsContext.User.firstname + ' ' + UsContext.User.lastname;
        axios.post('http://localhost:5000/api/p1/comment', {Comment, Name, Find})
        .then(res =>{
            if(res.data.message === 'Comment Submited'){
                document.getElementById('CommentInput').value = '';
                history.push(`/Review/${Find}`)
                axios.post('http://localhost:5000/api/p1/findproduct', {Find})
                .then(res => setProduct([res.data]))
            }else{
                setMessage(res.data.message)
            }
        })
    }

    return(

        <div className="ReviewContainer">


                
                {
                    Loading === true ? <div><SolarSystemLoading color={color} style={LoadingStyle} size={size}/></div> : <div>
                        <h1 className="ReviewH1">Review {Find}</h1>
            

            {
                Product.map((item, key)=>{
                    return <div key={key} className="ProductDiv">

                        
             <Helmet>

                <title> {`Review ${item.productname} - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`} </title>
                <meta name="description" content={`Review ${item.productname} ${item.description} Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`}/>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://www.marvelshoes-eg.com/Review/${item.productname}`} />
                <meta name="keywords" content={item.keywords.map((element)=> `${element.Key}`)} />
                <meta property="og:title" content={`Review ${item.productname} - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`} />
                <meta property="og:description" content={`Review ${item.productname} ${item.description} Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`}/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.marvelshoes-eg.com/Review/${item.productname}`} />
                <meta property="og:image" content={`https://www.marvelshoes-eg.com/Images/Shoes/${item.thumbnail}`}/>
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <meta property="og:site_name" content="Marvel Shoes" />
                <meta name="twitter:title" content={`Review ${item.productname} - Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`}/>
                <meta name="twitter:description" content={`Review ${item.productname} ${item.description} Marvel Shoes Egypt | Shoes & Sneakers for Women, Men & Modern Clothes`}/>
                <meta name="twitter:image" content={`https://www.marvelshoes-eg.com/Images/Shoes/${item.thumbnail}`}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
                <link rel="icon" href="../icon.png" />

                </Helmet>

                    <div className="ThreeSections">
        
                        <div className="ProductReview">
                            <div className="ThumbnailImage">
                            <img className="Thumbnail" src={`../Images/Shoes/${item.thumbnail}`} id="Thumb" title="Air" alt={item.description}/>
                            </div>
                            
                            <div className="AddedImages">
                                <div>
                                <img src={`../Images/Shoes/${item.thumbnail}`} onClick={()=> document.getElementById('Thumb').src = `../Images/Shoes/${item.thumbnail}`} alt={item.description}/>
                                </div>
                                <div onClick={()=> document.getElementById('Thumb').src = `../Images/Shoes/${item.threepics[0].filename}`}> 
                                <img src={`../Images/Shoes/${item.threepics[0].filename}`} alt={item.description}/>
                                </div>
                                <div onClick={()=> document.getElementById('Thumb').src = `../Images/Shoes/${item.threepics[1].filename}`}>
                                <img src={`../Images/Shoes/${item.threepics[1].filename}`} alt={item.description}/>
                                </div>
                                <div>
                                <img src={`../Images/Shoes/${item.threepics[2].filename}`} onClick={()=> document.getElementById('Thumb').src = `../Images/Shoes/${item.threepics[2].filename}`} alt={item.description}/>
                                </div>
                            </div>
                            <div className="KeyWords">
                                <h5 className="KeyH">Keywords:</h5>
                                <div className="InnerKeywords">
                                {
                                    item.keywords.map((element)=>{
                                        return <h6>{element.Key}</h6> 
                                    })
                                }
                                </div>
                            </div>
                        </div>
        
                        <div className="ProductInfos">
        
                            <h4 className="Description">{item.description}</h4>
        
                                <hr/>
                            <h4 className="ProductPrice"><span>Price: </span>{item.price} L.E</h4>
                                <hr/>
                                <h4><span>Available Colors: </span> {item.colors.map((element)=>{return <span id="Span2Black">{element}</span>})}</h4>
                                <hr/>
                                <h4><span>Available Sizes: </span> {item.sizes.map((element)=>{return <span id="Span2Black">{element}</span>})}</h4>
                                <hr/>
                                <div className="Order-Mess">
                                <Link to={`/Order/${Find}`} className="CartLink"><i className="fas fa-shopping-cart"></i> Order Now</Link>
                                <Link to="/Message" className="MessageLink"><i className="fas fa-comment"></i> Message Us</Link>
                                </div>
                                <p className="PAlert">By clicking order now, You agree to Marvel Shoes's <Link to="/Policies">Policies</Link>.</p>
                        </div>
        
                       
        
                    </div>
        
        
                        <hr className="HrHr"/>
        
                        <div className="Comments">
                            <h5>Comments</h5>
                            {
                                localStorage.getItem('Token') === null ? <div></div> : <div className="WirteComment">
                                <form onSubmit={handleComment}>
                                <input id="CommentInput" onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a Comment"></input>
                                </form>
                            </div>
                            }

                            {
                                item.comments.reverse().map((element, key)=>{
                                    return <div key={key} className="Comment">
                                        <h6>{element.Name}:</h6>
                                        <p>{element.CommentText} .</p>
                                    </div>
                                })
                            }
                            
                        </div>
        
                        </div>
        
                })
            }

                    </div>
                }
                
            
            
        </div>
    )
}

export default Review;
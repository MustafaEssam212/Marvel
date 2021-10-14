import React, {useEffect, useState} from "react";
import axios from "axios";
import { BoxLoading } from 'react-loadingg';

function EditProduct(){
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const [Find, setFind] = useState('');
    const NoLoadingStyle = {
        margin: '15px auto 45px auto',
        position: 'relative',
        display: 'none'
    }
    const LoadingStyle = {
        margin: '15px auto 45px auto',
        position: 'relative',
        display: 'block'
    }
    const [Message, setMessage] = useState('');
    const [Product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Thumbnail, setThumbnail] = useState('');
    const [Pic1, setPic1] = useState('');
    const [Pic2, setPic2] = useState('');
    const [Pic3, setPic3] = useState('');
    const [Success, setSuccess] = useState('');
    const [Message2, setMessage2] = useState('');
    const [ProductName, setProductName] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState('');
    const [Type, setType] = useState('');
    const [KeyWords, setKeyWords] = useState([]);
    const [Sizes, setSizes] = useState([]);
    const [Colors, setColors] = useState([]);
    const [Size, setSize] = useState('');
    const [Color, setColor] = useState('');
    const [KeyWord, setKeyWord] = useState('');
    const [Success2, setSuccess2] = useState('');
    function ChangeThumbnail(c){
        setThumbnail(c.target.files[0])
        
    }
    function handleFindProduct(e){
        e.preventDefault();
        setLoading(true)
        axios.post('http://localhost:5000/api/p1/findproduct', {Find})
        .then(res => {
            
            if(res.data.message){
                setMessage(res.data.message)
                setLoading(false)
            }else{
               setProduct([res.data])
                setLoading(false)
               
            }
        })
    }

            useEffect(()=>{
                if(Product.length === 0){
                    return
                }else{
                    setProductName(Product[0].productname)
                    setDescription(Product[0].description)
                    setPrice(Product[0].price)
                    setType(Product[0].type)
                    setKeyWords(Product[0].keywords)
                    setSizes(Product[0].sizes)
                    setColors(Product[0].colors)
                }
            }, [Product])
        
        
    function handleChangeImages(){
        
        const data = new FormData();
        data.append('Find', Find)
        data.append('Thumbnail', Thumbnail)
        data.append('ThreePics', Pic1)
        data.append('ThreePics', Pic2)
        data.append('ThreePics', Pic3)
        axios.post('http://localhost:5000/api/p1/changeproductimages', data)
        .then(res=>{
            if(res.data.message === 'Can not Update your product'){
                setMessage2(res.data.message)
            }else{
                setSuccess(res.data.message)
            }
        })
    }
   
    function handleChangeInformation(e){
        e.preventDefault();
        const keywords = JSON.stringify(KeyWords)
        const colors = JSON.stringify(Colors)
        const sizes = JSON.stringify(Sizes)

        
        axios.post('http://localhost:5000/api/p1/changeinfos', {keywords, colors, sizes, ProductName, Description, Price, Type})
        .then(res => {
            if(res.data.message === 'Can not Update your Product'){
                setMessage(res.data.message)
            }else{
                setSuccess2(res.data.message)
            }
        })
    }
    return(

        <div className="EditProductContainer">
            
                <h1 className="H1H">Edit Product</h1>
                <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                        <ul>
                            <li>{Message}</li>
                        </ul>
                    </div>
                <div className="EditProductFlex">
                    
                        <div className="EditProductDiv">

                            <div className="EditInput">
                                <input type="text" onChange={(s)=>setFind(s.target.value)} className="form-control" placeholder="Enter Product Name"></input>
                                <button onClick={handleFindProduct} className="btn btn-success btn-lg btn-block">Find</button>
                            </div>

                            <BoxLoading style={Loading === false ? NoLoadingStyle : LoadingStyle}/>
                            
                            <div className="EditNow">
                                {
                                    Product.length === 0 ? <div></div> : <div>
                                        {
                                            
                                            Product.map((item)=>{
                                                
                                                return <div className="ShowProduct">
                                                        
                                                        <h3>{item.productname}</h3>

                                                        <div className="OldImages">
                                                            <h5 className="ThuCenter"><img className="OldImage img-center" src={`../Images/Shoes/${item.thumbnail}`}/></h5>
                                                            {
                                                                item.threepics.map((element)=>{
                                                                    return <img className="OldImage" src={`../Images/Shoes/${element.filename}`}/>
                                                                })
                                                            }
                                                        </div>

                                                        <div className="ChangeImages">
                                                            <h4>Edit Images</h4>
                                                            <div className="EditImagesInputs">
                                                                <label className="Title">Thumbnail: {Thumbnail === '' ? "" : <i className="fas fa-check-circle"></i>}</label> 
                                                            <label>
                                                                <input className="Upload-input" type="file" accept="image/png, image/jpg, image/jpeg" filename="Thumbnail" onChange={ChangeThumbnail}></input>
                                                                <i className="fa fa-plus-square"></i>
                                                            </label>
                                                            <label className="Title">Pic 1: {Pic1 === '' ? "" : <i className="fas fa-check-circle"></i>}</label>
                                                            <label>
                                                                <input className="Upload-input" type="file" accept="image/png, image/jpg, image/jpeg" filename="ThreePics"  onChange={(s)=>setPic1(s.target.files[0])}></input>
                                                                <i className="fa fa-plus-square"></i>
                                                            </label>
                                                            <label className="Title">Pic 2: {Pic2 === '' ? "" : <i className="fas fa-check-circle"></i>}</label>
                                                            <label>
                                                                <input className="Upload-input" type="file" accept="image/png, image/jpg, image/jpeg" filename="ThreePics"  onChange={(s)=>setPic2(s.target.files[0])}></input>
                                                                <i className="fa fa-plus-square"></i>
                                                            </label>
                                                            <label className="Title">Pic 3: {Pic3 === '' ? "" : <i className="fas fa-check-circle"></i>}</label>
                                                            <label>
                                                                <input className="Upload-input" type="file" accept="image/png, image/jpg, image/jpeg" filename="ThreePics"  onChange={(s)=>setPic3(s.target.files[0])}></input>
                                                                <i className="fa fa-plus-square"></i>
                                                            </label>
                                                            <button onClick={handleChangeImages} className="btn btn-success btn-lg btn-block">Done</button>
                                                            <div className={Message2 === '' ? 'NoSuccess' : "AlertBox"}>
                                                                <ul>
                                                                    <li>{Message2}</li>
                                                                </ul>
                                                            </div>
                                                            <p className="Uploaded">{Success === '' ? "" : <i className="fas fa-check-circle"></i>}</p>

                                                            </div>
                                                            
                                                        </div>

                                                        <hr></hr>

                                                        <div className="ChangeInformation">
                                                            <h4>Edit Information</h4>
                                                            
                                                            <div className="ProductTextInfos">

                                                            <input maxLength="20" className="form-control" type="text" defaultValue={item.productname} onChange={(e)=>setProductName(e.target.value)}/> <p className="Check2">{ProductName === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                                                            <input maxLength="75" className="form-control DescInput" type="text" defaultValue={item.description} onChange={(e)=>setDescription(e.target.value)}/> <p className="Check2">{Description === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                                                            <input className="form-control" type="number" defaultValue={item.price} onChange={(e)=>setPrice(e.target.value)}/><p className="Check2">{Price === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                                                            

                                                            </div>


                                                            <div className="ChooseRadio">
                                                                <p className="Current">Current: {item.type}</p>
                                                                <div>
                                                                    <input type="radio" name="Type" value="Men's Shoes" onChange={(e)=>setType(e.target.value)}/><label>Men's Shoes</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name="Type" value="Women's Shoes" onChange={(e)=>setType(e.target.value)}/><label>Women's Shoes</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name="Type" value="Clothes" onChange={(e)=>setType(e.target.value)}/><label>Clothes</label>
                                                                </div>
                                                            
                                                            </div>   

                                                            <div className="ExistsEle">
                                                                    {
                                                                        item.keywords.map((element)=>{
                                                                             return <p className="Current">{element.Key}</p>
                                                                        })
                                                                    }
                                                                    
                                                                </div>

                                                            <div className="KeyWordAdder Adders">
                                                                
                                                                <input type="text" className="form-control" id="KeyWordInput" placeholder="Keywords" onChange={(e)=>setKeyWord(e.target.value)}></input>
                                                                <p className="btn btn-danger" onClick={()=>setKeyWords([])}>Remove</p>
                                                                <p  onClick={()=>{
                                                                    setKeyWords([...KeyWords, KeyWord])
                                                                    document.getElementById('KeyWordInput').value = ''
                                                                }} className="btn btn-success">Add</p> 
                                                            </div>
                                                            <hr></hr>
                                                            <p className="Count">{KeyWords.length} Keyword</p>

                                                            <div className="ExistsEle">
                                                                    {
                                                                        item.sizes.map((element)=>{
                                                                             return <p className="Current">{element}</p>
                                                                        })
                                                                    }
                                                                    
                                                                </div>

                                                            <div className="SizesAdder Adders">
                                                                <input type="text" className="form-control" id="SizeInput" placeholder="Sizes" onChange={(e)=>setSize(e.target.value)}></input>
                                                                <p className="btn btn-danger" onClick={()=>setSizes([])}>Remove</p>
                                                                <p  className="btn btn-success" onClick={
                                                                    ()=>{setSizes([...Sizes, Size])
                                                                    document.getElementById('SizeInput').value = ''}}>Add</p> 
                                                            </div>
                                                            <hr></hr>
                                                            <p className="Count">{Sizes.length} Sizes</p>

                                                            <div className="ExistsEle">
                                                                    {
                                                                        item.colors.map((element)=>{
                                                                             return <p className="Current">{element}</p>
                                                                        })
                                                                    }
                                                                    
                                                                </div>
                                                            
                                                            <div className="ColorsAdder Adders">  
                                                                <input type="text" className="form-control" id="ColorInput" placeholder="Colors" onChange={(e)=>setColor(e.target.value)}></input>
                                                                <p className="btn btn-danger" onClick={()=>setColors([])}>Remove</p>
                                                                <p onClick={()=>{
                                                                    setColors([...Colors, Color])
                                                                    document.getElementById('ColorInput').value = ''
                                                                }} className="btn btn-success">Add</p> 
                                                            </div>
                                                            <hr></hr>
                                                            <p className="Count">{Colors.length} Colors</p>


                                                            <button onClick={handleChangeInformation} className="btn btn-success btn-lg btn-block">Done</button>
                                                            <p className="Uploaded text-center">{Success2 === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                                                        </div>
                                                    
                                                    </div>
                                            })
                                        }
                                    </div>
                                }
                            </div>

                        </div>
                </div>
                
        </div>
    )
}

export default EditProduct;
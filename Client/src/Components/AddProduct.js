import React, { useState, useEffect } from "react";
import '../Styles/Manage.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function AddProduct(){
    const [Thumbnail, setThumbnail] = useState('');
    const [Pic1, setPic1] = useState('');
    const [Pic2, setPic2] = useState('');
    const [Pic3, setPic3] = useState('');
    const [ProductName, setProductName] = useState('');
    const [Description, setDescription] = useState('');
    const [Price, setPrice] = useState('');
    const [Type, setType] = useState('');
    const [KeyWords, setKeyWords] = useState([]);
    const [Sizes, setSizes] = useState([]);
    const [Colors, setColors] = useState([]);
    const [Size, setSize] = useState({});
    const [Color, setColor] = useState({});
    const [KeyWord, setKeyWord] = useState({});
    const [Message, setMessage] = useState([]);
    const [Success, setSuccess] = useState('');
    const history = useHistory();
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    function ChangeThumbnail(c){
        setThumbnail(c.target.files[0])
        
    }


    function UploadThumbnail(t){
        t.preventDefault();


        const data = new FormData();
        data.append('Thumbnail', Thumbnail)
        data.append('ThreePics', Pic1)
        data.append('ThreePics', Pic2)
        data.append('ThreePics', Pic3)
        data.append('productname', ProductName)
        data.append('description', Description)
        data.append('price', Price)
        data.append('type', Type)
        data.append('keywords', JSON.stringify(KeyWords))
        data.append('colors', JSON.stringify(Colors))
        data.append('sizes', JSON.stringify(Sizes))
        axios.post('http://localhost:5000/api/p1/uploadthumbnail', data)
        .then(res=>{
            if(res.data.message === "This Product's Name Already Exists"){
                setMessage([...Message, {msg: res.data.message}])
            }else if(res.data.message === "Product Uploaded"){
                setSuccess(res.data.message)
                setTimeout(()=>{
                    history.push('/Shop')
                }, 2000)
            }else{
                setMessage(res.data)
            }
        })      
     
        console.log(KeyWords)
    }


    function handleKeyWords(e){
            e.preventDefault();
            setKeyWords([...KeyWords, KeyWord])
            document.getElementById('KeyWordInput').value = ''
    }

    
    function handleSizes(e){
        setSizes([...Sizes, Size])
        document.getElementById('SizeInput').value = ''
    }

    function handleColors(e){
            setColors([...Colors, Color])
            document.getElementById('ColorInput').value = ''
    }

    return(
        <div className="AddProductContainer">

                
            <div className="UploadThumbnail">
            <h1 className="H1H">Add New Product</h1>
           
            <div className="AlertBox">
                        <ul>
                            {Message.map((item)=>{
                                   return <li>{item.msg}</li>
                            })}
                        </ul>
                    </div>

            <form encType='multipart/form-data' onSubmit={UploadThumbnail}>

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

                    <div className="ProductTextInfos">

                    <input maxLength="20" className="form-control" type="text" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)}/> <p className="Check">{ProductName === '' ? "" : <i className="fas fa-check-circle"></i>}</p> 
                    <input maxLength="75" className="form-control DescInput" type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/> <p className="Check3">{Description === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                    <input className="form-control" type="number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/><p className="Check4">{Price === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                    

                    </div>
                                        
                    
                    <div className="ChooseRadio">
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

                     <div className="KeyWordAdder Adders">
                        <input type="text" className="form-control" id="KeyWordInput" placeholder="Keywords" onChange={(e)=>setKeyWord({Key: e.target.value})}></input>
                        <p  onClick={handleKeyWords} className="btn btn-success">Add</p> 
                     </div>
                     <hr></hr>
                     <p className="Count">{KeyWords.length} Keyword</p>
                     <div className="SizesAdder Adders">
                        <input type="text" className="form-control" id="SizeInput" placeholder="Sizes" onChange={(e)=>setSize(e.target.value)}></input>
                        <p  className="btn btn-success" onClick={handleSizes}>Add</p> 
                     </div>
                     <hr></hr>
                     <p className="Count">{Sizes.length} Sizes</p>
                     
                     <div className="ColorsAdder Adders">  
                        <input type="text" className="form-control" id="ColorInput" placeholder="Colors" onChange={(e)=>setColor(e.target.value)}></input>
                        <p onClick={handleColors} className="btn btn-success">Add</p> 
                     </div>
                     <p className="Count">{Colors.length} Colors</p>
                     <hr></hr>
                        <button onClick={UploadThumbnail} className="btn btn-success" type="submit">Upload</button><br/>
                        <p className="Uploaded">{Success === '' ? "" : <i className="fas fa-check-circle"></i>}</p>
                        
                        
            </form>

            </div>


        </div>


    )
}

export default AddProduct;
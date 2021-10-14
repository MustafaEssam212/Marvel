import React, {useState, useEffect} from "react";
import axios from "axios";


function RemoveProduct(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const [ProductNamee, setProductNamee] = useState('');
    const [Message, setMessage] = useState('');
    const [Success, setSuccess] = useState('');

    function handleRemoveProduct(e){
        e.preventDefault();
        
        axios.post('http://localhost:5000/api/p1/removeproduct', {ProductNamee})
        .then(res => {
            if(res.data.message === 'Product Deleted'){
                setSuccess(res.data.message)
            }else{
                setMessage(res.data.message)
            }
        })
    }
    return(
        
        <div className="RemoveProductContainer">
            <h1 className="H1H">Remove Product</h1>
            <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                        <ul>
                            <li>{Message}</li>
                        </ul>
                    </div>
                    <div className={Success === '' ? 'NoSuccess' : "SuccessBox"}>
                        <ul>
                            <li>{Success}</li>
                        </ul>
                    </div>
            <div className="RemoverParent">
            <div className="Remover">
            <input type="text" onChange={(e)=>setProductNamee(e.target.value)} className="form-control" placeholder="Enter Product Name"></input>
            <button onClick={handleRemoveProduct} className="btn btn-danger removeBtn">Remove</button>
            </div>
            </div>
        </div>

    )
}

export default RemoveProduct;
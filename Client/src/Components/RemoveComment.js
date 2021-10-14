import React, {useState, useEffect} from "react";
import axios from "axios";

function RemoveComment(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const [Find, setFind] = useState('');
    const [Comments, setComments] = useState([]);
    const [Message, setMessage] = useState('');
    const [CommentText, setCommentText] = useState('');
    const [Success, setSuccess] = useState('');

    function handleFindComments(e){
        e.preventDefault();
        axios.post('http://localhost:5000/api/p1/getcomments', {Find})
        .then(res =>{
            if(res.data.message === 'There is no product with this name'){
                setMessage(res.data.message)
            }else{
                setComments(res.data)
                
            }
        })
    }
    console.log(CommentText)
    return(
        <div className="RemoveCommentContainer">
            <h1 className="H1H">Remove Comment</h1>
            <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                        <ul>
                            <li>{Message}</li>
                        </ul>
                    </div>
                    
        <div className="RemoveCommentContent">
            <div className="RemoveCommentInput">
                <input type="text" onChange={(s)=> setFind(s.target.value)} className="form-control" placeholder="Enter Product Name"></input>
                <button onClick={handleFindComments} className="btn btn-success btn-lg btn-block">Find</button>
            </div>
            

        </div>

        <div className={Success === '' ? 'NoSuccess' : "SuccessBox"}>
                        <ul>
                            <li>{Success}</li>
                        </ul>
                    </div>
        <div className="Comments text-center removeCom">
                {
                    Comments.map((element, key)=>{
                        return <div key={key} id={element.CommentText} className="Comment ExsistCom">
                            <i onClick={()=>{
                                const text = document.getElementById(element.CommentText).id;
                                axios.post('http://localhost:5000/api/p1/deletecomment', {text, Find})
                                .then(res=>{
                                    if(res.data.message === 'Comment Deleted'){
                                        setSuccess(res.data.message)
                                    }else{
                                        setMessage(res.data.message)
                                    }
                                })
                            }} className="fas fa-times-circle RemoveCommentI"></i>
                             <h6>{element.Name}:</h6>
                            <p>{element.CommentText} .</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default RemoveComment;
import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import '../Styles/MyProfile.css'
import {UserContext} from './User-Context'

function MyProfile(){

    const UsContext = useContext(UserContext);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [SecondMobile, setSecondMobile] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [OldPassword, setOldPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [Message, setMessage] = useState('');
    const [Success, setSuccess] = useState('');

    useEffect(()=>{
        setFirstName(UsContext.User.firstname)
        setLastName(UsContext.User.lastname)
        setMobile(UsContext.User.mobile)
        setSecondMobile(UsContext.User.secondmobile)
        setAddress(UsContext.User.address)
        setCity(UsContext.User.city)
        window.scrollTo(0, 0)
    }, [])

    function handleEditProfile(z){
        z.preventDefault();
        const data = new FormData();
        const email = UsContext.User.email;
        axios.post('http://localhost:5000/api/v1/editprofile', {FirstName, LastName, Mobile, SecondMobile, Address, City, OldPassword, NewPassword, email})
        .then(res => {
            if(res.data.message === 'User Updated'){
                setSuccess(res.data.message)
            }else{
                setMessage(res.data.message)
            }
        })
    }

    return(
        <div className="MyProfileContainer">
                            <h1 className="H1Profile">Edit Your Profile</h1>
                            <div className={Success === '' ? 'NoSuccess' : "SuccessBox"}>
                                <ul>
                                    <li>{Success}</li>
                                </ul>
                            </div>
                            <div className={Message === '' ? 'NoSuccess' : "AlertBox"}>
                                <ul>
                                    <li>{Message}</li>
                                </ul>
                            </div>
                         <div className="FlexCenter">   
                     <div className="EditProfileDiv">
                         
                         <div className="AllInputs">
                         <div className="first-last-name">
                            <input onChange={(s)=>setFirstName(s.target.value)} type="text" defaultValue={FirstName} className="form-control" placeholder="First Name"></input>
                            <input onChange={(s)=>setLastName(s.target.value)} type="text" defaultValue={LastName} className="form-control" placeholder="Last Name"></input>
                         </div>
                         
                        
                        <input onChange={(s)=>setOldPassword(s.target.value)} type="password" placeholder="Old Password" className="form-control"></input>
                        <input onChange={(s)=>setNewPassword(s.target.value)} type="password" placeholder="New Password" className="form-control"></input>
                        <input onChange={(s)=>setMobile(s.target.value)} type="number" defaultValue={Mobile} placeholder="Mobile" className="form-control"></input>
                        <input onChange={(s)=>setSecondMobile(s.target.value)} type="number" defaultValue={SecondMobile} placeholder="Second Mobile" className="form-control"></input>
                        <input onChange={(s)=>setAddress(s.target.value)} type="text" defaultValue={Address} placeholder="Address" className="form-control"></input>
                        <select onChange={(s)=>setCity(s.target.value)}  className="form-select Select" id="SelectUp" >
                        <option selected disabled>{City}</option>
                        <option  value="Cairo">Cairo</option>
                        <option  value="Giza">Giza</option>
                        <option  value="Alexandria">Alexandria</option>
                        <option  value="Port Said">Port Said</option>
                        <option  value="Suez">Suez</option>
                        <option  value="Al Mahallah al Kubra">Al Mahallah al Kubra</option>
                        <option  value="Qalubia">Qalubia</option>
                        <option  value="Al Mansurah">Al Mansurah</option>
                        <option  value="Tanta">Tanta</option>
                    </select>
                    
                        <button onClick={handleEditProfile} className="btn btn-success btn-lg btn-block">Update</button>
                    </div>
                    </div>
                    </div>
        </div>
    )
}

export default MyProfile;
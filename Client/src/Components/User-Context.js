import React, {useState, useEffect} from 'react';
export const UserContext = React.createContext();

export function UserProvider(Props){

   

    const [User, setUser] = useState({
        firstname: null,
        lastname: null,
        _id: null,
        email: null,
        mobile: null,
        city: null,
        address: null,
        secondmobile: null,
        
    });
    

    
    useEffect(()=>{
        if(User.firstname === null){
            const user = JSON.parse(localStorage.getItem('UserStorage'));
            setUser(user)
        }
        
    }, [])

   
    return(
        <UserContext.Provider value={{User, setUser}}>
            {Props.children}
        </UserContext.Provider>
    );
}



import React from "react";
import '../Styles/Info.css'
import {Helmet} from 'react-helmet'

function Info(){
    return(

        <div className="InfoContent">


            <Helmet>

                
                <link href="../css/fontawesome.css" rel="stylesheet" />
                <link href="../css/brands.css" rel="stylesheet" />
                <link href="../css/solid.css" rel="stylesheet" />
               

                </Helmet>


                <div className="Phones">
                    <div className="Phone">
                    <i className="fas fa-phone-alt"></i> 01271741628
                    </div>
                    <div className="Phone">
                    <i className="fas fa-phone-alt"></i> 01110469450
                    </div>
                </div>
                <div className="Socials">
                    <a href="https://instagram.com/marvel.shoes1?utm_medium=copy_link" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://instagram.com/marvel.shoes1?utm_medium=copy_link" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com/marvel.shoes1?utm_medium=copy_link" target="_blank" ><i className="fab fa-twitter"></i></a>
                </div>
        </div>
    )
}

export default Info;
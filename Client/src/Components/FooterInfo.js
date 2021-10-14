import React from "react";
import {Helmet} from 'react-helmet'

function FooterInfo(){

    const style = {
        fontFamily: 'Montserrat, sans-serif',
        backgroundColor: '#1D242D',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        fontSize: '13px',
        textAlign: 'center'
    }

    return(
        <div style={style}>

            <Helmet>

                    
                    <link href="../css/fontawesome.css" rel="stylesheet" />
                    <link href="../css/brands.css" rel="stylesheet" />
                    <link href="../css/solid.css" rel="stylesheet" />
                

                </Helmet>

                
              <div style={{paddingTop: '18px'}}>
                <p >All Copyright <span>&copy;</span> Saved to Marvel Shoes 2021</p>
            </div>
        </div>
    )
}

export default FooterInfo;
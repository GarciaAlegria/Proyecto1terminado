import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo4, botonesr4  } from './Rectangulo4.module.css'; 

const Rectangulo4 = () => {
    return (
      <div className={rectangulo4}>
        <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
            FAQs
          </p>
          <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', marginTop: '-20px', fontWeight: '200', textAlign: 'center' }}>
          Select a Topic
          </p>
          <div className={botonesr4 }>
            <Button  variant='outline-light' >
              DOG PRODUCTS
            </Button>
            <Button  variant='outline-light' >
              CAT PRODUCTS
            </Button>
            <Button  variant='outline-light' >
              CONTACT US
            </Button>
            </div>
        </div>
    )
}

export default Rectangulo4
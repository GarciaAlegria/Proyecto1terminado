import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo2, botonesr2 } from './Rectangulo2.module.css'; 

const Rectangulo2 = () => {
    return (
      <div className={rectangulo2}>
      <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
          Explore Our Cat Food
        </p>
        <div className={botonesr2}>
          <Button  variant='outline-light' >
            KITTEN
          </Button>
          <Button variant='outline-light' >            
            SENIOR CAT
          </Button>
          <Button  variant='outline-light' >            
            WET CAT
          </Button>
          <Button  variant='outline-light' > 
            DRY CAT
          </Button>
          <Button  variant='outline-light' >         
            GRAIN FREE
          </Button>
          <Button className='button' variant='outline-light' style={{ margin: '10px', color: 'white', backgroundColor: 'grey', width: '150px' }}>          
            VIEW ALL
          </Button>
          </div>
      </div>
    )
}

export default Rectangulo2
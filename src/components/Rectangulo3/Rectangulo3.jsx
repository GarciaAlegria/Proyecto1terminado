import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo3, mini } from './Rectangulo3.module.css'; 

const Rectangulo3 = () => {
    return (
      <div className={rectangulo3}>
        <div className={mini}>
          <p style={{ fontFamily: 'Antenna', color: 'black', fontSize: '30px', margin: '0 0 20px 0', fontWeight: '700' }}>
            Find the Best Food for Your Dog or Cat
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '18px', margin: '0 0 20px 0' }}>
            Get your personalized pet food recommendation with the Pet Food Finder tool.
          </p>
          <div style={{ display: 'flex' }}>
            <Button className='button' variant='outline-light' style={{ borderColor: 'white', margin: '0 10px 0 0', color: 'white', backgroundColor: 'red', width: '150px' }}>
              Find my pets
            </Button>
            <Button className='button' variant='outline-light' style={{ borderColor: 'white', margin: '0', color: 'white', backgroundColor: 'red', width: '150px' }}>
              Learn more
            </Button>
          </div>
        </div>
        <div>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1080/public/2022-04/PFF_PurinaHomepage_Module_ExpertSeal_2.png?itok=OvWCfOub' alt='Pet food' style={{ width: '400px', height: '300px' }} />
        </div>
      </div>
    )
}

export default Rectangulo3
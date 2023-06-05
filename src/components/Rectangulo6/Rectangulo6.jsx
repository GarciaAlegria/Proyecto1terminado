import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo6  } from './Rectangulo6.module.css'; 

const Rectangulo6 = () => {
  return (
    <div className={rectangulo6}>
      <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '25px', margin: '2px', fontWeight: '700', textAlign: 'center' }}>
        What Guides Us
      </p>
      <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', fontWeight: '200', textAlign: 'center' }}>
        We shape the future of Health and Well-being for pets & people through three simple pursuits.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px 0' }}>
        <div style={{ marginRight: '20px' }}>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/04_Passion_Pursuit_Passion_500x300-2.png?itok=WamVfxix' alt='Purina Pro Plan' style={{borderRadius:'50%', width: '350px', height: '240px', margin: '0 10px' }} />
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Pets Are Our Passion
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center',  maxWidth: '350px' }}>
            We are connecting pets and people. We are building strong communities. We are shaping a better world.
          </p>
          <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>KNOW MORE</p>
        </div>
        <div style={{ marginRight: '20px' }}>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/05_Safety_500x300.png?itok=9JznGyLT' alt='Purina Pro Plan' style={{ borderRadius:'50%', width: '350px', height: '240px', margin: '0 10px' }} />
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Safety Is Our Promise
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center',  maxWidth: '350px' }}>
            We are exceeding safety standards. We are committing to quality. We are leading the industry.
          </p>
          <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>DISCOVER HOW</p>
        </div>
        <div>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/06_Pursuit_Innovation_500x300.png?itok=9PjwBgZx' alt='Purina Pro Plan' style={{borderRadius:'50%', width: '350px', height: '240px', margin: '0 10px' }} />
         <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center' }}>
            Innovation Is Our Pledge
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center',  maxWidth: '350px' }}>
            We are discovering new possibilities. We are making nutritional breakthroughs. We are advancing the lives of pets. 
          </p>
          <p style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Rectangulo6;
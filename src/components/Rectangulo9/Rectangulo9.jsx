import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo9  } from './Rectangulo9.module.css'; 


const Rectangulo9 = () => {
  return (
    <div className={rectangulo9}>
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div>
      <div>
        <img src='https://www.purina.com/sites/default/files/new-logo1.png' alt='Purina.com' style={{position: 'absolute', top: '50px', left: '100px', width: '100px', height: '50px' }} />
      </div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '250px', flex: 1, display: 'flex', flexDirection: 'column', color: 'white' }}>
    <div>
      <div>PURINA</div>
      <div>
        <div>Dogs</div>
        <div>Cats</div>
        <div>Nutrition</div>
        <div>Ingredients</div>
        <div>About Purina</div>
        <div>Partners & Services</div>
      </div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '440px', flex: 1, display: 'flex', flexDirection: 'column', color: 'white' }}>
    <div>OUR PRODUCTS</div>
    <div>
      <div>Dry Dog Food</div>
      <div>Wet Dog Food</div>
      <div>Dog Treats</div>
      <div>Wet Cat Food</div>
      <div>Dry Cat Food</div>
      <div>Cat Treats</div>
      <div>Cat Litter</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '600px',flex: 1, display: 'flex', flexDirection: 'column', color: 'white' }}>
    <div>BRANDS</div>
    <div>
      <div>Dog Brands</div>
      <div>Cat Brands</div>
    </div>
  </div>
  <div style={{textAlign: 'left', position: 'absolute', top: '50px', left: '750px', flex: 1, display: 'flex', flexDirection: 'column', color: 'white' }}>
    <div>HELPFUL LINKS</div>
    <div>
      <div>Offers</div>
      <div>News </div>
      <div>Careers</div>
      <div>Contact Us</div>
      <div>International Sites</div>
      <div>Sitemap</div>
    </div>
  </div>
  <div style={{ position: 'absolute', top: '50px', left: '950px', flex: 1, display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='https://www.pngarts.com/files/16/FB-Icon-Facebook-Logo-Grey-Circle-PNG.png' alt='Facebook' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://icones.pro/wp-content/uploads/2021/02/icone-twitter-ronde-grise.png' alt='Twitter' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://www.buscopng.com/wp-content/uploads/2020/08/youtube-gris.png' alt='YouTube' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <img src='https://icones.pro/wp-content/uploads/2021/02/instagram-icone-gris.png' alt='Instagram' style={{ width: '30px', height: '30px' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type='text' value={'Search...'} style={{ width: '200px', height: '30px', padding: '5px', border: 'none', backgroundColor: 'black', borderRadius: '8%' }} />
      <button style={{ width: '20px', height: '30px', border: 'none', backgroundColor: 'black', color: 'white', marginLeft: '-50px' }}>&#x1F50D;</button>
    </div>
  </div>
</div>
  );
};

export default Rectangulo9;
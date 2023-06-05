import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo8  } from './Rectangulo8.module.css'; 


const Rectangulo8 = () => {
  return (
    
    <div className={rectangulo8}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
      <p style={{ fontFamily: 'Antenna', color: 'black', fontSize: '30px', margin: '0', fontWeight: '700', textAlign: 'center' }}>
        Stay in Touch
      </p>
      <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '20px', margin: '0', textAlign: 'center' }}>
        Sign up today! From training tips to special offers, get the tools you need to keep your pet happy and healthy.
      </p>
      <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <span style={{ color: 'red', marginLeft: '900px', fontSize: '14px' }}> *Required Field</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='firstName' style={{marginRight: '900px', color: 'black', marginBottom: '5px' }}>First Name</label>
          <input type='text' id='firstName'  style={{  backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
        </div>
        <div style={{ marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='lastName' style={{ marginTop: '20px', marginRight: '930px', color: 'black', marginBottom: '5px' }}>Last Name</label>
          <input type='text' id='lastName' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='email' style={{marginRight: '935px', color: 'black', marginBottom: '5px' }}>Email</label>
          <input type='email' id='email' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
        </div>
        <div style={{marginTop: '20px', marginLeft: '30px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='zip' style={{ marginRight: '980px', color: 'black', marginBottom: '5px'}}>Zip</label>
          <input type='text' id='zip' style={{ backgroundColor: 'white', height: '25px', width: '900px', padding: '5px' }} />
        </div>
      </div>
      <label htmlFor='zip' style={{ marginTop: '20px', marginRight: '915px', color: 'black', marginBottom: '5px'}}>My pets</label>
      <div style={{marginRight: '213px', display: 'flex', alignItems: 'left', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '270px' }}>
          <select id='myDogs' style={{backgroundColor: 'white',color: 'black', marginRight: '0px', width: '200px', padding: '5px' }}>
            <option value=''># of Dogs</option>
            <option value='dog1'> 1 Dog </option>
            <option value='dog2'>2 Dogs </option>
            <option value='dog3'>3 Dogs </option>
          </select>
        </div>
        <div style={{ display: 'flex', marginRight: '90px' }}>
          <select id='myCats' style={{backgroundColor: 'white', color: 'black', width: '200px', padding: '5px' }}>
            <option value=''># of Cats</option>
            <option value='cat1'>Cat 1</option>
            <option value='cat2'>Cat 2</option>
            <option value='cat3'>Cat 3</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '-20px' }}>
          <input type='checkbox' id='newsletters' style={{backgroundColor:'white', margin: ' 9px  ' }} />
          <label htmlFor='newsletters'style={{ marginTop: '10px', marginRight: '915px', color: 'black', marginBottom: '5px'}}>Neither</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'rigth', marginRight: '-800px',marginLeft: '130px' }}>
          <input type='checkbox' id='neither' style={{backgroundColor:'white', margin: '0px',marginRight: '7px' }} />
          <label htmlFor='neither'style={{color: 'red', textDecoration: 'underline', marginTop: '25px', marginRight: '915px', marginBottom: '5px', maxWidth: '950px'}}>
          By clicking JOIN NOW I agree to receiving email and other marketing communications from Purina and its brands. I certify that I have read and agree with the Notice At Collection, Terms & Conditions, Privacy Policy and About Our Ads.
          </label>
        </div>
      </div>
      <Button className='button' variant='outline-light' style={{borderRadius: '2%', margin: '10px', color: 'white', backgroundColor: 'grey', width: '150px' }}>
      JOIN NOW
      </Button>
      </div>
      </div>
  );
};

export default Rectangulo8;
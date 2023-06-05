import React from "react";
import { imagen1 } from './Imagen1.module.css'; 

const Imagen1 = () => {
    return (
      <div className={imagen1}>
      <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/new%20HubX%20Hero%20Default%20Desktop%201440x450px.jpg?itok=J1g7gsOY' alt='Purina Pro Plan' style={{ width: '100%', height: '400px' }} />
      <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold',textAlign: 'justify', maxWidth: '400px' }}>Congratulations to Buddy Holly!</h1>
        <p style={{ color: 'white', fontSize: '1rem', textAlign: 'justify', maxWidth: '400px' }}>16th of the last 17 Westminster Best In Show winners fueled by Purina Pro Plan.</p>
        <button style={{ borderColor: 'white', margin: '0 10px 0 0', color: 'white', backgroundColor: 'red', width: '150px' }}>Read More</button>
      </div>
    </div>
    )
}

export default Imagen1
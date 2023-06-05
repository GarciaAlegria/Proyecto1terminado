import React from "react";
import { imagen2 } from './Imagen2.module.css'; 

const Imagen2 = () => {
    return (
      <div className={imagen2}>
      <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/purina-dog-and-cat-expertise-articles-homepage.jpg?itok=3dLBR-0l' alt='Purina Pro Plan' style={{ width: '100%', height: '400px' }} />
      <div style={{ position: 'relative', top: '-50%', left: '0%', transform: 'translateY(-50%)' }}>
        <h1 style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>Dog & Cat Articles</h1>
        <p style={{ color: 'black', fontSize: '1rem', textAlign: 'justify', maxWidth: '400px' }}>
          Whether you have a dog, cat or both, our experts are here with all the information and tips you need. We use our Purina experts to cover topics like dog and cat health, nutrition, behavior, training and more.
        </p>
        <button style={{ borderColor: 'white', margin: '0 10px 0 0', color: 'white', backgroundColor: 'red', width: '300px' }}>READ TIPS FROM OUR EXPERTS</button>
      </div>
    </div>
    )
}

export default Imagen2
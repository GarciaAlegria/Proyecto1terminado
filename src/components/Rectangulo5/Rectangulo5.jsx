import React from "react";
import { rectangulo5 } from './Rectangulo5.module.css'; 

const Rectangulo5 = () => {
  return (
    <div className={rectangulo5}>
      <p style={{ fontFamily: 'Antenna', color: 'black', fontSize: '45px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
        Purina: Providing Nutritious Dog and Cat Food for Your Pet
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', marginRight: '30px' }}>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-01/PC_ProPlan_Chicken%26Rice_500x300.jpg?itok=H2xCfSVJ' alt='Purina ProPlan' style={{ width: '560px', height: '350px' }} />
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center',  maxWidth: '450px' }}>
            Purina Pro Plan Adult Shredded Blend Chicken & Rice Formula
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center', maxWidth: '500px' }}>
            I have been feeding my dog this food for a while now. They love it and do great on it. Their fur is shiny and skin healthy. A past food I was feeding my dogs gave one of them hotspots. I switched to the Pro Plan and it cleared right up.
          </p>
          <button className='button' style={{ margin: '20px', color: 'white', backgroundColor: 'red', width: '300px', height: '40px', fontSize: '15px', fontWeight: '500' }}>
            EXPLORE PRO PLAN PRODUCTS
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', marginLeft: '30px' }}>
          <img src='https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-11/fancy-feast-wet-cat-food-review.jpg?itok=Itx9-NXS' alt='Fancy Feast' style={{ width: '560px', height: '350px' }} />
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '24px', margin: '20px 0', fontWeight: '700', textAlign: 'center',  maxWidth: '450px' }}>
            Purina Pro Plan Adult Shredded Blend Lamb & Rice Formula
          </p>
          <p style={{ fontFamily: 'inherit', color: 'black', fontSize: '16px', margin: '0 0 20px 0', textAlign: 'center', maxWidth: '500px' }}>
            I have been feeding my dog this food for a while now. They love it and do great on it. Their fur is shiny and skin healthy. A past food I was feeding my dogs gave one ofthem hotspots. I switched to the Pro Plan and it cleared right up.
          </p>
          <button className='button' style={{ margin: '20px', color: 'white', backgroundColor: 'red', width: '300px', height: '40px', fontSize: '15px', fontWeight: '500' }}>
            EXPLORE FANCY FEAST PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rectangulo5;
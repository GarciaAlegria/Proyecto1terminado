import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { rectangulo7, cartasaling  } from './Rectangulo7.module.css'; 
import Cartas from "../Cartas";

const Rectangulo7 = () => {
  return (
    
    <div className={rectangulo7}>
    <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '24px', margin: '1', fontWeight: '700', textAlign: 'center' }}>
    Better Together
      </p>
      <p style={{fontFamily: 'Antenna', color: 'black', fontSize: '20px', margin: '0', marginTop: '-20px', fontWeight: '200', textAlign: 'center' }}>
      Whether you have a question or are searching for tips, we’re committed to providing the answers you need to continue living your best life together.
      </p>
      <div style={{textalign: 'center', marginright: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '50px 0' }}>
        <div className={cartasaling}>
          <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/purina-when-to-switch-from-kitten-to-cat-food-1200x300.jpg?itok=q6kUQnrc" titulito = "KITTEN FEEDING" parafe = "When to Switch from Kitten Food to Cat FoodKitten food is specially formulated to meet your kittens unique nutritional needs. Learn when to make the switch from kitten to adult wet and dry cat food." link = "https://www.purina.com/articles/kitten/feeding/when-to-switch-from-kitten-to-cat-food" />
          <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/2021-02/how-to-feed-your-dog.jpg?itok=6GgWRN0b" titulito = "FEEDING" parafe = "Dog Feeding Chart: How Much Should I Feed My Dog? How much food should you feed your dog? Purina has a helpful dog feeding chart so you can determine how much your dog should eat. Feeding your dog the right amount of food each day helps ensure he gets the nutrition he needs." link = "https://www.purina.com/articles/dog/feeding/how-much-should-i-feed-my-dog" />
          <Cartas limagen ="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_960/public/how-much-to-feed-a-puppy-feeding-guide-and-chart-1200x300.jpg?itok=kdeeHneO" titulito = "PUPPY FEEDING" parafe = "How Much Should I Feed My Puppy? A Complete Puppy Feeding Guide with Chart Wondering how much to feed your puppy? Our experts put together a puppy feeding chart and guide to help. Find out how much food your puppy needs at Purina.com." link = "https://www.purina.com/articles/kitten/feeding/when-to-switch-from-kitten-to-cat-food" /> 
          </div>
        </div>
      </div>
  );
};

export default Rectangulo7;
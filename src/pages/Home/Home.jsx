import React from 'react';
import { Navbar, Rectangulo1,  Rectangulo2, Rectangulo3, Imagen1, Rectangulo4, Rectangulo5, 
  Rectangulo6, 
  Imagen2,
  Rectangulo7,
  Rectangulo8,
  Rectangulo9,
  Rectangulo10

} from '@components';
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styles, carrousel } from './Home.module.css';

const Home = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    infinite: true, // establecer infinite en true para el bucle
    fade: true,
  };

  const hotelCards = [
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/Mental_Health_HomePage_Banner.jpg?itok=18azSZmU',
      text1: "We're harnessing the power of pets to help support youth mental health.",
      button: "LEARN MORE",
      buttonColor: "red",
      buttonTextcolor: "white"
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/VENUS23_POSTHeader_1440x450%402x-2.jpg?itok=2WnNoXcf',
      heading: "Up Your Game With Venus & Pro Plan",
      paragraph: "Tennis superstar Venus Williams and her dog, Harry, are always chasing their best — even on Mondays. Join this dynamic duo in getting active and giving back and learn more about their active life together.",
      button1: "MONDAY LIKE A PRO",
      button2: "Meet Venus and Harry",
      buttonColor: "white",
      buttonTextcolor: "black"
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/HomepageCarousel_PCadoption_022322.jpg?itok=UscBjjou',
      text2: "Purina Cares About the Future of Every Pet",
      paragraph3: "Purina and Petfinder partner to bring a future where every pet has a loving home.",
      button: "LEARN MORE",
      buttonColor: "red",
      buttonTextcolor: "white"
    },
    {
      imageSrc:
        'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_1680/public/HomepageCarousel_Sustainability_022322.jpg?itok=C_FJsSKU',
      heading: "Pursuing a More Sustainable Future",
      paragraph4: "We’re committed to pets, people and the planet we all share, and we’re taking bold steps forward.",
      button4: "LEARN MORE",
      buttonColor: "red",
      buttonTextcolor: "white"
    },
  ];

  return (
    <div className={styles}>
      <Navbar />
      <div className={carrousel}>
      <Slider {...sliderSettings}>
          {hotelCards.map((card, index) => (
            <div key={index}>
              <div style={{position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', textAlign: 'left', color: 'white', maxWidth: '417px'}}>
                <h2 style={{fontSize: '32px', fontWeight: 'bold',  marginBottom: '-10px', maxWidth: '300px'}}>{card.heading}</h2>
                <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '10px', maxWidth: '400px'}}>{card.text1}</h2>
                <h2 style={{fontSize: '32px', color: 'black', fontWeight: 'bold', marginTop: '-10px', maxWidth: '400px'}}>{card.text2}</h2>
                {index === 0 && (
                  <button style={{backgroundColor: card.buttonColor, color: card.buttonTextcolor, padding: '10px 20px', borderRadius: '5px', fontWeight: '400', cursor: 'pointer', marginTop: '10px'}}>{card.button}</button>
                )}
                {index === 1 && (
                  <div>
                    <p style={{fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', maxWidth: '500px'}}>{card.paragraph}</p>
                    <button style={{backgroundColor: card.buttonColor, color: card.buttonTextcolor, padding: '10px 20px', borderRadius: '5px', fontWeight: '500', cursor: 'pointer', marginRight: '10px'}}>{card.button1}</button>
                    <button style={{backgroundColor: card.buttonColor, color: card.buttonTextcolor, padding: '10px 20px', borderRadius: '5px', fontWeight: '500', cursor: 'pointer'}}>{card.button2}</button>
                  </div>
                )}
                {index === 2 && (
                  <div>
                  <p style={{fontSize: '16px', fontWeight: '500', marginTop: '-20px', color: 'black', marginBottom: '10px', maxWidth: '500px'}}>{card.paragraph3}</p>
                  <button style={{backgroundColor: card.buttonColor, color: card.buttonTextcolor, padding: '10px 20px', borderRadius: '5px', fontWeight: '400', cursor: 'pointer', marginTop: 'px'}}>{card.button}</button>
                  </div>
                )}
                {index === 3 && (
                  <div>
                  <p style={{fontSize: '16px', fontWeight: '500', marginTop: '-20px', color: 'white', marginBottom: '10px', maxWidth: '500px'}}>{card.paragraph4}</p>
                  <button style={{backgroundColor: card.buttonColor, color: card.buttonTextcolor, padding: '10px 20px', borderRadius: '5px', fontWeight: '400', cursor: 'pointer', marginTop: 'px'}}>{card.button4}</button>
                  </div>
                )}
              </div>
              <img alt={card.title} src={card.imageSrc} width='100%' height='500px'  />
            </div>
          ))}
        </Slider>
        <Rectangulo1 />
        <Rectangulo2 />
        <Rectangulo3 />
        <Imagen1 />
        <Rectangulo4 />
        <Rectangulo5 />
        <Rectangulo6 />
        <Imagen2 />
        <Rectangulo7 />
        <Rectangulo8 />
        <Rectangulo9 />
        <Rectangulo10 />
      </div>
    </div>
  );
};

export default Home;
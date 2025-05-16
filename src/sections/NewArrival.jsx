import { motion } from 'framer-motion';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const PopupBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  color: black;
  padding: 2rem;
  border-radius: 20px;
  z-index: 101;
  text-align: center;
  max-width: 90vw;
  width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const PopupButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.fontsm};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
`;



const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  margin-bottom: 11rem;
  padding-top: 11rem; /* <-- Add this line */
`;

const CTAButton = styled.button`
  padding: 1.2rem 3rem;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.fontxl}; /* Increased from fontmd */
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);

  &:hover {
    background-color: #333;
    transform: scale(1.08);
  }
`;

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.text};
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 0px solid black;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }
  h3 {
       font-weight: 200;
       text-align: center;
       cursor: pointer;
     }
  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name, note }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
	  <h3>{note}</h3>
    </Item>
  );
};





const NewArrival = () => {
	
  const [showPopup, setShowPopup] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);
  const handleRedirect = () => {
    window.open("https://www.etsy.com/shop/tiferet", "_blank");
    setShowPopup(false);
  };

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
let t1= gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
            // markers: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        This isn’t <br/>fashion. 
		<br/>
		This is <br/>soulwear
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={img1} name="TIFERET Water Bottle" note="Stay clear, stay steady"/>
        <Photos img={img2} name="TIFERET Coffee Mug" note="Sip with intention"/>
        <Photos img={img3} name="TIFERET Tote Bag" note="Carry what counts"/>
        <Photos img={img4} name="TIFERET Canvas Apron" note="Nourish more than a meal"/>
      </Container>

      <Text data-scroll data-scroll-speed="-4">
	  In Kabbalah, TIFERET is the force that unites loving-kindness (chesed) with 
	  strength (gevurah) to create compassion, clarity, and truth (emet). 
	  It lives between extremes—balancing emotion with intention—and brings 
	  something real into the world.
        <br />
        <br />
		TIFERET invites us to wear our inner values. It shows us that true strength 
		isn't found in domination or passivity, but in the courage to blend love and discipline 
		into a meaningful life.
        <br />
        <br />
        Give it a try. Style your soul — and discover <strong>a new you</strong>.
		<br />
		 <br />
      </Text>
	  
	 
	  <ButtonWrapper>
	    <CTAButton onClick={() => setShowPopup(true)}>
	      Style Your Soul
	    </CTAButton>
	  </ButtonWrapper>
	  
	  {showPopup && (
	    <>
	      <PopupOverlay onClick={() => setShowPopup(false)} />
	      <PopupBox>
	        <p>
	          You’re about to leave this site and visit our Etsy marketplace 
			  to explore Soulwear and to find your element.
	        </p>
	        <PopupButton onClick={handleRedirect}>
	          Continue to Etsy
	        </PopupButton>
	        <div style={{ marginTop: "1rem", fontSize: "0.8rem", cursor: "pointer" }} onClick={() => setShowPopup(false)}>
	          Cancel
	        </div>
	      </PopupBox>
	    </>
	  )}

    </Section>
  );
};

export default NewArrival;


import React, { useState } from 'react';


import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 100;
`;

const PopupBox = styled.div`
  position: fixed;
  top: 30%;
  left: 40%;
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


  text-align:center;
  z-index: 12;
  margin-bottom: 8rem;
  margin-right: 120px;
  padding-top: 5rem; /* <-- Add this line */
`;

const CTAButton = styled.button`
  padding: 1.1rem 2rem;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.fontlg}; /* Increased from fontmd */
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
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  padding-right:4%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const About = () => {
	
	const [showPopup, setShowPopup] = useState(false);
	const handleRedirect = () => {
	    window.open("https://www.etsy.com/shop/tiferet", "_blank");
	    setShowPopup(false);
	  };

  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Essence
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
	  Rooted in the mystical Hebrew concept of TIFERET, meaning "beauty," it stands at the
	  heart of ancient wisdom and modern soul.
        <br />
        <br />
		TIFERET harmonizes contrasts—bold and soft, grit and grace, rebellion and reverence.
		It's the spiritual pulse where soul meets style.
        
		<br />
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
      </Left>

      <Right>
        <img width="400" height="600" src={img1} alt="Essence" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="Essences"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="Essence"
          data-scroll
          data-scroll-speed="-2"
        />
      </Right>
    </Section>
  );
};

export default About;

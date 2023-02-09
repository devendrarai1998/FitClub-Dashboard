import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";
 
const Hero = () => {
  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<= 768 ? true : false;

  return (
    <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />

            {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "170px": '238px'}}
                whileInView={{ left: '8px'}}
                transition={{ ...transition, type: 'tween'}}
                >
                </motion.div>
                <span> The Best Fitness Club in the Town </span>
            </div>
            
            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                   <span className="stroke-text">Shape </span>
                   <span>Your</span> 
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                        In here We Will help you to shape and build your ideal body and
                        live up your life to fullest
                    </span>
                </div>
            </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+" />
                    </span>
                    <span>Expert Coaches</span>
                </div>
                < div >
                    <span>
                        <NumberCounter start={600} end={1000} delay='2' preFix="+" />
                    </span> 
                    <span>Members Joined</span> 
                </div>
                <div>
                    <span>
                        <NumberCounter start={50} end={100} delay='4' preFix="+" />
                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            {/* Hero button */}
            <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>

        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div 
              initial={{ right: '-1rem' }}
              whileInView={{ right: '4rem' }}
              transition={transition}
              className="heart-rate">
                <img src={Heart} alt=" " />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* hero-images */}
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img 
            initial={{ right: '11rem' }}
            whileInView={{ right: '20rem' }}
            transition={transition}
            src = {hero_image_back} alt = "" className = "hero-image-back" />

            {/* Calories */}
            <motion.div 
              initial={{right: '37rem' }}
              whileInView={{ right: '28rem' }}
              transition={transition}
              className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span> 
                    <span>222 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
)};

export default Hero;
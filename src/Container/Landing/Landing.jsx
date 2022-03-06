import React from "react";
import hero from "../../assets/hero.png";
import "./Landing.css";
import Typewriter from 'typewriter-effect';
const Landing=()=>{
    return(
        <div className="lcont">
            <div data-aos="fade-right" className="Left">
            <h1 className="lheader">can you type...</h1>
            <div className="Typewrite">
                <Typewriter
                options={{
                    strings: ['fast?', 'correct?','quick?'],
                    autoStart: true,
                    loop: true,
                }}
/>
            </div>
            </div>
            <div  className="Right">
                <img  data-aos="fade-left" className="flash" src={hero} alt="Hero" />
            </div>
            </div>
    )
}
export default Landing;
import React from 'react';
import pic from '../../images/pic1.jpg';

const About = () => {
    return (
        <div id="about" className="container mr-5  bg-gradient pb-2 border border-warning rounded-3 fw-bold" style={{backgroundColor: 'lightBlue'}}>
            <div>
            <h2 className="fw-bold">About Us</h2>
            <img className="h-50 w-50 mt-2 mb-2" src={pic} alt="" />
            <h3>WHY CHOOSE US?</h3>
            <p className="text-secondary">"My life goal is to remind the world that we all have one life to live,<br/> and together we should live it to the fullest. <br/>I believe that what connects us most is the power of sweat,<br/> and physically working through things as a team."</p>
            <br />
            <h4>WHAT CUTOMERS SAY?</h4>
            <p className="text-secondary">"This place is fun and challenging and really convenient as you can go to different classes,<br/> rather than having to commit to a specific day and time.<br/> The teachers are really friendly and they all have their own style of teaching."</p>
            </div>
        </div>
    );
};

export default About;
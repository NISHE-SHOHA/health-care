import React from 'react';
import { useParams } from 'react-router';
import image from '../../images/trainers/trainer1.jpg';

const Booking = () => {
    const {serviceId} = useParams();
    return (
        <div className="container bg-dark text-light fw-bold">
            <h2>Please Join us: {serviceId}</h2>
            <div>
                <img className="w-25 h-25" src={image} alt="" />
            </div>
            <div>
                <h1>Time-Table</h1>
                <p>9am-8pm</p>
                <br/>
                <h3>Hit Rush</h3>
                <p>9am-10am</p>
                <h3>Cardio</h3>
                <p>10am-11am</p>
                <h3>Pt-Yoga</h3>
                <p>12am-1pm</p>
                <h3>Mind and Body</h3>
                <p>2pm-3pm</p>
                <h3>Pro cycling</h3>
                <p>3pm-4pm</p>
                <h3>Sprint</h3>
                <p>5pm-6pm</p>
                <br/>
                <h1>Pure Strength</h1>
                <p>It is imperative that everyone maximises the time they spend exercising to help guarantee optimal results from the commitment.</p>
                <br />
                <h1>The Challenge</h1>
                <p>It is from this evaluative process that we can truly action our philosophy to nurture every person’s current ability whilst guiding them towards.</p>
                <br />
                <h1>Our Mission</h1>
                <p>Our purpose is to pass on empowering knowledge and training guidance in order to have a positive impact on the health and fitness.</p>
            </div>
        </div>
    );
};

export default Booking;
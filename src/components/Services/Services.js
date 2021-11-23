import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fitnessdata.json')
        .then(res => res.json())
        .then(data => setServices(data));

    }, [])

    return (
        <div id="services">
            <h2 className="text-warning mt-5 fw-bold">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>  
        </div>
    );
};

export default Services;
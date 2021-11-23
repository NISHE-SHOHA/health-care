import React from 'react';
import { Link } from 'react-router-dom'
import './Service.css';

const Service = ({service}) => {
    const { id, name, description, img } = service;
    return (
        <div className=" pb-3 mt-3 fw-bold">
           <div className="card service rounded-3 border border-primary" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title fw-bold">{name}</h5>
            <p classN ="card-text ms-2">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-warning text-light fw-bold border border-primary">Join Now {name.toLowerCase()}</button>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default Service;
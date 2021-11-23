import React from 'react';
import { Link } from 'react-router-dom';




const Trainer = ({trainer}) => {
    const {name, img, traning} = trainer;
    return (
        <div className="col-md-4 g-4 d-flex mb-5 align-items-center justify-content-center">
        <div className="">
            <div className="card fw-bold border border-primary bg-info bg-gradient">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title fw-bold">Name: {name}</h5>
            <p className="card-text">Traning: {traning}</p>
            <Link className="btn btn-warning text-light fw-bold mb-5 border border-primary" to="">Join Me</Link>
            </div>
            </div>
            </div>
        </div>
            
    );
};

export default Trainer;
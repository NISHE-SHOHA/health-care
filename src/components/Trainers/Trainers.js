import React from 'react';
import Trainer from '../Trainer/Trainer';
import trainer1 from '../../images/trainers/trainer3.jpg';
import trainer2 from '../../images/trainers/trainer2.jpg';
import trainer3 from '../../images/trainers/trainer4.jpg';



const trainers = [
    {
        img: trainer1,
        name: 'Maria Jose',
        traning: 'Cadio Training'
    },
    {
        img: trainer2,
        name: 'John Anderson',
        traning: 'Muscle Building'
    },
    {
        img: trainer3,
        name: 'Zakaria Smith',
        traning: 'Nutrition Skills'
    }
]

const Trainers = () => {
    return (
        <div className="container" id="trainers">
            <h2 className="text-warning mt-5 mb-2 fw-bold">Our Trainers</h2>
            <div className="row">
                {
                    trainers.map(trainer => <Trainer
                        key={trainer.name}
                        trainer={trainer}
                    >

                    </Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;
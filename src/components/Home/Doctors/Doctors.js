import React from 'react';
import Doctor from '../Doctor/Doctor';
import Doctor1 from '../../../images/ourDoctor (1).jpg';
import Doctor2 from '../../../images/ourDoctor (2).jpg';
import Doctor3 from '../../../images/ourDoctor (3).jpg';
const DoctorData = [
    {
        name: 'Wilson Harry',
        cell: '+983-2973-384',
        img: Doctor1
    },
    {
        name: 'Ema Gomez',
        cell: '+983-2973-384',
        img: Doctor2
    },
    {
        name: 'Aliza Farari',
        cell: '+983-2973-384',
        img: Doctor3
    }
]
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h2 className="text-center  text-primary mb-5"><span className="special-border">Our specialists
</span></h2>
                <div className="row">
                    {
                        DoctorData.map(doctor => <Doctor doctor={doctor} key={doctor.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
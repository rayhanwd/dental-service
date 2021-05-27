import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'

    },
    {
        name: 'Cavity Filling',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'

    },
    {
        name: 'Teeth Whitening',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'
    },
    {
        name: 'Teeth Whitening',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'
    },
    {
        name: 'Teeth Whitening',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'

    },
    {
        name: 'Teeth Whitening',
        img: 'https://raw.githubusercontent.com/saihoai/jdentistol/main/tooth.svg'
    }
]

const Services = () => {
    return (
        <section className="services-container bg-light mt-5 py-5">
            <div className="mt-5 text-center">
                <h5 className="py-2">OUR SERVICES</h5>
                <h2 className="py-2">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;
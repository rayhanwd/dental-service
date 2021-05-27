import React from 'react';
import './serviceDetail.css';
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center mb-5">
            <div className="service card py-5">
            <div className="service-icon">
            <img src={service.img} alt="" />
            </div>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            </div>
        </div>
    );
};

export default ServiceDetail;
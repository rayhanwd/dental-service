import React from 'react';
import banner from '../../../images/banner.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amer connecter adipisicing elit. Dolors eveniet necessitatibus et iusto corrupts minima.</p>
                <button className="d-btn">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <div className="header-img">
                <img src={banner} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;
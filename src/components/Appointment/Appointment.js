import React,{useState} from 'react';
import Navbar from './../Shared/Navbar/Navbar';
import Footer from './../Shared/Footer/Footer';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [SelectedDate,setSelectedDate] = useState(new Date());
    const handleOnChange = (date) => {
        setSelectedDate(date);
            } 
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleOnChange={handleOnChange}></AppointmentHeader>
            <BookAppointment date={SelectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
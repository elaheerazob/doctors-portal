import React from 'react';
import Appointment from '../../assets/images/appointment.png'
import Doctor from '../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${Appointment})`
        }} 
        className="flex justify-center items-center rounded"
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={Doctor} alt="" />
            </div>
            <div className='flex-1 sm:p-5'>
                <h1 className='text-2xl text-primary font-bold'>Appointment</h1>
                <h2 className='text-4xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, minima atque architecto amet eos quo maiores alias vitae eius unde praesentium inventore quibusdam libero perferendis est aliquid facere aut fugit!</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-3">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;
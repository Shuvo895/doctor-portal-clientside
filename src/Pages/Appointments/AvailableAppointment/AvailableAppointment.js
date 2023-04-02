import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOption, setAppointmentOption]= useState([]);
    const [treatment,setTreatment] = useState(null);
    
    useEffect(()=>{
        fetch('appointmentoption.json')
        .then(res =>res.json())
        .then(data => setAppointmentOption(data))
    },[])

    return (
        <section className='py-20'>
            <p className='text-center text-secondary font-bold'>Appointment Available Date:{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOption.map(option =><AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;
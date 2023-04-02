import React from "react";

const AppointmentOption = ({ appointmentOption , setTreatment}) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center ">
        <h2 className="text-xl text-sky-400 font-bold text-center">{name}</h2>
        <p>{slots.length>0 ? slots[0]:'Try another Day'}</p>
        <p>{slots.length} {slots.length >1 ? 'spaces' : 'space'} Available</p>
        <div className="card-actions justify-center">
          <label disabled={slots.length === 0} onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn text-white bg-sky-500">BOOK APPOINTMENT</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

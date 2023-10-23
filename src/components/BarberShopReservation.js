import React, { useEffect, useState } from 'react';
import ServicesSelect from './ServicesSelect';

// Custom select component


function BarberShopReservation() {
  const [selectedStylist, setSelectedStylist] = useState('Sierra');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('Signature Cut & Style');
  const [message, setMessage] = useState('')
  const [datePicked, setDatePicked] = useState([])

  useEffect(() => {
    setDatePicked([])
    for(let i = 0; i < 20; i++) {
      if(Math.floor(Math.random() * 2) === 1)  {
        setDatePicked(prev => prev.concat(i))
      }
    }
  },[selectedDate])

  const handleStylistChange = (stylist) => {
    setSelectedStylist(stylist);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  let newdate = null
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  newdate = year + "-" + month + "-" + day;

  // Generate time slots from 8 AM to 6 PM with 30-minute intervals
  const timeSlots = [];
  let currentTime = new Date('2023-01-01T08:00:00');
  const endTime = new Date('2023-01-01T18:00:00');

  while (currentTime <= endTime) {
    const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeSlots.push(timeString);
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(selectedDate && selectedService && selectedStylist && selectedTime)
    setMessage(`Successfully Booked Reservation with ${selectedStylist} for ${selectedService} on ${selectedDate} at ${selectedTime}. We will be reaching out to you shortly!`);
    // You can implement your booking logic here
  };
  function CustomSelect({ options, value, onChange }) {
    return (
      <div className="w-96 flex flex-wrap gap-2 justify-center text-xl nav">
        {options.map((option, index) => (
          <button
            
            disabled={ datePicked.includes(index) ? true : false}
            key={option}
            className={`custom-option ${value === option ? 'bg-red-950 bg-opacity-30 p-4 w-24 flex-grow' : 'bg-red-950 bg-opacity-10 p-4 w-24 flex-grow'}`}
            onClick={() => onChange(option)}
            type='button'
          >
            {option}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className=' text-red-800 max-w-full flex justify-center overflow-hidden py-4'>
      <form className='flex text-2xl flex-col items-center px-4' onSubmit={handleSubmit}>
      <div className='flex py-4 flex-col gap-2 px-3'>
      <div className='flex flex-col gap-2 items-center'>
          <div className='font-bold'>Stylist & Service:</div>
          <select required={true} value={selectedStylist} onChange={(e) => handleStylistChange(e.target.value)} className='border w-80 border-red-800 bg-neutral-300'>
            <option value="Sierra">Sierra</option>
            <option value="Billy">Billy</option>
            <option value="Jonny">Jonny</option>
          </select>
          <ServicesSelect setSelectedService={setSelectedService}/>
        </div>
        <div className='flex gap-2 flex-col items-center'>
          <div className="label text-left font-bold">Date:</div>
          <input min={newdate} className='bg-neutral-300 border w-80 border-red-800' required={true} type="date" value={selectedDate} onChange={handleDateChange} />
          <div className="label font-bold">Time Slot:</div>
          <input value={selectedTime || 'Not Selected'} className='bg-neutral-300 text-center' disabled={true}></input>
        </div>
        </div>
        <div className="select-container">
          <CustomSelect options={timeSlots} value={selectedTime} onChange={handleTimeChange} />
        </div>
        {message ? <p className='max-w-xl text-center py-4'>{message}</p> : null}
        <div className='flex flex-col gap-2 w-80 py-4 justify-between'>
          <div className='font-bold'>Email: </div>
          <input type='email' className='bg-neutral-300 border border-red-800 px-3 placeholder:text-red-800'>
          </input>
        <button className='bg-red-800 nav text-neutral-300 px-4 py-2' type="submit">Book Appointment</button>
        </div>
      </form>
      
    </div>
  );
}

export default BarberShopReservation;

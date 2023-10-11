import React, { useState } from 'react';

// Custom select component
function CustomSelect({ options, value, onChange }) {
  return (
    <div className="max-w-lg flex flex-wrap gap-2 justify-start text-xl">
      {options.map((option) => (
        <button
          key={option}
          className={`custom-option ${value === option ? 'bg-red-950 bg-opacity-30 p-4 w-40' : 'bg-red-950 bg-opacity-10 p-4 w-40'}`}
          onClick={() => onChange(option)}
          type='button'
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function BarberShopReservation() {
  const [selectedStylist, setSelectedStylist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [message, setMessage] = useState('')

  const handleStylistChange = (stylist) => {
    setSelectedStylist(stylist);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

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
    // Handle the reservation submission, e.g., send data to the server
    setMessage(`Successfully Booked Reservation with ${selectedStylist} on ${selectedDate} at ${selectedTime}. We will be reaching out to you shortly!`);
    // You can implement your booking logic here
  };

  return (
    <div className='nav text-red-800 py-4'>
      <form className='flex w-fit text-lg mx-auto flex-col gap-2 items-start px-4' onSubmit={handleSubmit}>
      <div className='flex py-4 flex-col w-full items-start gap-4'>
      <div className='flex gap-2'>
          <div className='font-bold'>Stylist: </div>
          <select required={true} value={selectedStylist} onChange={(e) => handleStylistChange(e.target.value)} className='border border-red-800 bg-neutral-300 font-bold'>
            <option value="Sierra">Sierra</option>
            <option value="Billy">Billy</option>
            <option value="Jonny">Jonny</option>
          </select>
        </div>
        <div className='flex gap-2'>
          <div className="label text-left font-bold">Date: </div>
          <input className='bg-neutral-300 font-bold border border-red-800' required={true} type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        </div>
        <div className="select-container">
          <CustomSelect options={timeSlots} value={selectedTime} onChange={handleTimeChange} />
        </div>
        <div className='flex gap-2'>
          <div className='font-bold'>Email: </div>
          <input type='email' className='bg-neutral-300 border border-red-800 px-3 placeholder:text-red-800'>
          </input>
        {message ? <p className='max-w-xl'>{message}</p> : null}
        <button className='bg-red-800 font-bold text-neutral-300 px-2' type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default BarberShopReservation;

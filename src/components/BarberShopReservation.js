import React, { useState } from 'react';

// Custom select component
function CustomSelect({ options, value, onChange }) {
  return (
    <div className="max-w-xl flex flex-wrap gap-2 justify-center text-xl">
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
    <div className='text-center nav text-red-800 text-2xl flex flex-col items-center py-4'>
      <form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
      <div>
          <div className='font-bold'>Stylist </div>
          <select required={true} value={selectedStylist} onChange={(e) => handleStylistChange(e.target.value)} className='border text-xl border-red-800 bg-neutral-300 font-bold'>
            <option value="Sierra">Sierra</option>
            <option value="Billy">Billy</option>
            <option value="Jonny">Jonny</option>
          </select>
        </div>
        <div className="select-container">
          <div className="label font-bold">Date</div>
          <input className='bg-neutral-300 font-bold text-xl border border-red-800' required={true} type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <div className="select-container">
          <div className="label mb-2 font-bold">Time</div>
          <CustomSelect options={timeSlots} value={selectedTime} onChange={handleTimeChange} />
        </div>
        <div>
          <input placeholder='Your Email Address' type='email' className='bg-neutral-300 text-center border border-red-800 px-3 placeholder:text-red-800'>
          </input>
        </div>
        {message ? <p className='max-w-xl'>{message}</p> : null}
        <button className='bg-red-800 max-w-fit mx-auto text-neutral-300 px-4 py-2' type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BarberShopReservation;

import React, { useState } from 'react';

const BookingForm = () =>   {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Booking confirmed for ${name} for ${service} on ${date}`);
    // You might want to handle form submission, e.g., send data to an API
  };

  return (
    <section id="book">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Service:
          <select value={service} onChange={(e) => setService(e.target.value)} required>
            <option value="">Select a service</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Gel Nails">Gel Nails</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
    
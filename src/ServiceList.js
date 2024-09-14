import React from 'react';

const services = [
  { id: 1, name: 'Manicure', price: '$20' },
  { id: 2, name: 'Pedicure', price: '$30' },
  { id: 3, name: 'Gel Nails', price: '$40' },
];

const ServiceList = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>Price: {service.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceList;

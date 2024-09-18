import React from 'react';
import Header from './Header';
import ServiceList from './ServiceList';
import BookingForm from './BookingForm';
import ContactInfo from './ContactInfo';
import EmployeeList from './EmployeeList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ServiceList />
        <BookingForm />
        <EmployeeList />
        <ContactInfo />
      </main>
    </div>
  );
};

export default App;

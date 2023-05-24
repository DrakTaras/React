import React from 'react';
import ContactForm from './ContactForm';
import DeliveryForm from './DeliveryForm';

function App() {
  return (
    <div>
      <h1>Зворотній зв'язок</h1>
      <ContactForm />
      <h1>Форма доставки</h1>
      <DeliveryForm />
    </div>
  );
}

export default App;

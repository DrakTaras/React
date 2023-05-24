import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && subject) {
      console.log('Email:', email);
      console.log('Тема:', subject);
      setEmail('');
      setSubject('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>Тема:</label>
        <input type="text" value={subject} onChange={handleSubjectChange} required />
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default ContactForm;

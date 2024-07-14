import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = (field, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required';
    } else if (field === 'email' && !validateEmail(value)) {
      error = 'Invalid email address';
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'This field is required';
    if (!email) newErrors.email = 'This field is required';
    if (!message) newErrors.message = 'This field is required';
    if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    setErrors(newErrors);
  };

  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name', name)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email', email)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message', message)}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

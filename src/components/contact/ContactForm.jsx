import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput 
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Syed Kousar"
        />
        <FormInput 
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="hello@example.com"
        />
      </div>
      
      <FormInput 
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="+1 (234) 567-890"
      />

      <FormInput 
        label="Your Message"
        name="message"
        textarea
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your coffee preferences..."
      />

      <div className="pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === 'submitting'}
          className="relative w-full bg-gold text-coffee-dark font-poppins font-bold uppercase tracking-[0.2em] py-5 rounded-xl overflow-hidden group disabled:opacity-70"
        >
          <span className="relative z-10">
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
          </span>
          <motion.div 
            className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          />
        </motion.button>
      </div>

      {status === 'success' && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-accent font-poppins text-sm"
        >
          Thank you for reaching out! We'll get back to you shortly.
        </motion.p>
      )}
    </form>
  );
};

export default ContactForm;

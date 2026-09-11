import React, { useState } from 'react';
import FormInput from '../contact/FormInput';

const BillingDetails = ({ data, setData, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!data.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!data.lastName.trim()) tempErrors.lastName = "Last name is required";
    
    if (!data.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!data.phone.trim()) {
      tempErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, '').replace('+91', ''))) {
      tempErrors.phone = "Invalid Indian phone number";
    }

    if (!data.address.trim()) tempErrors.address = "Street address is required";
    if (!data.city.trim()) tempErrors.city = "City is required";
    if (!data.zipCode.trim()) tempErrors.zipCode = "Zip code is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 border-white/5">
      <h3 className="text-2xl font-cormorant italic text-gold mb-8">Shipping Information</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput 
            label="First Name" 
            name="firstName" 
            value={data.firstName} 
            onChange={handleChange} 
            error={errors.firstName}
            placeholder="Syed" 
          />
          <FormInput 
            label="Last Name" 
            name="lastName" 
            value={data.lastName} 
            onChange={handleChange} 
            error={errors.lastName}
            placeholder="Kousar" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput 
            label="Email" 
            name="email" 
            type="email" 
            value={data.email} 
            onChange={handleChange} 
            error={errors.email}
            placeholder="syed@example.com" 
          />
          <FormInput 
            label="Phone" 
            name="phone" 
            value={data.phone} 
            onChange={handleChange} 
            error={errors.phone}
            placeholder="+91 98765 43210" 
          />
        </div>
        <FormInput 
          label="Street Address" 
          name="address" 
          value={data.address} 
          onChange={handleChange} 
          error={errors.address}
          placeholder="123 Coffee Lane" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput 
            label="City" 
            name="city" 
            value={data.city} 
            onChange={handleChange} 
            error={errors.city}
            placeholder="Bangalore" 
          />
          <FormInput 
            label="Zip Code" 
            name="zipCode" 
            value={data.zipCode} 
            onChange={handleChange} 
            error={errors.zipCode}
            placeholder="560001" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-gold text-coffee-dark font-poppins font-bold uppercase tracking-widest py-4 rounded-xl mt-4 hover:bg-accent transition-all duration-300 active:scale-[0.98]"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;

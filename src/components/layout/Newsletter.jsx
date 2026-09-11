import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full bg-coffee-dark border border-white/10 rounded-full py-4 px-6 text-cream text-sm font-poppins focus:outline-none focus:border-gold transition-colors placeholder:text-cream/20"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-2 top-2 bottom-2 px-6 bg-gold text-coffee-dark rounded-full font-poppins text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Join'}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="mt-3 text-accent text-xs font-poppins animate-fade-in">
          Thank you! Welcome to the club.
        </p>
      )}
    </div>
  );
};

export default Newsletter;

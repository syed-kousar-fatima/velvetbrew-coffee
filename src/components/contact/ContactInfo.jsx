import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const infoItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Location",
      content: "123 Kamanahalli, Bangalore."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Number",
      content: "+91 9876543210"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
        </svg>
      ),
      title: "Email Address",
      content: "concierge@velvetbrew.com"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="max-w-md">
        <h3 className="text-3xl font-cormorant italic text-cream mb-6">Contact Information</h3>
        <p className="text-cream/60 font-poppins leading-relaxed">
          Whether you're looking for a private tasting session or want to inquire about our wholesale beans, our team is ready to assist you.
        </p>
      </div>

      <div className="space-y-8">
        {infoItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6 group"
          >
            <div className="w-14 h-14 rounded-full bg-espresso border border-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-coffee-dark transition-all duration-500 shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="text-gold font-poppins text-xs uppercase tracking-[0.2em] mb-2">{item.title}</h4>
              <p className="text-cream/80 font-poppins text-sm leading-relaxed">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5">
        <p className="text-cream/30 font-poppins text-[10px] uppercase tracking-[0.3em] mb-6">Follow Our Journey</p>
        <div className="flex gap-4">
          {['Instagram', 'Facebook', 'Twitter'].map((social) => (
            <a 
              key={social}
              href="#"
              className="text-cream/60 hover:text-gold font-poppins text-xs uppercase tracking-widest transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-espresso/50 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeading 
          subtitle="Get In Touch" 
          title="Visit Our Roastery" 
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ContactInfo />
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="glass-card p-8 md:p-12 border-white/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-espresso relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-gold/30 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <SectionHeading 
          subtitle="Guest Stories" 
          title="What Our Connoisseurs Say" 
          align="center"
        />
        
        <TestimonialSlider />
      </Container>
    </section>
  );
};

export default Testimonials;

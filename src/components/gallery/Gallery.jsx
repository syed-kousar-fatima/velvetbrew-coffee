import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GalleryGrid from './GalleryGrid';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-coffee-dark relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container>
        <SectionHeading 
          subtitle="Visual Journey" 
          title="Captured Moments" 
          align="center"
        />
        
        <GalleryGrid />
      </Container>
    </section>
  );
};

export default Gallery;

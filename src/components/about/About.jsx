import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import AchievementCounter from './AchievementCounter';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0F0B08] py-24 lg:py-32 2k:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B1410]/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <Container className="w-full !max-w-none !px-0 !mx-0">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-24 2k:px-40">
          <SectionHeading 
            subtitle="Our Legacy" 
            title="Crafting the Perfect Cup Since 2014" 
            align="center"
            className="2k:max-w-5xl 2k:mb-32"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 2k:gap-0 items-center justify-items-center">
            <div className="w-full flex justify-center lg:justify-end 2k:pr-24">
              <AboutImage />
            </div>
            <div className="w-full flex justify-center lg:justify-start 2k:pl-24">
              <AboutContent />
            </div>
          </div>

          <div className="mt-24 lg:mt-32 2k:mt-56 w-full">
            <AchievementCounter />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

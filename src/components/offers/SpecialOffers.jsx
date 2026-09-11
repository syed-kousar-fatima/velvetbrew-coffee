import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import OfferCard from './OfferCard';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Morning Golden Hour",
      description: "Start your day with our signature Gold Brew and any artisan pastry for a special price.",
      discount: "20% OFF",
      image: "https://i.pinimg.com/736x/ae/85/98/ae85983bfeae690d2235dfbb3162d342.jpg",
      endTime: new Date().getTime() + 1000 * 60 * 60 * 5,
      tag: "Limited Time"
    },
    {
      id: 2,
      title: "Espresso Martini Nights",
      description: "Join us every Friday evening for our handcrafted espresso martinis and live jazz music.",
      discount: "BUY 1 GET 1",
      image: "https://i.pinimg.com/736x/13/cf/71/13cf71e52e6a5321968221d975e217b5.jpg",
      endTime: new Date().getTime() + 1000 * 60 * 60 * 12,
      tag: "Weekend Special"
    }
  ];

  return (
    <section className="py-24 bg-espresso relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-gold/20 blur-[150px] rounded-full" />
      </div>
      
      <Container>
        <SectionHeading 
          subtitle="Exclusive Deals" 
          title="Today's Special Offers" 
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffers;

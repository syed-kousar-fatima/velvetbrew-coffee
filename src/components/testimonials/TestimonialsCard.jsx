import React from 'react';
import Rating from './Rating';

const TestimonialCard = ({ review }) => {
  return (
    <div className="glass-card p-8 md:p-12 relative flex flex-col items-center text-center">
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-full border-4 border-espresso overflow-hidden shadow-2xl">
          <img 
            src={review.image} 
            alt={review.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-gold text-coffee-dark p-2 rounded-full shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 15.5523 13.4647 16 14.017 16H14.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 15.5523 4.46472 16 5.017 16H5.017V21H5.017Z" />
          </svg>
        </div>
      </div>

      <div className="mt-12 mb-6">
        <Rating rating={review.rating} />
      </div>

      <blockquote className="text-xl md:text-2xl font-cormorant italic text-cream leading-relaxed mb-8">
        "{review.content}"
      </blockquote>

      <div>
        <h4 className="text-gold font-poppins text-sm uppercase tracking-[0.2em] mb-1">
          {review.name}
        </h4>
        <p className="text-cream/40 font-poppins text-[10px] uppercase tracking-widest">
          {review.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialsCard';

const reviews = [
  {
    id: 1,
    name: "Zara Khan",
    role: "Coffee Enthusiast",
    image: "https://i.pinimg.com/736x/2b/2b/d9/2b2bd9fb74f64d7d9f60e6a9ec7b0d11.jpg",
    content: "Velvet Brew is a sanctuary for those who truly appreciate the craft of coffee. The Midnight Espresso is, without a doubt, the finest I've ever tasted.",
    rating: 5
  },
  {
    id: 2,
    name: "Junaid",
    role: "Food Critic",
    image: "https://i.pinimg.com/1200x/1d/54/ce/1d54cecf89f9971491f7c0d71f19bc4d.jpg",
    content: "The ambiance is as sophisticated as the menu. Their attention to detail, from the glassmorphism elements to the bean sourcing, is unparalleled.",
    rating: 5
  },
  {
    id: 3,
    name: "Roshni",
    role: "Regular Guest",
    image: "https://i.pinimg.com/736x/d1/a3/00/d1a300ac7a17470fd05476bdc2a3ae62.jpg",
    content: "The Caramel Macchiato here is a work of art. It's not just a coffee shop; it's an experience that tells a story in every single sip.",
    rating: 4
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto mt-16">
      <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <TestimonialCard review={reviews[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === i ? 'w-12 bg-gold' : 'w-3 bg-white/10 hover:bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from './GalleryCard';
import GalleryModal from './GalleryModal';

const galleryImages = [
  { id: 1, src: 'https://i.pinimg.com/236x/30/76/4e/30764e1549b8255d9c217783db54c962.jpg', title: 'The Perfect Pour', category: 'Brewing' },
  { id: 2, src: 'https://i.pinimg.com/736x/af/e4/0c/afe40c897a407f0122fdb31532d11728.jpg', title: 'Morning Ritual', category: 'Lifestyle' },
  { id: 3, src: 'https://i.pinimg.com/1200x/67/c9/60/67c960cbdc77890310c9d6e03483af0d.jpg', title: 'Artisan Beans', category: 'Product' },
  { id: 4, src: 'https://i.pinimg.com/736x/b6/25/67/b625671d39b13ad1a592f14fd0dc28b6.jpg', title: 'Cozy Corners', category: 'Interior' },
  { id: 5, src: 'https://i.pinimg.com/736x/82/c8/73/82c873510448c50bd928401bfc154d95.jpg', title: 'Velvet Foam', category: 'Brewing' },
  { id: 6, src: 'https://i.pinimg.com/1200x/05/1e/4a/051e4abeb31b23b993b121f35ba5198a.jpg', title: 'Golden Hour', category: 'Interior' },
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mt-16">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, index) => (
          <GalleryCard 
            key={image.id} 
            image={image} 
            index={index}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <GalleryModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;

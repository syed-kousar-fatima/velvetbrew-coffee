export const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatSlight = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const steamEffect = {
  animate: {
    y: [0, -40],
    x: [0, 5, -5, 0],
    opacity: [0, 0.4, 0],
    scale: [0.8, 1.2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

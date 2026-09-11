export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

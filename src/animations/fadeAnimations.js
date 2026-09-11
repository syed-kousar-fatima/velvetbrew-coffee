export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

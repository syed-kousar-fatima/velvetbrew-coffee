export const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export const textReveal = {
  hidden: { y: "100%" },
  visible: (custom = 0) => ({
    y: 0,
    transition: {
      duration: 1,
      delay: custom,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

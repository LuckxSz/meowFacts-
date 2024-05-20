export const containerProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
export const buttonProps = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};
export const factsProps = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.5 },
};

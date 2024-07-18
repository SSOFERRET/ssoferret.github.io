import { forwardRef, useEffect, useImperativeHandle } from "react";
import confetti from "canvas-confetti";

const PopConfetti = forwardRef((props, ref) => { 
  useImperativeHandle(ref, () => ({
    fire() {
      confetti({
        particleCount: 100, 
        spread: 70, 
        origin: { y: 0.6 }, 
      });
    },
  }));

  useEffect(() => {
    return () => {
      confetti.reset();
    };
  }, []);

  return null;
});

export default PopConfetti;

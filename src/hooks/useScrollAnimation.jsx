import { useEffect, useState } from 'react';

const useScrollAnimation = (ref, animationClass) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isVisible ? animationClass : '';
};

export default useScrollAnimation;

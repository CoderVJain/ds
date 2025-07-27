import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const heartsContainer = document.getElementById('hearts-container');
    if (!heartsContainer) return;

    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '♥';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 8 + 's';
      heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
      heartsContainer.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 10000);
    };

    const interval = setInterval(createHeart, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div id="hearts-container" className="floating-hearts" />;
}

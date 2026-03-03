import React, { useEffect, useState } from 'react';
import './StarBackground.scss';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [];
    const numStars = 40; // Less than original but visible
    
    for (let i = 0; i < numStars; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        // Map size to 3px - 8px so they are visible
        size: Math.random() * 5 + 3,
        animationDuration: Math.random() * 5 + 3,
        animationDelay: Math.random() * 10,
        // Slightly higher opacity for visibility
        baseOpacity: Math.random() * 0.3 + 0.2
      });
    }
    
    setStars(generatedStars);
  }, []);

  return (
    <div className="star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="pointed-star"
          style={{
            left: `${star.left}vw`,
            top: `${star.top}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--base-opacity': star.baseOpacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;

import React, { useEffect, useState } from 'react';
import './StarBackground.scss';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [];
    const numStars = 60; // Adjust for density
    
    for (let i = 0; i < numStars; i++) {
      generatedStars.push({
        id: i,
        // Calculate random positions
        left: Math.random() * 100,
        top: Math.random() * 100,
        // Map size to 4px - 14px
        size: Math.random() * 10 + 4,
        // Randomize animation delays and durations for twinkling
        animationDuration: Math.random() * 4 + 2,
        animationDelay: Math.random() * 5,
        // Opacity varies to add depth
        baseOpacity: Math.random() * 0.5 + 0.3
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

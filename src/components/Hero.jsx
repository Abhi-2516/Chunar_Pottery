import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

const Hero = () => {
  return (
    // 2. Use standard HTML tags like <section> and <div>
    <section className="hero-section"> 
      <div className="hero-left">
        <p className="hero-text"> {/* Use <p> for text */}
          Crafting timeless treasures, preserving Chunar’s heritage in every piece.
        </p>

        {/* 3. Use <Link> for internal navigation */}
        <Link to="/shop">
          <button>Load More</button>
        </Link>
      </div>

      <div className="hero-right">
        {/* 4. Add the leading slash '/' to the image path */}
        <img src='/images/hero.png' alt="Hero pottery" />
      </div>
    </section>
  );
}

export default Hero;
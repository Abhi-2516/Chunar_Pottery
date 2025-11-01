import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link (necessary for internal links)

const Hero = () => {
  return (
    <hero>
      <left>
        {/* 2. Changed <text> to <p> because <text> is not a valid HTML tag */}
        <p>
          Crafting timeless treasures, preserving Chunar’s heritage in every piece.
        </p>

        {/* 3. Changed <a> tag to <Link> to fix the broken navigation */}
        <Link to="/shop">
          <button> Load More</button>
        </Link>
      </left>

      <right>
        {/* 4. Added the leading slash '/' to the image path to fix the image */}
        <img src='/images/hero.png' alt="Hero pottery" />
      </right>
    </hero>
  );
}

export default Hero;
import React from 'react';
import './Sample.css';

const Sample = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <div className="marquee-container">
        <div className="marquee">
          <div className="card">
            <img src="/images/Card-2.png" alt="Golden Brown Vase" />
            <h3>Golden Brown Vase - ₹2900</h3>
          </div>
          <div className="card">
            <img src="/images/Card-3.png" alt="Elegant Blue Vase" />
            <h3>Elegant Blue Vase - ₹3200</h3>
          </div>
          <div className="card">
            <img src="/images/card-4.png" alt="Modern Green Vase" />
            <h3>Modern Green Vase - ₹3500</h3>
          </div>
          <div className="card">
            <img src="/images/card-5.png" alt="Classic Red Vase" />
            <h3>Classic Red Vase - ₹2800</h3>
          </div>
          <div className="card">
            <img src="/images/card-6.png" alt="Sleek Black Vase" />
            <h3>Sleek Black Vase - ₹4000</h3>
          </div>
          <div className="card">
            <img src="/images/card-7.png" alt="Artistic White Vase" />
            <h3>Artistic White Vase - ₹4500</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;

import React from 'react';
import "./Airplanefood.css";

function Airplanefood() {
  return (
    <div>
      <div className='food-container'>
         <h1 className='food-title'>SERVE WHAT YOU DESERVE</h1>
         <img className='cateringImage' src='/catering.png' alt='Catering Image' />
      </div>

      <div className='food-list-container'>
        <ul>
          <li><img src="/food1.jpg" alt="food 1" /></li>
          <li><img src="/food2.png" alt="food 2" /></li>
          <li><img src="/food3.jpg" alt="food 3" /></li>
          <li><img src="/food4.jpg" alt="food 4" /></li>
          <li><img src="/food5.png" alt="food 5" /></li>
          <li><img src="/food6.jpg" alt="food 6" /></li>
          <li><img src="/food7.png" alt="food 7" /></li>
          <li><img src="/food8.jpg" alt="food 8" /></li>
          <li><img src="/food9.jpg" alt="food 9" /></li>
          <li><img src="/food10.png" alt="food 10" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Airplanefood;

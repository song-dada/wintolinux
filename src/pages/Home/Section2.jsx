import React, { useState } from 'react';
import '../../style/section2.scss'


const Section2 = () => {

  const [hoverIndex, setHoverIndex] = useState(null);
  const movefile = ['car2.mp4', 'car3.mp4', 'car5.mp4'];

  return (
    <div className='s2'>
      <div className="text-area">
        <h2>Lorem</h2>
        <p>ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
      <div className="video-area">
        {
          movefile.map((item, index) => (
            <div className={`video-box ${hoverIndex === index ? 'active' : 'not-active'}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              key={'video-box' + index}>
              <video src={`./movefile/${item}`} autoPlay loop muted  playsInline></video>
            </div>
          ))
        }</div>
    </div>
  )
}

export default Section2
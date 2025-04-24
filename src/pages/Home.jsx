import React, { useRef } from 'react';
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import ScrollBtn from './Home/ScrollBtn';

import '../style/home.scss';

const Home = () => {

  const section2ref = useRef(null);
  const section3ref = useRef(null);
  return (
    <div className='home'>
      <div className='section1'>
        <Section1 />
        <ScrollBtn scrollToRef={section2ref} ctop={false} />
      </div>
      <div className='section1'>
        <Section2 />
        <ScrollBtn scrollToRef={section3ref} ctop={false}/>
      </div>
      <div className='section1'>
        <Section3 />
        <ScrollBtn scrollToRef={section3ref} ctop={true}/>
      </div>
    </div>
  )
}

export default Home
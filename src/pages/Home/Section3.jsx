import React, { useEffect, useRef, useState } from 'react';
import '../../style/section3.scss'

const Section3 = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const scrollEvent = () => {
      const rect = sectionRef.current.getBoundingClientRect(); // 참조된 객체의 위치/크기 등의 기본 정보를 가지고 있음.
      if (rect.top < window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollEvent);
    return ()=> window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <div className='s3' ref={sectionRef}>
      <video src="/movefile/car5.mp4" autoPlay muted loop className={scrolled ? 'active' : ''}/>
      <h2 className={scrolled ? 'text-active' : ''}>Dirve into the unkown</h2>
    </div>
  )
}

export default Section3;
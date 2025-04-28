import React, { useState, useEffect, useRef } from 'react';
import '../../style/section4.scss';


const Section4 = () => {
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
        return () => window.removeEventListener("scroll", scrollEvent);
    }, []);
    return (
        <div className='s4' ref={sectionRef}>
            <video src="/movefile/car2.mp4" autoPlay muted loop className={scrolled ? 'active' : ''} />
            <div className={scrolled ? 'text-active' : ''}>
                <h2>Dirve into the unkown</h2>
                <p>dmdkdkdkdkdkkkkkkkk</p>
            </div>
        </div>
    )
}

export default Section4;
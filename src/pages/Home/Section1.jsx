import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // 자동으로 넘어가는 모듈

import '../../style/section1.scss';
import 'swiper/css';


const Section1 = () => {

  const movefile = ['car2.mp4', 'car3.mp4', 'car5.mp4'];
  const subtitle = useRef(null);

  const clickSubTitle = () => {
    const state = subtitle.current;
    if(state.style.display !== 'block'){
      state.style.display = 'block';
      state.scrollIntoView({behavior: 'smooth'});
      // 참조된 객체 h3(subtitle.current)를 스크롤 해서 보여줘(scrollIntoView)
      // 다 필요없고 ref만 가져가면 됨.
    }else{
      state.style.display = 'none';
    }
  }
  return (
    <div className='s1'>
      <Swiper className='video-swiper' modules={[Autoplay]} loop autoplay={{ delay: 4000 }}>
        {/* modules={[Autoplay]} 사용선언 후 autoplay 이거 선언 해줘야함 스와이퍼에 대한.설정*/}
        {
          movefile.map((item, index) => (
            <SwiperSlide key={index}>
              <video src={`/movefile/${item}`}
                autoPlay muted loop playsInline />
              {/* 여기서의 autoplay는 비디오 실행. */}
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="textCenter" >
        <h1 onClick={clickSubTitle} >Welcome To Our Site</h1>
        <h3 ref={subtitle} style={{ display: 'none' }}>Hava a Nice Day</h3>
      </div>
    </div>
  )
}

export default Section1;
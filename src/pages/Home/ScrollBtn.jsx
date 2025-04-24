import React from 'react';
import { scb } from './ScrollBtn';
import '../../style/scrollBtn.scss';

// export const scb = ( { scrollToRef, ctop } )=>{
//   const scrollDonw =()=>{
//     // scrollToRef && 과 같음
//     if(scrollToRef?.crrent){
//       scrollToRef.crrent.scrollIntoView({behavior: 'smooth'});
//     }  
//   }
//   const scrollTop =()=>{
//     window.scrollTo({top: 0, behavior: 'smooth'});
//   }

// }

const ScrollBtn = ({ scrollToRef, ctop }) => {

  const scrollDonw = () => {
    // scrollToRef && 과 같음
    if (scrollToRef?.crrent) {
      scrollToRef.crrent.scrollIntoView({ behavior: 'smooth' });

      // window.scrollTo({ top: scrollToRef.crrent, behavior: 'smooth' });
    }
    // if (res?.crrent) {
    //   res.crrent.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <div className="scroll-btn downs" onClick={scrollDonw} >Scroll-Donw</div>
      {
        ctop && (
          <div className="scroll-btn tops" onClick={scrollTop}>Scroll-Top</div>
        )
      }
    </div>
  )
}

export default ScrollBtn
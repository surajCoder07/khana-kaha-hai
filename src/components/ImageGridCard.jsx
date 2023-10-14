import React, { useRef, useState } from 'react'
import { img_cdn } from '../utils/constants';
import {PiArrowRightLight} from "react-icons/pi"

const ImageGridCard = ({cards,heading}) => {
      const crouselContainer = useRef()
      
      const navigation = (dir)=>{
        const container = crouselContainer.current;
        let scrollAmount = dir=="left"?
          container.scrollLeft - (container.offsetWidth -200)
          :container.scrollLeft + (container.offsetWidth -200);

          container.scrollTo({
            left:scrollAmount,
            behavior: "smooth",
          })

      }
   

  return <div className='relative'>
  <h1 className='font-bold text-3xl my-3'>{heading}</h1>
    <div ref={crouselContainer}  className='flex gap-5  overflow-scroll scrollbar-hide '>
    {
        cards?.map((card)=>{
                return <div key={card?.entityId} className='flex-shrink-0 max-sm:w-full  '>
        <a href={card?.action?.link} target='blank'>
        <img 
        src={img_cdn+card?.imageId} 
        alt={card?.entityType} 
        className='rounded-3xl w-[400px] max-sm:w-full max-sm:h-auto h-[250px] aspect-grid'

        />
        </a>  
          
    </div>
                
        })
    }

    </div>
    
    <div className='absolute top-0 right-0 flex max-sm:hidden '>   
      <button onClick={()=>navigation("left")} className=' border border-black mx-2 rounded-full w-[40px] h-[40px] flex items-center justify-center'><PiArrowRightLight className='rotate-180' size={"2em"}/></button>
      <button onClick={()=>navigation("right")} className=' border border-black mx-2 rounded-full w-[40px] h-[40px] flex items-center justify-center'><PiArrowRightLight size={"2em"}/></button>
    </div> 
</div>

  

}

export default ImageGridCard
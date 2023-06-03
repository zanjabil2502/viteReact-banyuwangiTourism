import { useState } from 'react';
import image from './assets/logo_bwi.svg'
import { ContentDjawatan, ContentIjen, ContentRedisland } from './components/content';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function App() {
  const [indexSlide, setIndexSlide] = useState(0);
  const [heroSwiper, setSwiperRef] = useState(null);

  function onChangeAutoplay(e) {
    if (e) {
      heroSwiper.autoplay.start();
    } else {
      heroSwiper.autoplay.stop();
    }
  }

  return (
    <>
      <div className='w-full h-screen bg-black flex flex-col'>
          {/* <img src={image} className='w-full h-full' /> */}
          <div className='w-full h-full flex flex-col justify-center z-20 items-center px-10 py-4 gap-y-3'>
            <div className='w-full h-14 mt-4 flex'>
              <div className='w-full h-full flex jusitfy-center items-center gap-x-2'>
                <img src={image} alt='' className='h-12' />
                <div className='h-full flex flex-col justify-start items-start'>
                  <span className='text-lg font-bold text-white'>BANYUWANGI</span>
                  <span className='text-xs text-white'>SUN RISE OF JAVA</span>
                </div>
              </div>
              <div className='w-full h-full flex justify-end items-center'>
                <input type='text' className='w-52 h-8 bg-gray-700 border border-gray-500 rounded-full pl-4 opacity-60 hover:opacity-100 focus:opacity:100 focus:bg-gray-600 focus:border-gray-400 focus:outline-0 transition-all ease-in-out duration-300' placeholder='Pencarian'></input>
              </div>
            </div>
            <div className='w-full h-full flex overflow-auto'>
              <div className='w-full h-full flex flex-col justify-end items-start overflow-auto'>
                {
                  indexSlide === 0?
                  <>
                    <ContentDjawatan onChangeAutoplay={onChangeAutoplay}/>
                  </>
                  :indexSlide === 1?
                  <>
                    <ContentIjen onChangeAutoplay={onChangeAutoplay}/>
                  </>
                  :
                  <>
                    <ContentRedisland onChangeAutoplay={onChangeAutoplay}/>
                  </>
                }
                
              </div>
              <div className='w-1/2 h-full flex flex-col justify-end items-end'>
                <div className='w-full h-42 mb-10'>
                <Swiper
                   effect={"coverflow"}
                   grabCursor={true}
                   centeredSlides={true}
                   slidesPerView={"auto"}
                   autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                   coverflowEffect={{
                     rotate: 0,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                   }}
                   pagination={true}
                   modules={[EffectCoverflow, Pagination, Autoplay]}
                   className="mySwiper"
                  onSlideChange={(e) => setIndexSlide(e.realIndex)}
                  onSwiper={setSwiperRef}
                >
                  <SwiperSlide className='rounded-xl'>
                    <div className="bg-[url('./assets/img/djawatan.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full rounded-xl" ></div>
                  </SwiperSlide>
                  <SwiperSlide className='rounded-xl'>
                    <div className="bg-[url('./assets/img/ijen.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full rounded-xl" ></div>
                  </SwiperSlide>
                  <SwiperSlide className='rounded-xl'>
                    <div className="bg-[url('./assets/img/red_island.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full rounded-xl" ></div>
                  </SwiperSlide>
                </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black opacity-70 bg-cover bg-bottom fixed top-0 left-0 w-full h-full z-10" ></div>
          {
            indexSlide === 0?
            <div className="bg-[url('./assets/img/djawatan.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full" ></div>
            :indexSlide === 1?
            <div className="bg-[url('./assets/img/ijen.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full" ></div>
            :
            <div className="bg-[url('./assets/img/red_island.jpg')] bg-cover bg-bottom fixed top-0 left-0 w-full h-full" ></div>
          }
        </div>
    </>
  )
}

export default App

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import './slider.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const SwipperComponent = () => {
  return (
    <section className='container section' id='gallary'>
        <h2 className='section__title'>Gallery</h2>

    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='blog__container grid'
      navigation
      autoplay={{delay: 2000}}
    >
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/D5622AQEN0XtAuDDbCA/feedshare-shrink_1280/feedshare-shrink_1280/0/1705372981059?e=1729123200&v=beta&t=3RaMFqemK366h89Y3xpSpCmymdv2xf3HHaH38xwHEhM" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/D4D22AQGVuQNTGw5o2g/feedshare-shrink_800/feedshare-shrink_800/0/1697567201871?e=1729123200&v=beta&t=xNv1MgzRo2bs7xEXs1-4pO2XJUME8538An4qcCCw_VI" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/D4D22AQGXWWIqFbO2Lw/feedshare-shrink_480/feedshare-shrink_480/0/1695504020502?e=1729123200&v=beta&t=TRpgELg23RgMvJwcTrVhXCpsFICeKJkByugpYHwVuSI" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/D4D22AQGJ96YCv-uUcg/feedshare-shrink_480/feedshare-shrink_480/0/1680856285776?e=1729123200&v=beta&t=N6X7Zs3j6s26t_hH3SLMlWZhNTFVThHHe7-YgIYG0Jw" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/C4D22AQF3G8mgGGOCUQ/feedshare-shrink_480/feedshare-shrink_480/0/1678473262226?e=1729123200&v=beta&t=Ty0j9hImuX_U_Ewt980Ktz9A_rRI10uccXTdyESOPaY" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/D4D22AQFXSOF_gzsDAA/feedshare-shrink_480/feedshare-shrink_480/0/1679816449179?e=1729123200&v=beta&t=T-NQOjlH2TdHdiYrmE-GglvcpXaGz8K_rFgcFp0d8K0" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/C4D22AQG7ADsOUX3gHw/feedshare-shrink_480/feedshare-shrink_480/0/1666971011057?e=1729123200&v=beta&t=5x6FaAM5-_qL7xpz5Zka853Gv-HlAjQ6miHaTdbia_Y" alt='' className='slider__img'/></a></SwiperSlide>
      <SwiperSlide className='slider__card'><a href='#'><img src="https://media.licdn.com/dms/image/v2/C4D22AQGDpw3aMWlMqg/feedshare-shrink_480/feedshare-shrink_480/0/1656000758259?e=1729123200&v=beta&t=x8yMifwHaatHiaJPdc2TopYEsozt1FGLse3jK97jWks" alt='' className='slider__img'/></a></SwiperSlide>
    </Swiper>
    </section>
  );
};

export default SwipperComponent;
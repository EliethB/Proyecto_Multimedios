
import React from 'react';
import 'swiper/swiper-bundle.min.css';
import "../CarrouselStyle.css";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from 'swiper';



function CarrouselComponent(){
    
  const images = [
'https://hips.hearstapps.com/dm.h-cdn.co/assets/17/31/shakira-03.jpg?crop=1.00xw:0.752xh;0,0&resize=640:*',
'https://i.pinimg.com/236x/c4/3b/58/c43b58e1507a5f6259d78e9e89c3e163.jpg',
'https://i.pinimg.com/236x/8a/20/08/8a20086feabef7317d3c427694b317f6.jpg',
'https://hips.hearstapps.com/dm.h-cdn.co/assets/17/31/shakira-03.jpg?crop=1.00xw:0.752xh;0,0&resize=640:*',
'https://los40.com/los40/imagenes/2017/02/08/album/1486575611_816191_1486576381_album_normal.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSEbfuyf1nFTeaJ-VncmKZbx2nINKZTxgsg&usqp=CAU'
  ];
  return (
    <div className="container">
      <h2>Recomendados</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter:true,
          disableOnInteraction:false,
        }}
        modules={[Autoplay]}
      >
        {images.slice(0, 6).map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CarrouselComponent
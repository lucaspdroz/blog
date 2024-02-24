
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from '../../assets/img/blog-placeholder-1.jpg'
import image2 from '../../assets/img/blog-placeholder-2.jpg'
import image3 from '../../assets/img/blog-placeholder-3.jpg'
import image4 from '../../assets/img/blog-placeholder-4.jpg'
import  '../../styles/embla.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
    const images = [image1, image2, image3, image4]
    return (
        <Swiper
            spaceBetween={80}
            centeredSlides
            autoplay={{
                delay: 25 * 100,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={item.src} alt="any" />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    )
}

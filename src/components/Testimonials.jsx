import testimonials from '../data/testimonials';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div id='testimonials' className='w-full overflow-hidden dark:bg-gray-100 dark:text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols sm:grid-cols-1 gap-8 px-4'>
          <div className='text-center md:mt-20 md:ml-10 text-xl md:text-left'>
            <p>What how clients are saying.</p>
          </div>
          <div className='md:ml-[20rem]'>          
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-[340px] mx-auto"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide className="md:mt-1 p-2">
                  <figure className="grid rounded-xl p-3 shadow-lg shadow-gray-200">
                    <img className="w-32 h-32 rounded-full mx-auto" src={testimonial.image} alt="" />
                    <div className="pt-4 text-center space-y-3">
                      
                      <blockquote className='mx-auto'>
                          <p className="text-lg font-semibold">
                          {testimonial.text}
                          </p>
                      </blockquote>
                      <figcaption className="font-medium text-gray-500 dark:text-gray-800">
                          <div className="">
                          {testimonial.name}
                          </div>
                          <div className="mb-2">
                          {testimonial.position}
                          </div>
                      </figcaption>
                    </div>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
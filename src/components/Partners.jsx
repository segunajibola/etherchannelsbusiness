import clients from "../data/clients";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="w-full overflow-hidden dark:bg-gray-100 dark:text-gray-800"
    >
      <div className="grid grid-cols sm:grid-cols-1 justify-center gap-8 px-2 pt-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="w-[430px] sm:w-[30rem] mx-auto md:w-[40rem]"
        >
          {clients
            .filter((item, index) => index > 4)
            .map((clients) => (
              <SwiperSlide className="md:my-2 p-2">
                <figure className="p-3 text-center">
                  <img
                    className="w-48 h-48 mx-auto"
                    src={clients.image}
                    alt=""
                  />
                  <p className="text-xl my-2">{clients.name}</p>
                </figure>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

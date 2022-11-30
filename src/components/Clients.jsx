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
              // showsPagination={false}
              pagination={{
                clickable: false,
                // hiddenClass: "swiper-pagination-hidden",
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-[430px] sm:w-[30rem] mx-auto md:w-[40rem]"
            >
              {clients.map((clients) => (
                <SwiperSlide className="md:my-5 p-2">
                  <figure className="p-3 text-center">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src={clients.image}
                      alt=""
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

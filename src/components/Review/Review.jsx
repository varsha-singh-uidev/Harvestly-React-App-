import React from "react";
import Header from "../Header/Header";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
const Review = () => {
  return (
    <>
      <div className="mt-[80px]">
        <div className="max-w-[1300px] mx-auto px-4">
          <div>
            <Header first="Voices of" last="Trust" />
          </div>

          {/* review tab div */}
          <div className="flex justify-end mt-3 py-6 gap-x-3">
            <button className="custom-prev w-10 h-10 py-[10px] flex justify-center rounded-lg hover:shadow-md bg-zinc-100 hover:bg-gradient-to-b hover:from-[#78df97e6] hover:to-[#25d55d]">
              <img
                className="rotate-z-180 w-[20px]"
                src="/ReviewPerson/next-page.png"
                alt=""
              />
            </button>
            <button className="custom-next w-10 h-10 py-[10px] flex justify-center rounded-lg hover:shadow-md bg-zinc-100 hover:bg-gradient-to-b hover:from-[#78df97e6] hover:to-[#25d55d]">
              <img
                className="w-[20px]"
                src="/ReviewPerson/next-page.png"
                alt=""
              />
            </button>
          </div>
          {/* swipper card */}
          
            <Swiper 
            navigation={{
              nextEl : ".custom-next",
              prevEl : ".custom-prev"
            }} 
            loop={true}
            breakpoints={{
              640 : {slidesPerView: 1, spaceBetween: 20},
              768 : {slidesPerView: 2, spaceBetween: 30},
              1024 : {slidesPerView: 3, spaceBetween: 60},
              1280 : {slidesPerView: 3, spaceBetween: 80}
            }}
            modules={[Navigation]} 
            className="mySwiper">
            {review.map((card) => (
              <SwiperSlide key={card.id}>
                <ReviewCard card={card}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;

const review = [
  {
  id: 1,
  name: "Ethan Miller",
  profession: "Fitness Coach",
  rating: 5,
  para: "I love how Harvestly makes healthy eating easy. The product is always fresh it's exactly what I recommend to my clients who want to eat fresh.",
  image: "/ReviewPerson/boy1.png"
  },
  {
  id: 2,
  name: "Liam Rodriguez",
  profession: "Chef & Food Blogger",
  rating: 5,
  para: "Cooking with Harvestly's organic ingredients has been a game changer. You can literally taste the difference in quality and freshness.",
  image: "/ReviewPerson/boy2.png"
  },
  {
  id: 3,
  name: "Noah Patel",
  profession: "Nutritionist",
  rating: 4,
  para: "Their selection of organic fruits and vegetables is top-notch. It’s great to finally have a service that prioritizes both health and sustainability.",
  image: "/ReviewPerson/boy3.png"
  },
  {
  id: 4,
  name: "Mason Carter",
  profession: "Startup Founder",
  rating: 4,
  para: "Balancing work and healthy eating used to be hard, but Harvestly changed that. Fresh, clean, and always reliable I'm impressed.",
  image: "/ReviewPerson/boy4.png"
  },
  {
  id: 5,
  name: "Sophia Brown",
  profession: "Yoga Instructor",
  rating: 5,
  para: "I’m obsessed with Harvestly! Every order feels like it's straight from the farm. It aligns perfectly with my focus on mindful, healthy living.",
  image: "/ReviewPerson/girl1.png"
  },
  {
  id: 6,
  name: "Olivia Green",
  profession: "Nutrition Blogger",
  rating: 5,
  para: "Harvestly delivers more than groceries it delivers peace of mind. Everything is fresh, responsibly sourced, and beautifully packed.",
  image: "/ReviewPerson/girl2.png"
  }
]
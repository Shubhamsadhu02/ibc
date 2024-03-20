import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";

export default function AboutUsCards() {
  return (
    <>
      <div className="about-container mt-15">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          className="homeSlider"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}>
          <SwiperSlide>
            <div className="about-box">
              <div className="about-img">
                <img src="/images/Home/about1.png" alt="" />
              </div>
              <div className="about-content">
                <div className="about-flag mb-4">
                  <img src="/images/Home/USflag.png" alt="" />
                </div>
                <div className="about-list">
                  <ul>
                    <li>Develop cutting edge capabilities</li>
                    <li>Learn from mature high-tech industry ecosystem</li>
                    <li>Gigascale manufacturing in US</li>
                    <li>
                      Introduce greater circularity in EV battery supply chain
                      with novel cell design and rapid, reversible pack
                      manufacturing
                    </li>
                    <li>
                      {" "}
                      Support domestic manufacturing and job creation for
                      disadvantaged communities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-box">
              <div className="about-img">
                <img src="/images/Home/about2.png" alt="" />
              </div>
              <div className="about-content">
                <div className="about-flag mb-4">
                  <img src="/images/Home/KRflag.png" alt="" />
                </div>
                <div className="about-list">
                  <ul>
                    <li>Pilot plant in Korea</li>
                    <li>Closer to the supply chain</li>
                    <li>Work closely with supply chain partners</li>
                    <li>
                      Pilot cells to be used for validation and supply chain
                      service platform
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-box">
              <div className="about-img">
                <img src="/images/Home/about3.png" alt="" />
              </div>
              <div className="about-content">
                <div className="about-flag mb-4">
                  <img src="/images/Home/INflag.png" alt="" />
                </div>
                <div className="about-list">
                  <ul>
                    <li>Gigascale manufacturing in India</li>
                    <li>
                      Leverage world’s largest affordable engineering &
                      manufacturing talent
                    </li>
                    <li>
                      Support domestic manufacturing and Li-Ion Cell
                      manufacturing leadership
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

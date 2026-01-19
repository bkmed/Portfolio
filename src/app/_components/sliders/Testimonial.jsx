"use client";

import { useEffect, useState } from "react";
import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sliders/testimonial";

const TestimonialSlider = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = [1, 2, 3, 4, 5];

  if (!mounted) return null;

  return (
    <>
      {/* testimonials */}
      <div className="container-fluid">
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4 dangerouslySetInnerHTML={{ __html: Data.title }} />
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-12">
            {/* slider container */}
            <Swiper
              {...SliderProps.milReviewsSlider}
              className="swiper-container art-testimonial-slider"
            >
              {Data.items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>
                  {/* testimonial */}
                  <div className="art-a art-testimonial">
                    {/* testimonial body */}
                    <div className="testimonial-body">
                      {/* photo */}
                      {item.image && (
                        <img className="art-testimonial-face" src={item.image} alt={item.name} />
                      )}
                      {/* name */}
                      <h5>{item.name}</h5>
                      <div className="art-el-suptitle mb-15">{item.role}</div>
                      {/* text */}
                      {item.text && <div className="mb-15">{item.text}</div>}
                      {item.contact && (
                        <a
                          className="art-link art-color-link art-w-chevron"
                          href={item.contact}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {"Linkedin"}
                        </a>
                      )}
                    </div>
                    {/* testimonial body end */}
                    {/* testimonial footer */}
                    {item.rating && (
                      <div className="art-testimonial-footer">
                        <div className="art-left-side">
                          {/* star rate */}
                          <ul className="art-star-rate">
                            {stars.slice(0, item.rating).map((star, star_key) => (
                              <li key={`testimonial-slider-item-${key}-star-${star_key}`}>
                                <i className="fas fa-star"></i>
                              </li>
                            ))}
                          </ul>
                          {/* star rate end */}
                        </div>
                        <div className="art-right-side"></div>
                      </div>
                    )}
                    {/* testimonial footer end */}
                  </div>
                  {/* testimonial end */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* col end */}

          {/* col */}
          <div className="col-lg-12">
            {/* slider navigation */}
            <div className="art-slider-navigation art-testimonial-slider-navigation">
              {/* left side */}
              <div className="art-sn-left">
                {/* slider pagination */}
                <div className="swiper-pagination"></div>
              </div>
              {/* left side end */}

              {/* right side */}
              <div className="art-sn-right">
                {/* slider navigation */}
                <div className="art-slider-nav-frame">
                  {/* prev */}
                  <div className="art-slider-nav art-testi-swiper-prev">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  {/* next */}
                  <div className="art-slider-nav art-testi-swiper-next">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
                {/* slider navigation */}
              </div>
              {/* right side end */}
            </div>
            {/* slider navigation end */}
          </div>
          {/* col end */}
        </div>
        {/* row end */}
      </div>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;

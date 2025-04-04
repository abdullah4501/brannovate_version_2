import React, { useEffect } from 'react';
// Import Swiper from the bundle entry point so that all modules are included
import SwiperCore from 'swiper/bundle';
import 'swiper/css/bundle';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 50,
      duration: 600,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });

    // Initialize the first Swiper instance for normal direction
    new SwiperCore('.review-rolling-carousel', {
      loop: true,
      freeMode: true, // Correct property name is freeMode
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 10000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false
      },
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 }
      }
    });

    // Initialize the second Swiper instance for reverse direction
    new SwiperCore('.review-rolling-carousel-reversed', {
      loop: true,
      freeMode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 8000,
      autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false
      },
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 }
      }
    });

    // Cleanup function (if needed)
    return () => {
      // You can destroy Swiper instances here if required
    };
  }, []);

  // Review data
  const reviews = [
    {
      id: 1,
      name: "Wade Warrent",
      role: "Marketing Coordinator",
      text: "This is the best thing that has happened to my team in a while! Makes post text something we barely need to think about!",
      image: "src/assets/images/review/1.png"
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Content Creator",
      text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
      image: "src/assets/images/review/2.png"
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "Product Designer",
      text: "Comfortable to wear for long periods of time. The battery life is impressive, providing up to 8 hours of listening time on a single charge. The earbuds are also sweat.",
      image: "src/assets/images/review/3.png"
    },
    {
      id: 4,
      name: "Guy Hawkins",
      role: "Digital Marketer",
      text: "Through my interactions with users, I have seen how technology has made life easier and more convenient for people.",
      image: "src/assets/images/review/4.png"
    },
    {
      id: 5,
      name: "Bessie Cooper",
      role: "SEO Expert",
      text: "I feel proud to be part of this technological advancement and to be able to help people in their day-to-day activities. It is truly amazing how technology has the power to connect",
      image: "src/assets/images/review/1.png"
    }
  ];

  // Star SVG component
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 14" className="w-4 h-4 text-primary">
      <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
    </svg>
  );

  // Review card component
  const ReviewCard = ({ review }) => (
    <div className="review-card rounded h-full p-6 border bg-lite-blue border-lite-blue-4">
      <div className="d-flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-circle overflow-hidden">
          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="mb-1">{review.name}</h6>
          <p className="mb-0 fs-sm">{review.role}</p>
        </div>
      </div>
      <div>
        <div className="stars d-flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="review-text mb-0">{review.text}</p>
      </div>
    </div>
  );

  return (
    <section className="overflow-hidden pt-20 pt-lg-30 pb-10 pb-lg-15">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-9">
            <div className="text-center">
              <h1 data-aos="fade-up-sm" data-aos-delay="50">
                <span className="text-primary">GenAI.</span>
                Received <img src="src/assets/images/icons/star.png" alt="star" /> 4.8/5 Stars in Over 10,000+ Reviews.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* First Swiper */}
      <div className="review-rolling-carousel-container">
        <div className="swiper review-rolling-carousel">
          <div className="swiper-wrapper rolling-carousel-wrapper">
            {reviews.map((review) => (
              <div className="swiper-slide h-auto" key={`first-${review.id}`}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Swiper (reversed) */}
      <div className="review-rolling-carousel-container-reversed mt-6">
        <div className="swiper review-rolling-carousel-reversed">
          <div className="swiper-wrapper rolling-carousel-wrapper">
            {reviews.map((review) => (
              <div className="swiper-slide h-auto" key={`second-${review.id}`}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

import React, { useEffect } from 'react';
// Import Swiper from the bundle entry point so that all modules are included
import SwiperCore from 'swiper/bundle';
import 'swiper/css/bundle';

import AOS from 'aos';
import 'aos/dist/aos.css';
import star from '../../assets/images/icons/star.png';
import image from '../../assets/images/review/1.png';
import image2 from '../../assets/images/review/2.png';
import image3 from '../../assets/images/review/3.png';
import image4 from '../../assets/images/review/4.png';
import image5 from '../../assets/images/review/5.png';

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
      text: "Brannovate’s AI-powered LinkedIn Agent transformed the way we approach content creation. It saved us so much time by instantly generating posts on trending topics, and the ability to customize them with our voice made them feel authentic. Truly a game-changer!",
      image: image
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Content Creator",
      text: "With Brannovate’s AI tool, creating high-quality LinkedIn posts has never been easier. The trending topics feature allowed us to stay ahead of the curve, and the instant post generation helped us engage with our audience more consistently. Highly recommend it!",
      image: image2
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "Product Designer",
      text: "I’m blown away by the ease of use of Brannovate’s AI. I provided a simple idea, and the tool created a professional, compelling post that perfectly aligned with our brand’s voice. It’s a must-have for anyone serious about building a strong LinkedIn presence.",
      image: image3
    },
    {
      id: 4,
      name: "Guy Hawkins",
      role: "Digital Marketer",
      text: "Brannovate’s AI tool not only generates top-tier LinkedIn content but also gives us the ability to schedule and manage posts with ease. The real-time preview feature ensures we’re always confident in our posts before going live. This tool is essential for marketing teams.",
      image: image4
    },
    {
      id: 5,
      name: "Bessie Cooper",
      role: "SEO Expert",
      text: "As an SEO expert, content quality and consistency are key, and Brannovate’s AI agent delivers both. I’m able to effortlessly generate posts that are tailored to my audience, and I’m impressed by how it helps with SEO optimization, too!",
      image: image
    },
    {
      id: 6,
      name: "Jessica Monroe",
      role: "Marketing Expert",
      text: "Brannovate’s AI tool revolutionized the way we manage LinkedIn content. From one-click post generation to easy scheduling, the platform makes it so much easier to maintain a strong and consistent presence. The posts don’t feel robotic—they’re tailored to our voice, and that’s a huge win.",
      image: image5
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
    <section className="overflow-hidden py-10 py-lg-15">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-9">
            <div className="text-center">
              <h2 data-aos="fade-up-sm" data-aos-delay="50">
                <span className="text-primary">Brannovate </span>
                 Received <img src={star} alt="star" /> 4.9/5 Stars in Over 10,000+ Reviews.
              </h2>
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

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
      text: "We needed an app to streamline our operations, and Brannovate was perfect for the job. They delivered a powerful app with fantastic features, and our feedback was incorporated seamlessly. Couldn’t be happier!",
      image: image
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Content Creator",
      text: "Elevate Brannovate was phenomenal. They were able to develop a robust e-commerce platform for us that has transformed our sales. Their studio team also created beautiful brand visuals. Their attention to detail is impeccable!",
      image: image2
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "Product Designer",
      text: "From start to finish, working with Brannovate was smooth and efficient. They kept us updated throughout the project, and the final product surpassed our expectations. Would definitely recommend them!",
      image: image3
    },
    {
      id: 4,
      name: "Guy Hawkins",
      role: "Digital Marketer",
      text: "Brannovate exceeded our expectations in every way. Their team turned our vision into a reality with an intuitive website and a sleek app. They were incredibly responsive, and the entire project stayed on schedule. I’d recommend them without hesitation",
      image: image4
    },
    {
      id: 5,
      name: "Bessie Cooper",
      role: "SEO Expert",
      text: "We had a complex project and needed expertise to pull it off. Brannovate team not only delivered but also helped us enhance our original ideas. The app they developed is high-performing and very user-friendly. Great service overall!",
      image: image
    },
    {
      id: 6,
      name: "Jessica Monroe",
      role: "Marketing Expert",
      text: "Working with Brannovate was a game-changer for our business. They designed a beautiful website that captures our brand perfectly, and their studio services added that extra touch to our promotional materials. Amazing team and exceptional quality.",
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
    <section className="overflow-hidden pt-20 pt-lg-30 pb-10 pb-lg-15">
      <div className="container">
        <div className="row justify-center mb-18">
          <div className="col-lg-9">
            <div className="text-center">
              <h1 data-aos="fade-up-sm" data-aos-delay="50">
                <span className="text-primary">Brannovate </span>
                 Received <img src={star} alt="star" /> 4.9/5 Stars in Over 10,000+ Reviews.
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

import React from 'react';
import { FiTrendingUp } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import { RxTarget } from "react-icons/rx";
import { RiEditBoxLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { TbTableSpark } from "react-icons/tb";
import { HiMiniArrowLongRight } from "react-icons/hi2";


const FeaturesSection = () => {
  return (
    <section className="py-10 py-lg-15" id="section-about">
      <div className="container">
        <div className="text-center mb-18">
          <h1 className="feature-one__title mb-0" data-aos="fade-up-sm" data-aos-delay="50">
          What our AI Agent can do for you<br className="d-none d-lg-block" />
          
          </h1>
        </div>

        <div className="row g-6 g-xl-14">
          {features.map((feature, index) => (
            <div className="col-lg-4" data-aos="fade-up-sm" data-aos-delay={200 + index * 50} key={index}>
              <div className="d-flex flex-column gap-6 flex-lg-row">
                <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-primary bg-opacity-10 text-primary border-primary border-opacity-25">
                  {feature.icon}
                </div>
                <div className="content">
                  <h4 className="mb-4">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="https://ai.brannovate.com/sign-up" className="btn btn-primary">
            Try Now - It's Free to Start <HiMiniArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Stay Ahead With Trending Topics",
    description:
      "Get top-performing topics across 7+ categories from 28+ countries — always fresh, always relevant. Pick one. Done.",
    icon: (
      <FiTrendingUp size={20}/>
    ),
  },
  {
    title: "Create Magnetic Posts — Instantly",
    description:
      "One click = one polished, professional post. No brainstorming. No writer’s block. No fluff.",
    icon: (
      <LuSparkles size={20}/>
    ),
  },
  {
    title: "Tailor Content to Reflect You",
    description:
      "Tell the agent your thoughts or personal perspective — and watch your post get rewritten with your voice, your ideas, your tone.",
    icon: (
      <RxTarget size={20}/>
    ),
  },
  {
    title: "Edit & Format Like a Pro",
    description:
      "Want to tweak it? Add emojis, bullet points, or bold highlights? You’re in full control of how it looks.",
    icon: (
      <RiEditBoxLine size={20}/>
    ),
  },
  {
    title: "Got an Idea? Say It.",
    description:
      "Have a topic in mind? Just tell the agent — it'll shape your raw thought into a polished, engaging post that stands out.",
    icon: (
      <FaRegMessage size={20}/>
    ),
  },
  {
    title: "Posts That Don't Feel AI-Written",
    description:
      "Inspired by the top LinkedIn voices in your industry, your content is generated to feel real, relevant, and relatable. No robotic text — only posts worth reading.",
    icon: (
      <TbTableSpark size={20}/>
    ),
  },
];

export default FeaturesSection;

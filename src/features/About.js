import React, { Fragment } from "react";
import "./About.css";
// import App from "../App";
import { Link } from "react-router-dom";

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function About() {
  return (
    
    <Fragment>
     
      <span
        className="bg-slate-950 self-stretch m-auto bg-cover bg-no-repat flex w-full flex-col items-center px-20 py-12 max-md:max-w-full max-md:px-5"
        style={{
          backgroundImage: `url("/img/Affiliate%20hero%20section.svg")`,
        }}
      >
        <div className="text-sky-400 text-center text-5xl font-bold w-[982px] mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-[70px]">
          “Elevate Your Digital Horizon with Ibizo: Where Innovation Meets
          Growth”
        </div>
        <div className="text-neutral-100 text-center text-xl font-medium w-[1016px] mt-5 mb-28 max-md:max-w-full max-md:mb-10">
          At Ibizo Technologies, we extend a warm invitation to experienced
          performance marketers like you to explore new dimensions of success.
          Our data-driven strategies, AI-powered tools, and advanced analytics
          are your gateway to unparalleled ROI and a thriving digital future.
        </div>
      </span>
      <div className="self-center w-full max-w-[100%]  mt-40 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-900 text-5xl font-medium leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                About Us
              </div>
              <div className="text-zinc-700 text-xl font-normal capitalize mt-5 max-md:max-w-full">
                Get Ready To Welcome a holistic suite of services, combining
                data-driven strategies, advanced targeting techniques, and
                seamless integration of cutting-edge analytics, AI-powered
                tools, and multi-channel strategies. This orchestration
                encompasses audience segmentation, ad campaign optimisation,
                content personalisation, conversion rate optimisation, SEM
                management, affiliate marketing, social media advertising, email
                marketing automation, and robust analytics and reporting. Ibizo
                will maximises ROI, adapts to industry dynamics, optimises
                marketing budgets, and propels businesses .
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="/image/teamA.svg"
              className="aspect-[1.26] object-contain object-center w-full h-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 self-stretch flex w-full justify-between gap-0 mt-28 pr-20 pb-12 items-center max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
        <div className="p-6 shrink-0 h-[237px] flex-col" />
        <span className="flex grow basis-[0%] flex-col items-start max-md:max-w-full">
          <div className="flex w-[132px] shrink-0 h-[107px] flex-col ml-10 rounded-[50%] max-md:ml-2.5" />
          <div className="self-center  max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch  w-[41%] max-md:w-full max-md:ml-0">
                <div className="text-neutral-900 text-5xl font-medium leading-[58px] my-auto max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                  Driving success<br/>
                   through innovation
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-neutral-500 text-lg font-normal max-md:max-w-full max-md:mt-6">
                  Performance marketing harnesses granular insights to identify
                  high-potential segments, fine-tunes campaigns, and efficiently
                  allocates resources, accelerating sales cycles. It synergies
                  cutting-edge analytics, AI-driven tools, and precise targeting
                  to amplify the visibility of innovative ideas, acting as a
                  catalyst for idea execution and sales acceleration. <br />
                  <br />
                  This approach enhances sales acceleration by seamlessly
                  guiding prospects through the sales pipeline, ensuring
                  efficient lead progression. The result is a dynamic interplay
                  of creativity and technical precision, maximising ROI and
                  propelling sales with unparalleled effectiveness in the
                  digital landscape
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div className="container">
        <div class="text-neutral-900 text-5xl font-medium text-start mt-5 max-w-full mb-4">
          Let’s meet <span class="text-neutral-900">our team</span>
        </div>

        <div class="text-neutral-500 text-lg text-start mb-5">
          Introducing Our Performance Marketing Maestros, each member is
          seasoned in performance marketing intricacies to bring you
          data-infused success.
        </div>

        <img
          loading="lazy"
          src="/image/A.svg"
          alt="Team Photo"
          class="img-fluid d-block w-full mb-5"
        />
      </div>
      <div className="text-[#171717] text-center text-5xl font-medium leading-10 tracking-tighter self-center mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        Frequently asked questions
      </div>
      <div className="text-neutral-500 text-center text-xl leading-8 self-center mt-5 max-md:max-w-full">
        Everything you need to know about the product and billing.
      </div>
     
      <div className="container">
      <div class="bg-white divide-y divide-gray-200"id="accordion-in">
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            Is there a free trial available?
            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
        Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible..
        </p>
    </details>
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            Can I change my plan later?
            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details>
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            What is your cancellation policy?
            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details>
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            Can other info be added to an invoice?

            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details>
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            How does billing work?
            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details>
    <details class="p-4 group" close>
        <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-[#171717]">
            How do I change my account email?
            </h2>

            <span class="relative flex-shrink-0 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 m-auto w-8 h-8 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 w-12 h-12 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p class="mt-4 leading-relaxed font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
        </p>
    </details>

    
</div>
</div>

      {/* <div className="unsplashsyto3xs06fu-parent">
        <img
          className="unsplashsyto3xs06fu-icon"
          alt=""
          src="/image/4.svg"
        />
        <div className="elevate-your-digital-horizon-w-parent">
          <b className="elevate-your-digital">
            “Elevate Your Digital Horizon with Ibizo: Where Innovation Meets
            Growth”
          </b>
          <div className="at-ibizo-technologies">
            At Ibizo Technologies, we extend a warm invitation to experienced
            performance marketers like you to explore new dimensions of success.
            Our data-driven strategies, AI-powered tools, and advanced analytics
            are your gateway to unparalleled ROI and a thriving digital future.
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="lets-meet-our-team-parent">
          <div className="about-us3">About Us</div>
          <div className="get-ready-to">
            Get Ready To Welcome a holistic suite of services, combining
            data-driven strategies, advanced targeting techniques, and seamless
            integration of cutting-edge analytics, AI-powered tools, and
            multi-channel strategies. This orchestration encompasses audience
            segmentation, ad campaign optimisation, content personalisation,
            conversion rate optimisation, SEM management, affiliate marketing,
            social media advertising, email marketing automation, and robust
            analytics and reporting. Ibizo will maximises ROI, adapts to
            industry dynamics, optimises marketing budgets, and propels
            businesses to their full digital potential in the ever-evolving
            digital landscape, firmly positioning them at the forefront of
            industry advancements.
          </div>
        </div>
        <img
          className="teamwork-of-young-people-with"
          alt=""
          src="/image/3.svg"
        />
      </div>
      <div className="group-parent">
        <img className="frame-item" alt="" src="/image/circle.svg" />
        <div className="driving-success-through-innova-parent">
          <div className="driving-success-through">
            Driving success <br/>through innovation
          </div>
          <div className="performance-marketing-harnesse-container">
            <p className="want-to-know">{`Performance marketing harnesses granular insights to identify high-potential segments, fine-tunes campaigns, and efficiently allocates resources, accelerating sales cycles. It synergies cutting-edge analytics, AI-driven tools, and precise targeting to amplify the visibility of innovative ideas, acting as a catalyst for idea execution and sales acceleration. `}</p>
            <p className="want-to-know">&nbsp;</p>
            <p className="want-to-know">
              This approach enhances sales acceleration by seamlessly guiding
              prospects through the sales pipeline, ensuring efficient lead
              progression. The result is a dynamic interplay of creativity and
              technical precision, maximising ROI and propelling sales with
              unparalleled effectiveness in the digital landscape
            </p>
          </div>
        </div>
        <img className="frame-inner" alt="" src="/image/circle.svg" />
      </div>

       <div className="frame-parent">
        <div className="lets-meet-our-team-parent">
          <div className="lets-meet-our">Let’s meet our team</div>
          <div className="introducing-our-performance">
            Introducing Our Performance Marketing Maestros, each member is
            seasoned in performance marketing intricacies to bring you
            data-infused success.
          </div>
        </div>
        <img
          className="unsplashof-m3hmsoaa-icon"
          alt=""
          src="/image/A.svg"
        />
      </div>
      
    
      <div className="heading-parent">
        <div className="heading">Frequently asked questions</div>
        <div className="supporting-text">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div className="faq-item">
        <div className="content">
          <div className="text-and-supporting-text">
            <div className="text">Is there a free trial available?</div>
            <div className="supporting-text1">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </div>
          </div>
          
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/image/3.svg" />
          </div>
        </div>
      </div>
      
      <div className="faq-item1">
        <div className="divider" />
        <div className="content">
          <div className="text-and-supporting-text1">
            <div className="text">Can I change my plan later?</div>
          </div>
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/pluscircle.svg" />
          </div>
        </div>
      </div>
      
      <div className="faq-item2">
        <div className="divider" />
        <div className="content">
          <div className="text-and-supporting-text1">
            <div className="text">What is your cancellation policy?</div>
          </div>
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/pluscircle1.svg" />
          </div>
        </div>
      </div>
      <div className="faq-item3">
        <div className="divider" />
        <div className="content">
          <div className="text-and-supporting-text1">
            <div className="text">Can other info be added to an invoice?</div>
          </div>
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/pluscircle2.svg" />
          </div>
        </div>
      </div>
      <div className="faq-item4">
        <div className="divider" />
        <div className="content">
          <div className="text-and-supporting-text1">
            <div className="text4">How does billing work?</div>
          </div>
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/pluscircle3.svg" />
          </div>
        </div>
      </div>
      <div className="faq-item5">
        <div className="divider" />
        <div className="content">
          <div className="text-and-supporting-text1">
            <div className="text4">How do I change my account email?</div>
          </div>
          <div className="icon-wrap">
            <img className="minus-circle-icon" alt="" src="/pluscircle4.svg" />
          </div>
        </div>
      </div>
       */}

      {/* 
    <div className="container-fluid rectangle-group">
        <div className="row group-inner">
          <div className="col-md-6">
            <div className="ibizo-technologies-all-rights-parent">
              <div className="ibizo-technologies-all">
                @2023 Ibizo Technologies. All rights reserved.
              </div>
              <div className="partner-contribute">{`Partner & Contribute`}</div>
              <div className="company">
                <div className="about-us2">About us</div>
                <div className="careers">Careers</div>
                <div className="contact-us1">Contact us</div>
                <div className="news-blog">{`News & Blog`}</div>
                <div className="company1">Company</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="solution">
              <div className="learn">Learn</div>
              <div className="our-product">Our Product</div>
              <div className="tutorials">Tutorials</div>
              <div className="our-service">Our Service</div>
              <div className="best-features">Best Features</div>
            </div>
            <div className="left">
              <div className="want-to-know-container">
                <p className="want-to-know">{`Want to know more about us!!!! `}</p>
                <p className="want-to-know">Let’s connect</p>
              </div>
              <div className="subscribe-input">
                <div className="powering-growth-in-container">
                  <p className="want-to-know">{`Powering growth in digital `}</p>
                  <p className="want-to-know">industry</p>
                </div>
                <div className="buttongo-parent">
                  <div className="buttongo">
                    <div className="base" />
                    <img className="icon" alt="" src="/image/3.svg" />
                  </div>
                  <div className="input">
                    <div className="base1" />
                    <div className="email-address">Email address</div>
                  </div>
                </div>
              </div>
              <img className="icon1" alt="" src="/image/4.svg" />
              <b className="get-in-touch">GET IN TOUCH</b>
            </div>
          </div>
        </div>
      </div>

                 */}
                 
    </Fragment>
    
  );
}


export default About;

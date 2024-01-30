import React, { Fragment } from "react";
import "./Home.css";

import App from "../App";
import { Link } from "react-router-dom";

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }


export function Home() {
  return (
    <Fragment>
     
      <span className="bg-white flex flex-col">
        <div className="bg-slate-950 self-stretch m-auto bg-cover bg-no-repat w-full pl-20 max-md:max-w-full max-md:pl-5 h-screen m-auto"
          style={{ backgroundImage: `url("/img/hero2.jpg")`}}
        
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mt-20">
            <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
              <span className="flex flex-col my-auto pr-11 pt-[100px] items-start max-md:max-w-[100%] max-md:mt-0 max-md:pr-5">
                <div className="justify-center text-sky-400 text-4xl self-stretch max-md:max-w-full">
                  <span className="font-medium text-zinc-100">
                    Track, manage and scale your
                  </span>{" "}
                  <span className="font-semibold text-sky-400">
                    partnership marketing campaigns
                  </span>
                </div>
                <div className="text-gray-200 text-xl font-medium self-stretch mt-9 max-md:max-w-full">
                  Driving business growth through innovative and impactful
                  digital products and services.
                </div>
                <Link to={'/Contact'} className="items-stretch bg-blue-600 flex w-[189px] max-w-full flex-col justify-center mt-16 px-7 py-2 rounded-sm max-md:mt-10 max-md:p-4 max-md:w-[100%">
                  <button className="items-stretch flex justify-between gap-1">
                    <div className="text-white text-center text-base font-medium grow whitespace-nowrap p-2">
                      Talk to expert
                    </div>
                    <img
                      loading="lazy"
                      src="/img/go.svg"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full p-auto"
                    />
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <span className="bg-white self-stretch flex w-full flex-col items-stretch mt-20 px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="ml-5 mr-5 mt-6 max-md:max-w-full max-md:mr-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                <div className="text-blue-500 text-4xl capitalize my-auto max-md:mt-10">
                  <span className="font-medium text-neutral-900">
                    Companies{" "}
                  </span>
                  <span className="font-semibold text-blue-500">
                    we Work with
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                <div className="text-zinc-600 text-xl capitalize max-md:max-w-full max-md:mt-6">
                  Embark on a transformative journey with us, where your triumph
                  is our paramount focus. Our proficiency lies in delivering
                  exceptional services through bespoke strategies, driving
                  unparalleled growth and satisfaction for businesses of all
                  sizes. By seamlessly integrating cutting-edge analytics,
                  AI-powered tools, and multi-channel strategies, we orchestrate
                  a meticulously designed symphony of campaigns.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 ml-5 mr-5 mt-24 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="/img/image%2091.svg"
              className="aspect-[6] object-contain object-center w-72 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/Company%20logo.svg"
              className="aspect-[3.21] object-contain object-center w-[154px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/image%2079%20(1).svg"
              className="aspect-[3.75] object-contain object-center w-[180px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/logo%20(5).svg"
              className="aspect-[2.08] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/image%2060.svg"
              className="aspect-[1.5] object-contain object-center w-[72px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="items-stretch flex justify-between gap-5 ml-5 mr-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
            <img
              loading="lazy"
              srcSet="/img/image%2076.svg"
              className="aspect-[3.19] object-contain object-center w-[153px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/image%2065.svg"
              className="aspect-[6.13] object-contain object-center w-[294px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/logo%20(7).svg"
              className="aspect-[1.67] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/image%2094.svg"
              className="aspect-[1.83] object-contain object-center w-[88px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="/img/image%2095.svg"
              className="aspect-[5.65] object-contain object-center w-[271px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </span>
        <div className="text-neutral-900 text-center text-5xl font-medium self-center max-w-[786px] mt-44 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Specialist in avoiding clients on financial challenges
        </div>
        <div className="text-gray-500 text-center text-xl self-center w-[1240px] mt-6 max-md:max-w-full">
          Ibizo serves as a financial bulwark for clients, mitigating a spectrum
          of challenges. It shields against the erraticities of ad spend
          optimisation, ensuring efficient allocation of resources. Moreover, it
          curtails the perils of ineffective targeting, averting wasteful
          expenditure, and delivers precise ROI measurement, empowering prudent
          financial decision-making.
        </div>
        <div className="self-center w-full max-w-[1298px] mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
              <div className="grow pt-2 pb-0.5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  {/* <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-center mt-1 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/img/Group%2021.svg"
                        className="aspect-square object-contain object-center h-full w-[88px] overflow-hidden"
                      />
                      <img
                        loading="lazy"
                        src="img/Group%2018.svg"
                        className="aspect-square object-contain object-center h-full w-[88px] overflow-hidden mt-36 max-md:mt-10"
                      />
                      <img
                        loading="lazy"
                        src="/img/Group%2017.svg"
                        className="aspect-square object-contain object-center h-full w-[88px] overflow-hidden mt-32 max-md:mt-10"
                      />
                    </div>
                  </div> */}
                  <div className="flex flex-col items-stretch w-[100%] max-md:w-full max-md:ml-0">
                    <span className="flex grow flex-col items-stretch max-md:mt-10 max-md:w-[100%] m-auto">
                      {/* <div className="text-gray-800 text-2xl font-medium">
                        Working Process
                      </div>
                      <div className="text-zinc-600 text-lg mt-6">
                        Get ready to harness an innovative, data-driven
                        approach, leveraging advanced analytics, AI-driven
                        tools, and multi-channel strategies to orchestrate
                        campaigns that are consistently optimized for maximum
                        ROI and at the forefront of industry innovation.
                      </div> */}
                       <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:max-w-full">
                       <img
                        loading="lazy"
                        src="/img/Group%2021.svg"
                        className="aspect-square object-contain mt-[-35px] object-center h-full w-[78px] overflow-hidden max-md:w-[50px] max-md:mt-0"
                      />
                    <span className="items-stretch self-stretch flex grow basis-[0%] border-black flex-col max-md:max-w-full">
                    <div className="text-gray-800 text-2xl font-medium">
                        Working Process
                      </div>
                      <div className="text-zinc-600 text-lg mt-2">
                        Get ready to harness an innovative, data-driven
                        approach, leveraging advanced analytics, AI-driven
                        tools, and multi-channel strategies to orchestrate
                        campaigns that are consistently optimized for maximum
                        ROI and at the forefront of industry innovation.
                      </div>
                    </span>
                  </div>{" "}
                      {/* <div className="text-gray-800 text-2xl font-medium mt-12 max-md:mt-10">
                        Dedicated Team
                      </div>
                      <div className="text-zinc-600 text-lg mt-7">
                        {" "}
                        Our forward-thinking team stands at the frontier of your
                        digital fortress, pioneering innovative strategies and
                        solutions that propel our clients to unprecedented
                        success in the ever-evolving digital landscape.
                      </div> */}
                       <div className="flex justify-between gap-5 mt-1 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                       <img
                        loading="lazy"
                        src="img/Group%2018.svg"
                        className="aspect-square object-contain object-center h-full w-[78px] overflow-hidden mt-26 max-md:mt-10 max-md:w-[50px] max-md:max-w-full"
                      />
                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-gray-800 text-2xl font-medium mt-5 max-md:mt-10">
                        Dedicated Team
                      </div>
                      <div className="text-zinc-600 text-lg mt-3">
                        {" "}
                        Our forward-thinking team stands at the frontier of your
                        digital fortress, pioneering innovative strategies and
                        solutions that propel our clients to unprecedented
                        success in the ever-evolving digital landscape.
                      </div>
                    </span>
                  </div>{" "}
                  <div className="flex justify-between gap-5 mt-6 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <img
                        loading="lazy"
                        src="/img/Group%2017.svg"
                        className="aspect-square object-contain object-center h-full w-[78px] overflow-hidden mt-22 max-md:mt-10 max-md:w-[50px] max-md:max-w-full"
                      />
                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-gray-800 text-2xl font-medium mt-11 max-md:mt-10">
                        24/7 Support
                      </div>
                      <div className="text-zinc-600 text-lg mt-3">
                        Unwavering access to expert assistance and guidance,
                        ensuring your campaigns are finely tuned, your questions
                        are promptly answered, and your success is our constant
                        priority.
                      </div>
                    </span>
                  </div>
                      {/* <div className="text-gray-800 text-2xl font-medium mt-11 max-md:mt-10">
                        24/7 Support
                      </div>
                      <div className="text-zinc-600 text-lg mt-6">
                        Unwavering access to expert assistance and guidance,
                        ensuring your campaigns are finely tuned, your questions
                        are promptly answered, and your success is our constant
                        priority.
                      </div> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/img/Group-109%201.svg"
                className="aspect-[1.24] object-contain object-center h-full w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <span className="bg-slate-50 self-stretch flex w-full flex-col items-stretch mt-40 pb-12 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-blue-500 text-5xl leading-[51.5px] self-center z-[1] mt-0 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="font-medium text-neutral-900">
              Transforming your Business
            </span>
            <span className="text-neutral-700">,</span>{" "}
            <span className="font-semibold text-blue-500">Step by Step</span>
          </div>
          <div className="text-gray-500 text-center text-lg self-center w-[1146px] mt-5 max-md:max-w-full">
            Embark on a Strategic Evolution: The Methodical Business
            Transformation Journey of Our Pioneering Digital Marketing Team.
            Architect The Digital Metamorphosis Of Your Business With Our
            Cutting-Edge Digital Marketing Maestros.
          </div>
          <div className="justify-center mt-16 mb-16 mx-9 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="/img/Woman%20and%20a%20man%20put%20the%20puzzle%20together.svg"
                  className="aspect-[1.09] object-contain object-center m-auto h-full w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch content-start flex-wrap flex flex-col max-md:max-w-full max-md:mt-10">
                  <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                        <span className="flex grow flex-col items-start max-md:mt-10">
                          <img
                            loading="lazy"
                            src="/img/Frame.svg"
                            className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                          />
                          <div className="text-gray-800 text-2xl font-medium leading-9 self-stretch mt-4">
                            Reliable
                          </div>
                          <div className="justify-center text-zinc-600 text-base leading-6 self-stretch mt-3.5">
                            The linchpin in executing precision campaigns,
                            ensuring seamless performance for digital marketing
                            experts.
                          </div>
                        </span>
                      </div>
                      <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                        <span className="flex flex-col items-start max-md:mt-10">
                          <img
                            loading="lazy"
                            src="/img/Frame%20(1).svg"
                            className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                          />
                          <div className="text-gray-800 text-2xl font-medium leading-9 self-stretch mt-4">
                            Proven
                          </div>
                          <div className="justify-center text-zinc-600 text-base leading-6 self-stretch mt-3.5">
                            The significance of demonstrated success cannot be
                            emphasized enough.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                        <span className="flex grow flex-col items-start max-md:mt-10">
                          <img
                            loading="lazy"
                            src="/img/Frame%20(2).svg"
                            className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                          />
                          <div className="text-gray-800 text-2xl font-medium leading-9 self-stretch mt-4">
                            Trusted
                          </div>
                          <div className="justify-center text-zinc-600 text-base leading-6 self-stretch mt-3.5">
                            A Trustworthy Agency is crucial to Safeguard
                            Investments in a Performance Marketing Ecosystem.
                          </div>
                        </span>
                      </div>
                      <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                        <span className="flex grow flex-col items-start max-md:mt-10">
                          <img
                            loading="lazy"
                            src="/img/Frame%20(2).svg"
                            className="aspect-square object-contain object-center w-[50px] overflow-hidden max-w-full"
                          />
                          <div className="text-gray-800 text-2xl font-medium leading-9 self-stretch mt-4">
                            Automated
                          </div>
                          <div className="justify-center text-zinc-600 text-base leading-6 self-stretch mt-3.5">
                            Automation is the engine driving efficiency and
                            agility in the dynamic digital marketing landscape.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div className="justify-center items-stretch bg-cyan-50 self-stretch flex w-full flex-col mt-11 pl-16 pr-11 py-12 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="ml-10 mt-6 mb-2.5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-start max-md:max-w-full max-md:mt-7">
                  <div className="justify-center text-slate-800 text-3xl font-medium self-stretch max-md:max-w-full">
                    Unleash the True Potential of Your Business With Our
                    Performance Marketing Solutions
                  </div>
                  <div className="justify-center text-zinc-600 text-1xl font-medium leading-8 self-stretch max-w-[692px] mr-4 mt-7 max-md:max-w-full max-md:mr-2.5">
                    Your Business Potential hinges on harnessing the formidable
                    capabilities of performance marketing - data-driven
                    strategies, precise audience segmentation, and real-time
                    analytics integration. Experts navigate the ever-evolving
                    digital landscape with finesse, ensuring maximum ROI and
                    sustained growth. Performance marketing's ability to measure
                    results and determine ROI facilitates efficient budget
                    allocation, precise segmentation & tracking refined
                    strategies and optimal resource utilization for businesses
                    in this dynamic industry.
                  </div>{" "}
                  <div
                    className="items-stretch
                   flex w-[403px] h-[60px] max-w-full justify-between gap-5 mt-7 px-px max-md:flex-wrap"
                  >
                    <Link to={'/Performance'} className="text-white text-center text-xl font-semibold leading-6 whitespace-nowrap items-center rounded bg-blue-600 grow justify-center px-16 py-3 max-md:px-5">
                      Explore
                    </Link>{" "}
                    <Link to={'/Contact'} className="text-blue-600 text-center text-xl font-semibold leading-6 whitespace-nowrap items-center rounded border bg-white grow justify-center px-16 py-3 border-solid border-blue-600 max-md:px-5">
                     Contact 
                    </Link>
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="/img/Man%20and%20woman%20work%20in%20support%20service.svg"
                  className="aspect-[1.51] object-contain object-center w-full h-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="text-neutral-900 text-center text-5xl font-medium self-center mt-48 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Here is what our Clients are saying About us
        </div>{" "}
        <div className="bg-amber-100 self-stretch flex w-full flex-col items-stretch mt-10 py-12 max-md:max-w-full">
          <div className="w-full px-5 max-md:max-w-full">
            <div className="flex items-stretch justify-between gap-5 pr-16 max-md:pr-5">
              <img
                loading="lazy"
                src="/img/63.svg"
                className="aspect-[0.9] object-contain object-center h-full w-[137px] fill-white overflow-hidden shrink-0 max-w-full"
              />{" "}
              <img
                loading="lazy"
                src="/img/63.svg"
                className="aspect-[0.9] object-contain object-center h-full w-[132px] fill-white overflow-hidden self-center shrink-0 max-w-full my-auto max-md:w-[35%]"
              />
            </div>{" "}
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner" id="circle">{/*main*/}
                <div
                  className="carousel-item active"
                  data-bs-interval="10000"
                  style={{ background: "none", height: "100%"}}
                >
                  <div className="flex flex-col m-auto items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white grow w-full mt-1 pl-9 pr-1 py-1 rounded-2xl max-md:max-w-full max-md:mt-1 max-md:px-5 max-md:h-full">
                      <div className="gap-5 mt-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="/img/Ellipse%2025.svg"
                            className="aspect-square object-contain object-center m-auto h-full w-[281px] overflow-hidden shrink-0 max-w-full mt-2.5 rounded-[50%] max-md:mt-10"
                          />
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-12">
                            <div className="text-neutral-700 text-3xl font-bold max-md:max-w-full">
                              Hannah Schmitt
                            </div>{" "}
                            <div className="text-zinc-600 text-lg mt-3.5 max-md:max-w-full ">
                              Partnering with this Performance Marketing Agency
                              was a game-changer for our business. Their dynamic
                              strategies propelled us to new heights, and the
                              meticulous attention to detail ensured every
                              advertising dollar was well spent. Their
                              data-driven strategies not only boosted our ROI
                              but also helped us understand our customer base
                              better.
                            </div>{" "}
                            <div className="text-neutral-600 text-xs mt-4 max-md:max-w-full">
                              May 8, 2020
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div
                  class="carousel-item"
                  data-bs-interval="2000"
                  style={{ background: "none" }}
                >
                  <div className="flex flex-col m-auto items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white item-center grow w-full mt-1 pl-9 pr-1 py-1 rounded-2xl max-md:max-w-full max-md:mt-1 max-md:px-5 max-md:h-full">
                      <div className="gap-5 mt-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="/img/slider2.svg"
                            className="aspect-square m-auto object-contain object-center h-full w-[281px] overflow-hidden shrink-0 max-w-full mt-2.5 rounded-[50%] max-md:mt-10"
                          />
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                            <div className="text-neutral-700 text-3xl font-bold max-md:max-w-full">
                              Hannah Schmitt
                            </div>{" "}
                            <div className="text-zinc-600 text-lg mt-3.5 max-md:max-w-full">
                              Partnering with this Performance Marketing Agency
                              was a game-changer for our business. Their dynamic
                              strategies propelled us to new heights, and the
                              meticulous attention to detail ensured every
                              advertising dollar was well spent. Their
                              data-driven strategies not only boosted our ROI
                              but also helped us understand our customer base
                              better.
                            </div>{" "}
                            <div className="text-neutral-600 text-xs mt-4 max-md:max-w-full">
                              May 8, 2020
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div class="carousel-item" style={{ background: "none" }}>
                  <div className="flex flex-col m-auto items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                    <div
                      className="bg-white
                     item-center grow w-full mt-1 pl-9 pr-1 py-1 rounded-2xl max-md:max-w-full max-md:mt-1 max-md:px-5 max-md:h-full"
                    >
                      <div className="gap-5 mt-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="/img/slider.svg"
                            className="aspect-square  m-auto object-contain object-center h-full w-[281px] overflow-hidden shrink-0 max-w-full mt-2.5 rounded-[50%] max-md:mt-10"
                          />
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                          <span className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                            <div className="text-neutral-700  text-3xl font-bold max-md:max-w-full">
                              Hannah Schmitt
                            </div>{" "}
                            <div className="text-zinc-600 text-lg mt-3.5 max-md:max-w-full">
                              Partnering with this Performance Marketing Agency
                              was a game-changer for our business. Their dynamic
                              strategies propelled us to new heights, and the
                              meticulous attention to detail ensured every
                              advertising dollar was well spent. Their
                              data-driven strategies not only boosted our ROI
                              but also helped us understand our customer base
                              better.
                            </div>{" "}
                            <div className="text-neutral-600 text-xs mt-4 max-md:max-w-full">
                              May 8, 2020
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <br />
              <br />
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
            </div>
          </div>{" "}
        </div>
        
      </span>
      
    </Fragment>
  );
}

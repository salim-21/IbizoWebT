import React, { Fragment } from "react";
import "./Performance.css";
import { Link } from "react-router-dom";
export default function Performance() {
  return (
    <Fragment>
      <span className="bg-white flex flex-col">
        <div
          className="bg-slate-950 m-auto bg-cover bg-no-repat self-stretch flex w-full flex-col bg-no-repeat justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5"
          style={{
            backgroundImage: `url("/img/Affiliate%20hero%20section.svg")`,
          }}
        >
          <span className="flex w-full max-w-[1033px] flex-col items-stretch mt-20 mb-16 max-md:max-w-full max-md:my-10">
            <div className="justify-center text-white text-center text-6xl font-semibold leading-[75px] self-center max-w-[951px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
              <span className="text-sky-400">Performance Marketing</span>{" "}
              <span className="text-white">at Ibizo Technologies</span>
            </div>
            <div className="text-white text-center text-[20px] font-medium leading-9 mt-10 max-md:max-w-full">
              Welcome to Ibizo Technologies, where we redefine digital marketing
              through a cutting-edge approach known as performance marketing.
              Our mission is simple yet powerful: to help you achieve
              outstanding results by connecting your brand with the right
              audience, at the right time, and in the right way.
            </div>
            <span className="justify-between items-center bg-white h-[60px] self-center flex w-[750px]  max-w-full gap-0 mt-20 mb-24 pl-0 max-md:flex-wrap max-md:my-10 max-md:pl-5max-md:bg-visibility-hidden">
              <input
                class="w-full h-[60px] p-7 text-lg placeholder-gray-500 border border-gray-300  focus:outline-none focus:ring focus:border-blue-500max-md:
            "
                type="text"
                placeholder=".Enter mail ID"
                aria-label=".form-control-lg example"
                id="an-input"
              />

              <Link
                to={"/Contact"}
                type="submit"
                className="text-white h-[60px] text-lg pt-[15px] whitespace-nowrap justify-center items-stretch bg-blue-600 self-stretch px-12 m-auto max-md:px-5 max-md:w-[100%]"
                id="anm-input"
              >
                Talk to expert
              </Link>
            </span>
          </span>
        </div>
        <div className="self-center w-full max-w-[1258px] mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-neutral-900 text-4xl font-medium capitalize max-md:max-w-full max-md:text-4xl">
                  What is Performance Marketing?
                </div>
                <div className="justify-center text-gray-500 text-[20px] font-medium capitalize mt-4 max-md:max-w-full">
                  Performance marketing is not just a buzzword; it's a
                  game-changer in the digital marketing landscape. At Ibizo
                  Technologies, we've perfected this data-driven approach to
                  elevate your brand's online presence and drive tangible
                  outcomes.
                </div>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="/img/Business%20growth%20or%20career%20ladder.svg"
                className="aspect-[1.07] object-contain h-full object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>{" "}
        <div className="text-neutral-900 text-center text-5xl font-medium capitalize self-center mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Our Comprehensive Services
        </div>{" "}
        <div className="text-gray-500 text-center text-[20px] font-medium self-center max-w-[848px] mt-3 max-md:max-w-full">
          Beyond budgeting options, Ibizo Technologies offers a full spectrum of
          services to supercharge your digital marketing efforts:
        </div>{" "}
        <div className="self-center w-full max-w-[1223px] mt-1 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center mt-32 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col justify-center my-auto max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="/img/Frame%201686551722.svg"
                          className="aspect-[0.98] object-contain h-full object-center w-[93px] overflow-hidden rounded-[50%]"
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
                        <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                          Search Engine Marketing (SEM)
                        </div>{" "}
                        <div className="text-neutral-600 text-sm mt-2.5 max-md:max-w-full">
                          We harness the power of search engines to ensure your
                          brand is discovered by those actively looking for your
                          products or services.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="justify-center mt-32 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col justify-center my-auto max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="/img/Frame%201686551723.svg"
                          className="aspect-[0.98] object-contain h-full object-center w-[93px] overflow-hidden rounded-[50%]"
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
                        <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                          Social Media Advertising
                        </div>{" "}
                        <div className="text-neutral-600 text-sm mt-2.5 max-md:max-w-full">
                          Our social media experts craft compelling ad campaigns
                          that engage your audience and drive conversions on
                          platforms like Facebook, Instagram, and LinkedIn.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center mt-32 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col justify-center my-auto max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="/img/Frame%201686551724.svg"
                          className="aspect-[0.98] object-contain h-full object-center w-[93px] overflow-hidden rounded-[50%]"
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
                        <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                          Display Advertising
                        </div>{" "}
                        <div className="text-neutral-600 text-sm mt-2.5 max-md:max-w-full">
                          Maximize your brand's visibility with visually
                          stunning display ads that capture attention and
                          convert prospects into customers.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="justify-center mt-32 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
                      <div className="items-center flex grow flex-col justify-center my-auto max-md:mt-6">
                        <img
                          loading="lazy"
                          srcSet="/img/Frame%201686551725.svg"
                          className="aspect-[0.98] object-contain h-full object-center w-[93px] overflow-hidden rounded-[50%]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-5">
                        <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                          Email Marketing
                        </div>
                        <div className="text-neutral-600 text-sm mt-2.5 max-md:max-w-full">
                          Nurture your customer relationships and drive sales
                          through targeted email campaigns that deliver the
                          right message at the right time.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sky-50 self-stretch flex w-full flex-col mt-40 pb-12 max-md:max-w-full max-md:mt-10">
          <div className="flex w-[126px] max-w-full flex-col items-stretch self-start">
            <div className="flex shrink-0 h-[131px] flex-col" />
          </div>
          <div className="self-center z-[1] flex mt-0 w-full max-w-[1239px] flex-col items-stretch max-md:max-w-full max-md:mt-0">
            <span className="flex flex-col items-center px-5 max-md:max-w-full">
              <div className="text-slate-800 text-3xl font-semibold max-md:max-w-full">
                Our Unique Approach to Budgeting
              </div>
              <div className="text-gray-500 text-center text-[20px] font-medium self-stretch mt-6 max-md:max-w-full">
                At Ibizo Technologies, we understand that every business has
                unique financial considerations. That's why we offer flexible
                payment options that put you in control.
              </div>
            </span>{" "}
            {/* <img
            loading="lazy"
            srcSet="/img/Graphic%20designer%20creating%20artwork.svg"
            className="aspect-[1.26] object-contain h-full object-center w-[50%] overflow-hidden max-w-full mt-14 self-end max-md:mt-10"
          /> */}
          </div>{" "}
          <div className="container row">
            <div className="col-6">
              <div className="items-center flex justify-between gap-5 ml-24 mt-12 self-start max-md:max-w-full max-md:mt-10 max-md:w[100%] max-md:m-auto max-md:flex-wrap">
                <div className="items-stretch w-[75px] h-[75px] bg-orange-50 rounded-full flex basis-[0%] flex-col justify-center my-auto">
                  <span className="text-orange-500 text-4xl leading-6 whitespace-nowrap justify-center items-stretch px-7 py-6 rounded-[50%] max-md:px-5">
                    1
                  </span>
                </div>{" "}
                <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full max-md:mt-8">
                  <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                    Prepayment of Ad Budget
                  </div>{" "}
                  <div className="text-neutral-600 text-sm font-normal mt-1.5 max-md:max-w-full">
                    Many of our clients opt for the prepayment model, where you
                    allocate a specific budget for your advertising campaigns.
                    This upfront payment allows us to leverage your resources
                    efficiently, ensuring every dollar is spent strategically to
                    achieve your goals.
                  </div>
                </span>
              </div>{" "}
              <div className="items-center flex justify-between gap-5 ml-24 mt-10 self-start max-md:max-w-full max-md:flex-wrap max-md:w[100%] max-md:m-auto">
                <div className="items-stretch w-[75px] h-[75px] bg-violet-100 rounded-full flex basis-[0%] flex-col justify-center my-auto">
                  <span className="text-blue-600 text-4xl leading-6 whitespace-nowrap justify-center items-stretch px-7 py-6 rounded-[50%] max-md:px-5">
                    2
                  </span>
                </div>{" "}
                <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full max-md:mt-8">
                  <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                    Retainer-ship Fee
                  </div>{" "}
                  <div className="text-neutral-600 text-sm mt-1.5 max-md:max-w-full">
                    For clients seeking ongoing marketing support and
                    consultation, we offer a retainer ship fee arrangement. With
                    this option, you benefit from dedicated access to our
                    expertise and insights throughout your campaign, ensuring
                    your strategies remain agile and adaptable.
                  </div>
                </span>
              </div>{" "}
              <div className="items-center flex justify-between gap-5 ml-24 mt-10 mb-5 self-start max-md:max-w-full max-md:flex-wrap max-md:w[100%] max-md:m-auto">
                <div className="items-stretch w-[75px] h-[75px] bg-orange-100 rounded-full  flex basis-[0%] flex-col justify-center my-auto">
                  <span className="text-yellow-400 text-4xl leading-6 whitespace-nowrap justify-center items-stretch px-7 py-6 rounded-[50%] max-md:px-5">
                    3
                  </span>
                </div>{" "}
                <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full max-md:mt-8">
                  <div className="text-neutral-800 text-lg font-semibold leading-7 tracking-normal max-md:max-w-full">
                    15% of Ad Budget
                  </div>{" "}
                  <div className="text-neutral-600 font-normal text-sm mt-1.5 max-md:max-w-full">
                    Alternatively, you can choose to pay a commission of 15% on
                    your ad spend. This model aligns our success with yours –
                    the more effective your campaigns, the more value we bring
                    to your business.
                  </div>
                </span>
              </div>
            </div>
            <div className="col-6">
              <img
                loading="lazy"
                srcSet="/img/Graphic%20designer%20creating%20artwork.svg"
                className="aspect-[1.26] object-contain h-full object-end overflow-hidden max-w-full self-end max-md:mt-10 max-md:w-[555px] max-md:h-[555px]"
              />
            </div>
          </div>
        </div>{" "}
        <div className="text-neutral-800 text-center text-3xl font-semibold leading-10 tracking-tighter self-center mt-40 max-md:max-w-full max-md:mt-10">
          Why Choose Ibizo Technologies?
        </div>{" "}
        <div className="text-zinc-600 text-center text-[22px] font-medium self-center w-[1157px] mt-6 max-md:max-w-full">
          Beyond budgeting options, Ibizo Technologies offers a full spectrum of
          services to supercharge your digital marketing efforts:
        </div>{" "}
        <div className="self-center w-[1157px] max-w-full mt-20 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col px-px max-md:mt-10">
                <span className="text-orange-500  w-[75px] h-[75px] bg-orange-50 text-4xl leading-7 whitespace-nowrap self-center justify-center items-stretch px-9 py-7 rounded-[50%] max-md:px-5">
                  1
                </span>{" "}
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 whitespace-nowrap mt-3.5">
                  Proven Success
                </div>{" "}
                <div className="text-stone-500 text-center text-base leading-6 self-center max-w-[285px] mt-3.5">
                  Our track record speaks for itself. We've helped countless
                  clients achieve remarkable results through performance
                  marketing.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-center flex grow flex-col max-md:mt-10">
                <span className="text-blue-600 text-4xl  w-[75px] h-[75px] bg-violet-50 leading-7 whitespace-nowrap justify-center items-stretch px-8 py-7 rounded-[50%] max-md:px-5">
                  2
                </span>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 self-stretch whitespace-nowrap mt-3.5">
                  Transparent Reporting
                </div>
                <div className="text-stone-500 text-center text-base leading-6 self-stretch mt-3.5">
                  {" "}
                  You'll have complete visibility into your campaign's
                  performance. We provide detailed reports and insights, so you
                  know exactly how your budget is being utilized.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col px-px max-md:mt-10">
                <span className="text-yellow-400 text-4xl  w-[75px] h-[75px] bg-orange-100 leading-7 whitespace-nowrap self-center justify-center items-stretch px-7 py-7 rounded-[50%] max-md:px-5">
                  3
                </span>
                <div className="text-slate-800 text-center text-2xl font-bold leading-8 whitespace-nowrap mt-3.5">
                  Tailored Solutions
                </div>
                <div className="text-stone-500 text-center text-base leading-6 self-center max-w-[285px] mt-3.5">
                  We understand that one size does not fit all. Our strategies
                  are customised to meet your unique business objectives and
                  market dynamics.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-800 text-center text-3xl font-bold leading-10 tracking-tighter self-center mt-40 max-md:max-w-full max-md:mt-10">
          Let’s Get Connected
        </div>
        {/* <div className="items-stretch bg-white self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mx-5 my-3.5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0">
              <span className="items-start bg-white flex grow flex-col w-full p-8 rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                      First Name
                    </div>
                    <span className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid">
                      Please input
                    </span>
                  </span>
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                      Email address
                    </div>
                    <span className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid">
                      Please input
                    </span>
                  </span>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                      Phone Number
                    </div>
                    <span className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid">
                      +91
                    </span>
                  </span>
                  <span className="justify-end items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal">
                      Location
                    </div>
                    <span className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid">
                      Please input
                    </span>
                  </span>
                </div>
                <div className="self-stretch text-gray-800 text-sm font-medium leading-5 tracking-normal mt-6 max-md:max-w-full">
                  Message
                </div>
                <span className="text-gray-400 text-base leading-6 tracking-normal items-stretch self-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white mt-2 pt-3 pb-32 px-4 rounded-md border-solid max-md:max-w-full max-md:pb-10">
                  Write us a short Message...
                </span>
                <span className="text-white text-base font-semibold whitespace-nowrap justify-center items-stretch bg-blue-600 mt-6 px-16 py-3 rounded-lg self-start max-md:px-5">
                  Submit
                </span>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
              <span className="justify-center items-end flex flex-col pt-11 pb-6 max-md:mt-10">
                <div className="self-stretch text-gray-800 text-lg font-medium leading-7 tracking-normal whitespace-nowrap">
                  Get in touch
                </div>
                <div className="self-stretch text-gray-500 text-base leading-6 tracking-normal mt-4">
                  We’d Love to Hear From You! Reach Out to us and Let’s Start a
                  Conversation
                </div>
                <div className="text-gray-800 text-lg font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-10">
                  Address
                </div>
                <div className="text-gray-500 text-base leading-6 tracking-normal self-stretch whitespace-nowrap mt-7">
                  GF, A - 16, Noida
                </div>
                <div className="text-gray-500 text-base leading-6 tracking-normal self-stretch whitespace-nowrap mt-4">
                  Uttar Pradesh 201301
                </div>
                <span className="justify-center flex gap-1.5 mt-14 rounded-md self-start items-start max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ea43ebd2e24c5b78fa27c8d8debdd7c247290470ecf2b7c36539d2a0f98c200?"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-blue-500 text-base font-semibold leading-6 self-stretch grow whitespace-nowrap">
                    Send an email
                  </div>
                </span>
                <span className="justify-between self-stretch flex gap-1.5 mt-5 rounded-md items-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d182bc1419ea61aacf48a81b12033c4de3ff0575a76ff9fbcb01ea489333d38?"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-blue-500 text-base font-semibold leading-6 self-stretch grow shrink basis-auto">
                    Make a phone call
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div> */}
        <div className="items-stretch bg-white self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-0">
          <div className="mx-0 my-3.5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-0">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[71%] max-md:w-auto max-md:m-auto max-md:">
                <form className="items-start bg-white flex grow flex-col w-full p-8 rounded-lg max-md:max-w-[100%] max-md:mt-10 max-md:px-0">
                  <div className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <span className="items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                        First Name
                      </div>{" "}
                      <input
                        type="text"
                        className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid"
                        placeholder="Enter Name"
                        required
                      />
                    </span>{" "}
                    <span className="items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                        Email address
                      </div>{" "}
                      <input
                        type="text"
                        className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid"
                        placeholder="Email"
                        required
                      />
                    </span>
                  </div>{" "}
                  <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                    <span className="items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal whitespace-nowrap">
                        Phone Number
                      </div>{" "}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid"
                        placeholder="91+"
                        required
                      />
                    </span>{" "}
                    <span className="justify-end items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-gray-800 text-sm font-medium leading-5 tracking-normal">
                        Location
                      </div>{" "}
                      <input
                        type="text"
                        className="text-gray-400 text-base leading-6 tracking-normal whitespace-nowrap items-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white justify-center mt-2 px-4 py-3 rounded-md border-solid"
                        placeholder="Location"
                        required
                      />
                    </span>
                  </div>{" "}
                  <div className="self-stretch text-gray-800 text-sm font-medium leading-5 tracking-normal mt-6 max-md:max-w-full">
                    Message
                  </div>{" "}
                  <textarea
                    type="text"
                    className="text-gray-400 text-base leading-6 tracking-normal items-stretch self-stretch border border-[color:var(--Neutral-700,#DAE0E6)] shadow-sm bg-white mt-2 pt-3 pb-32 px-4 rounded-md border-solid max-md:max-w-full max-md:pb-10"
                    placeholder="Write us a short Message..."
                  ></textarea>
                  <button
                    typeof="submit"
                    className="text-white text-base font-semibold whitespace-nowrap justify-center items-stretch bg-blue-600 mt-6 px-16 py-3 rounded-lg self-start max-md:px-5"
                  >
                    Submit
                  </button>
                </form>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                <span className="justify-center items-end flex flex-col pt-12 pb-6 max-md:mt-10">
                  <div className="self-stretch text-gray-800 text-lg font-medium leading-7 tracking-normal whitespace-nowrap">
                    Get in touch
                  </div>{" "}
                  <div className="self-stretch text-gray-500 text-base leading-6 tracking-normal mt-3">
                    We’d Love to Hear From You! Reach Out to us and Let’s Start
                    a Conversation
                  </div>{" "}
                  <div className="text-gray-800 text-lg font-medium leading-7 tracking-normal self-stretch whitespace-nowrap mt-5">
                    Address
                  </div>{" "}
                  <div className="text-gray-500 text-base leading-6 tracking-normal self-stretch whitespace-nowrap mt-3">
                    GF, A - 16, Noida
                  </div>{" "}
                  <div className="text-gray-500 text-base leading-6 tracking-normal self-stretch whitespace-nowrap mt-3">
                    Uttar Pradesh 201301
                  </div>{" "}
                  <span className="justify-center flex gap-2 mt-10 rounded-md self-start items-start max-md:mt-10">
                    <img
                      loading="lazy"
                      src="/img/mail.svg"
                      className="aspect-square object-contain object-center w-6 mt-1 overflow-hidden shrink-0 max-w-full"
                    />{" "}
                    <div className="text-blue-500 text-base font-semibold leading-6  self-stretch grow whitespace-nowrap">
                      <a href="https://www.signalhire.com/companies/ibizo-technologies/email-format">
                        Send an email
                      </a>
                    </div>
                  </span>{" "}
                  <span className="justify-between self-stretch flex gap-2 mt-4 rounded-md items-start">
                    <img
                      loading="lazy"
                      src="/img/phone.svg"
                      className="aspect-square object-contain object-center w-6 mt-1 overflow-hidden shrink-0 max-w-full"
                    />{" "}
                    <div className="text-blue-500 text-base font-semibold leading-6 self-stretch grow shrink basis-auto">
                      <a href="tel:+919708770877">Make a phone call</a>
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
      </span>
    </Fragment>
  );
}

import React, { Fragment } from "react";
import "./Affiliate.css";
import { Link } from "react-router-dom";

function Affiliate() {
  return (
    <Fragment>
      <span className="bg-white flex flex-col">
        <span
          className="bg-slate-950 self-stretch m-auto bg-cover flex w-[100%] flex-col items-stretch px-20 py-12 max-md:max-w-[100%] max-md:px-5"
          style={{
            backgroundImage: `url("/img/Affiliate%20hero%20section.svg")`,
          }}
        >
          <div className="text-sky-400 text-7xl font-medium self-center mt-32 max-md:max-w-full max-md:mt-auto max-md:text-4xl">
            Affiliate Marketing Service
          </div>
          <div className="text-white text-center text-[20px] font-medium leading-9 w-[100%] mt-10 max-md:max-w-[100%] max-md:mr-2.5">
            Welcome to Ibizo Technologies, your gateway to the dynamic world of
            affiliate marketing. Whether you're an advertiser looking to amplify
            your brand's reach or a publisher with a robust traffic base, we're
            here to help you thrive in the digital marketing landscape. Discover
            how Ibizo Technologies can empower you to achieve remarkable success
          </div>{" "}
          <span className="justify-between items-center bg-white self-center flex w-[750px] h-[60px]  max-w-full gap-0 mt-20 mb-24 pl-0 max-md:flex-wrap max-md:my-10 max-md:pl-5max-md:bg-visibility-hidden">
            <input
              class="w-full h-[60px] p-7 text-lg placeholder-gray-500 border border-gray-300  focus:outline-none focus:ring focus:border-blue-500
            "
              type="text"
              placeholder=".Enter mail ID"
              aria-label=".form-control-lg example"
              id="an-input"
            />

            <Link
              to={"/Contact"}
              className="text-white hover:bg-black h-[60px] pt-[15px] text-lg whitespace-nowrap justify-center items-stretch bg-blue-600 self-stretch px-12 m-auto max-md:w-[100%]"
              id="anm-input"
            >
              Talk to expert
            </Link>
          </span>
        </span>{" "}
        <span className="self-stretch flex w-full flex-col mt-28 pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <div className="self-center w-full max-w-[1260px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-neutral-900 text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                    What is affiliate marketing
                  </div>{" "}
                  <div className="text-zinc-600 text-[22px] font-medium leading-9 mt-4 max-md:max-w-full">
                    The affiliate marketing are performance-based ads in which
                    the online business owners offer several rewards to
                    affiliate marketing experts for bringing in customers.
                    Affiliate Marketing is a cost-effective type of marketing.
                    It is just like PPC advertising In this process, our experts
                    connect with other websites to advertise your services and
                    brands. You only have to pay a minimal amount to your
                    affiliates every time they direct an Internet user to your
                    website.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="/img/image%201.svg"
                  className="aspect-square object-contain h-full object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>{" "}
          <div className="text-neutral-900 text-5xl font-medium self-center mt-40 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Our Affiliate Marketing Models
          </div>{" "}
          <div className="text-gray-500 text-center text-lg font-medium leading-9 self-center w-[1240px] mt-5 max-md:max-w-full">
            The Affiliate program commission payment model is divided into
            various sections and it is important to know about all the sections
            in order to make a well-versed decision as to what kind of ads you
            want to display on your business websites.
          </div>{" "}
          <div className="self-center w-full max-w-[1240px] mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <span className="border border-[color:var(--Neutral-600,#EAEBF0)] shadow-sm bg-white flex grow flex-col w-full px-5 py-7 rounded-md border-solid items-start max-md:max-w-full max-md:mt-5">
                  <div className="justify-center items-center bg-slate-50 flex aspect-square flex-col w-12 h-12 px-3 rounded-[30px]">
                    <img
                      loading="lazy"
                      src="/img/percent%202/circle.svg"
                      className="aspect-square h-full
                      object-contain object-center w-full overflow-hidden"
                    />
                  </div>{" "}
                  <div className="text-gray-800 text-2xl font-medium leading-7 tracking-tight self-stretch mt-7 max-md:max-w-full">
                    Cost per click (CPC)
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 tracking-normal self-stretch mt-7 max-md:max-w-full">
                    The cost-per-click model is also well known as CPC pays
                    affiliates for ads clicked by the audience on their sites.
                    This is a form of advertising that can be in text and image
                    form depending on the ads that are placed on the affiliate
                    site.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="border border-[color:var(--Neutral-600,#EAEBF0)] shadow-sm bg-white flex grow flex-col w-full px-5 py-7 rounded-md border-solid items-start max-md:max-w-full max-md:mt-5">
                  <div className="justify-center items-center bg-slate-50 flex aspect-square flex-col w-12 h-12 px-3 rounded-[30px]">
                    <img
                      loading="lazy"
                      src="/img/credit%20card.svg"
                      className="aspect-square h-full object-contain object-center w-full overflow-hidden"
                    />
                  </div>{" "}
                  <div className="text-gray-800 text-2xl font-medium leading-7 tracking-tight self-stretch mt-7 max-md:max-w-full max-md:mr-2.5">
                    Cost per Lead (CPL)
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 tracking-normal self-stretch mt-7 max-md:max-w-full">
                    Cost-per-lead is the type of affiliate marketing in which
                    the affiliates get paid for sending good leads to their
                    site. This CPL affiliate marketing payment program is also
                    well-known as online lead generation.{" "}
                  </div>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="self-center w-full max-w-[1240px] mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <span className="border border-[color:var(--Neutral-600,#EAEBF0)] shadow-sm bg-white flex grow flex-col w-full px-5 py-7 rounded-md border-solid items-start max-md:max-w-full max-md:mt-5">
                  <div className="justify-center items-center bg-slate-50 flex aspect-square flex-col w-12 h-12 px-3 rounded-[30px]">
                    <img
                      loading="lazy"
                      src="/img/coins.svg"
                      className="aspect-square h-full object-contain object-center w-full overflow-hidden"
                    />
                  </div>{" "}
                  <div className="text-gray-800 text-2xl font-medium leading-7 tracking-tight self-stretch mt-7 max-md:max-w-full max-md:mr-2.5">
                    Cost per Acquisition sale (CPAS)
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 tracking-normal self-stretch mt-7 max-md:max-w-full">
                    Cost per acquisition is also known as pay-per-sale or PPS.
                    In this model, the affiliate gets a set commission for each
                    sale they pass on to the merchant’s website or services.
                  </div>
                </span>
              </div>{" "}
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="border border-[color:var(--Neutral-600,#EAEBF0)] shadow-sm bg-white flex grow flex-col w-full px-5 py-7 rounded-md border-solid items-start max-md:max-w-full max-md:mt-5">
                  <div className="justify-center items-center bg-slate-50 flex aspect-square flex-col w-12 h-12 px-3 rounded-[30px]">
                    <img
                      loading="lazy"
                      src="/img/pie%20chart/2.svg"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>{" "}
                  <div className="text-gray-800 text-2xl font-medium leading-7 tracking-tight self-stretch mt-7 max-md:max-w-full max-md:mr-2.5">
                    Cost per Impression (CPM)
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 tracking-normal self-stretch mt-7 max-md:max-w-full">
                    Cost per impression is one of the most widespread pricing
                    models for website
                    <br />
                    advertising. The cost per impression is also known as cost
                    per mile. It is the total amount an advertiser pays for
                    1,000 impressions on their website page.{" "}
                  </div>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="text-neutral-900 text-center text-3xl font-semibold leading-10 tracking-tighter self-center mt-40 max-md:max-w-full max-md:mt-10">
            For Publishers - Unlock Lucrative Offers
          </div>{" "}
          <div className="text-gray-500 text-center text-lg leading-9 self-center w-[1235px] mt-3 max-md:max-w-full">
            If you're a publisher with substantial traffic and a hunger for
            monetization, Ibizo Technologies has the perfect platform for you.
            Join us to access an array of high-converting offers tailored to
            your audience's preferences
          </div>{" "}
          <div className="self-center w-full max-w-[1240px] mt-28 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018.svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden self-center max-w-full"
                  />{" "}
                  <div className="text-gray-800 text-center text-2xl font-bold self-center whitespace-nowrap mt-6">
                    Diverse Offer Selection
                  </div>{" "}
                  <div className="text-zinc-600 text-center text-lg leading-8 mt-3">
                    Ibizo Technologies collaborates with advertisers across
                    various industries, ensuring you have access to a wide range
                    of offers to match your audience's interests
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018%20(1).svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-gray-800 text-center text-2xl font-bold self-center whitespace-nowrap mt-6">
                    Flexible Integration
                  </div>
                  <div className="text-zinc-600 text-center text-lg leading-8 mt-3">
                    Seamlessly integrate ads into your content with various ad
                    formats and customization options, providing a seamless and
                    engaging user experience
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018%20(2).svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-gray-800 text-center text-2xl font-bold self-center whitespace-nowrap mt-6">
                    Prompt Payments
                  </div>
                  <div className="text-zinc-600 text-center text-lg leading-8 mt-3">
                    We understand the importance of timely payments. Receive
                    your earnings promptly, and effortlessly track your revenue
                    through our user-friendly dashboard
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="text-gray-950 text-4xl m-auto pt-[56px] font-bold self-stretch ml-5 max-md:max-w-full max-md:mt-10">
            Why Choose Ibizo Technologies
          </div>
          <div className="self-stretch ml-5 m-auto mt-16 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0 max-md:m-16">
                <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-8">
                  <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="/img/Group%2021%20(1).svg"
                      className="aspect-square h-full object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
                    />
                    <span
                      className="items-stretch self-stretch mt-10 flex grow basis-[0%] flex-col max-md:max-w-full max-md:mt-0
                    "
                    >
                      <div className="text-gray-800 text-2xl font-semibold max-md:max-w-full">
                        Industry Expertise
                      </div>
                      <div className="text-zinc-500 text-lg font-medium leading-7 mt-3 max-md:max-w-full">
                        With years of experience in the affiliate marketing
                        industry, we've built a reputation for delivering
                        results and exceeding expectations.
                      </div>
                    </span>
                  </div>{" "}
                  <div className="flex justify-between gap-5 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      src="/img/Group%2024.svg"
                      className="aspect-square h-full object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
                    />{" "}
                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                      <div className="text-gray-800 text-2xl font-semibold max-md:max-w-full">
                        Reliable Partnerships
                      </div>{" "}
                      <div className="text-zinc-500 text-lg font-medium leading-7 mt-3 max-md:max-w-full">
                        We value long-term relationships and strive to provide a
                        trustworthy environment where advertisers and publishers
                        can thrive together.
                      </div>
                    </span>
                  </div>{" "}
                  <div className="flex justify-between gap-5 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      src="/img/Group%2018%20(1).svg"
                      className="aspect-square h-full object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
                    />{" "}
                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                      <div className="text-gray-800 text-2xl font-semibold max-md:max-w-full">
                        Innovation
                      </div>{" "}
                      <div className="text-zinc-500 text-lg font-medium leading-7 mt-3 max-md:max-w-full">
                        We value long-term relationships and strive to provide a
                        trustworthy environment where advertisers and publishers
                        can thrive together.
                      </div>
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="/img/Group.svg"
                  className="aspect-[1.32] object-contain h-full object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-3.5"
                />
              </div>
            </div>
          </div>{" "}
          <div className="text-slate-800 text-center text-3xl font-semibold leading-10 tracking-tighter self-center mt-48 max-md:max-w-full max-md:mt-10">
            For Advertisers - Skyrocket Your Offers
          </div>{" "}
          <div className="text-gray-500 text-center text-lg leading-9 self-center w-[1235px] mt-6 max-md:max-w-full">
            Are you an advertiser searching for a reliable partner to
            supercharge your marketing efforts? Look no further! Ibizo
            Technologies offers a range of tailored solutions to promote your
            offers effectively
          </div>{" "}
          <div className="self-center w-full max-w-[1240px] mt-28 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <span className="items-center flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018%20(6).svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-gray-800 text-center text-2xl font-bold self-stretch whitespace-nowrap mt-6 max-md:text-[19px]">
                    Extensive Publisher Network
                  </div>{" "}
                  <div className="text-zinc-600 text-center text-lg leading-8 self-stretch mt-3">
                    Connect with our vast network of publishers, each carefully
                    curated to match your brand's ethos and target audience. We
                    ensure that your offers reach the right people at the right
                    time.
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018%20(9).svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-gray-800 text-center text-2xl font-bold self-center whitespace-nowrap mt-6 max-md:text-[19px]">
                    Data-Backed Decisions
                  </div>
                  <div className="text-zinc-600 text-center text-lg leading-8 mt-3">
                    Gain real-time insights into your campaigns with our robust
                    analytics tools. Harness the power of data to fine-tune your
                    strategies and optimise your marketing efforts.
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch flex grow flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/img/Frame%2018%20(8).svg"
                    className="aspect-square object-contain object-center w-[57px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-gray-800 text-center text-2xl font-bold self-center whitespace-nowrap mt-6 max-md:text-[19px]">
                    Dedicated Support
                  </div>
                  <div className="text-zinc-600 text-center text-lg leading-8 mt-3">
                    Our team of experts is ready to guide you at every step,
                    from campaign setup to ongoing optimization. With Ibizo
                    Technologies, you're never alone in your marketing journey
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>{" "}
        <div className="text-gray-800 text-center text-3xl font-bold leading-10 tracking-tighter self-center mt-48 max-md:max-w-full max-md:mt-10">
          Let’s Get Connected
        </div>{" "}
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
                    className="text-white text-base hover:bg-black font-semibold whitespace-nowrap justify-center items-stretch bg-blue-600 mt-6 px-16 py-3 rounded-lg self-start max-md:px-5"
                  >
                    Submit
                  </button>
                </form>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                <span className="justify-center items-end flex flex-col pt-11 pb-6 max-md:mt-10">
                  <div className="self-stretch text-gray-800 text-lg font-medium leading-7 tracking-normal whitespace-nowrap">
                    Get in touch
                  </div>{" "}
                  <div className="self-stretch text-gray-500 text-base leading-6 tracking-normal mt-2">
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
                    <div className="text-blue-500 text-base font-semibold leading-6 self-stretch grow whitespace-nowrap">
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
        {/*
         */}
      </span>
    </Fragment>
  );
}
export default Affiliate;

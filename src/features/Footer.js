import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import { Fragment } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "bootstrap";
import "primeicons/primeicons.css";

function Footer() {
  // const navigatetoabout=useNavigate()
  // function name(){
  //   navigatetoabout('/')
  // }
  return (
    <Fragment>
      <span className="bg-[#1c1c1c] flex w-full flex-col items-stretch mt-4 pt-12 pb-6 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="gap-5 h-[200px] flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:h-[50%]">
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="/image/white.svg"
                style={{ width: "100px",alignContent:"auto" }}
              />
              <div className="text-neutral-100 text-base leading-6 mt-3 my-auto max-md:mt-5">
                Powering growth in digital<br/> industry
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow justify-between gap-5 items-start max-md:mt-10">
                <span className="flex flex-col items-stretch">
                  <div className="text-white text-lg font-medium leading-6">
                    Company
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-4">
                    <Link to={"/"}>Home</Link>
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-2">
                    <Link to={"/About"}>About</Link>
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-2">
                    <Link to={"/Affiliate"}>Service</Link>
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-2">
                  <Link to={"/"}>Partner</Link>

                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-2">
                    <Link to={"/About"}>FAQ</Link>
                  </div>
                </span>
                <span className="self-stretch flex flex-col items-stretch">
                  <div className="text-white text-lg font-medium leading-6 whitespace-nowrap">
                    Contact
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-4">
                    <Link to={"/Contact"}>Contact us</Link>
                  </div>
                  <div className="text-neutral-200 text-base leading-4 whitespace-nowrap mt-2">
                    <Link to={"/Contact"}>Location</Link>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col h-10 items-stretch max-md:mt-10 mb-10 max-md:w-[100%]">
                <div className="text-neutral-200 text-sm leading-5">
                  Want to know more about us!!!! Let’s connect
                </div>
                <div className="flex items-stretch justify-between gap-3.5 mt-3.5">
                  <input className="text-zinc-800 h-[55px] leading-6 w-[320px] whitespace-nowrap bg-stone-50items-start max-md:pr-5 max-md:w-[100%]"
                  placeholder='      Email address'/>
                  <Link to={"/Contact"}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f06ff8de7fd43eb97133381a65c3440bbd136136bf337bf2ebe9da05f8843de8?"
                      className="aspect-[0.98] object-contain h-[55px] object-center w-20 overflow-hidden shrink-0 max-w-full"
                    />
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
        <br/>
       <div class="GetInTouch w-[92.25px] h-[15.75px] text-white text-xs font-bold font-['Space Grotesk'] leading-[14px] tracking-wide  max-md:mt-[30px]">
        GET IN TOUCH
        </div>
       <span class="Icon w-[109.21px] h-[27.41px] mt-6 relative">
          <a
            href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2FiBixoTech%2F"
            className="text-blue-600 text-2xl mr-3"
          >
            <i className="pi pi-facebook"></i>
          </a>

          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbangari_priya"
            className="text-blue-600 text-2xl"
          >
            <i className="pi pi-twitter"></i>
          </a>

          <a
            href="https://in.linkedin.com/company/ibizotechnologies"
            className="text-blue-600 text-2xl ml-2"
          >
            <i className="pi pi-linkedin"></i>
          </a>
        </span>

        <span className="flex items-stretch justify-between gap-5 mt-[10px]  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-opacity-80 text-xs leading-4 grow shrink basis-auto">
            @2023 Ibizo Technologies. All rights reserved.
          </div>
          <div className="text-white text-opacity-80 text-right text-xs leading-4">
            Partner & Contribute
          </div>
        </span>
      </span>
    </Fragment>
  );
}
export default Footer;

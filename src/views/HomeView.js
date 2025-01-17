import React from 'react';
import ProgramsCarousel from "../components/elements/carousel/ProgramsCarousel";
import TitlePrimaryElement from "../components/elements/TitlePrimaryElement";
import CoursesElement from "../components/elements/CoursesElement";

const logoPartner = [
  {
    url: "https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/capsule-dark.svg"
  },
  {
    url: "https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/fitbit-dark.svg"
  },
  {
    url: "https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/forbes-dark.svg"
  },
  {
    url: "https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/mailchimp-dark.svg"
  },
  {
    url: "https://htmlstream.com/preview/front-v4.2/html/assets/svg/brands/layar-dark.svg"
  }
]

const HomeView = () => {

  return (
    <div className="container">

      {/*banner*/}
      <div className="grid grid-cols-2 items-center gap-x-[50px]">
        <div>
          <img
            src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/illustrations/oc-growing.svg"
            alt=""/>
        </div>
        <div>
          <h1 className="text-5xl font-bold	">
            Unlock your
            <br/><span className="text-blue">skills.</span>
          </h1>
          <p className="text-xl	my-5">
            With our platform, you can quantify your skills, grow in
            your role and stay relevant on critical topics.
          </p>
          <button className="button">
            Start a free trial
          </button>
        </div>
      </div>
      {/*banner*/}

      {/*programs*/}
      <div className="programs">
        <TitlePrimaryElement
          title="Check out our newest and most popular programs"
          cta="see all programs"
          url="/"
        />
        <ProgramsCarousel/>
      </div>
      {/*programs*/}

      {/*courses*/}
      <div className="mt-[60px] overflow-auto">
        <TitlePrimaryElement
          title="Featured courses"
          detail="Discover your perfect program in our courses."
          cta="see all courses"
          url="/courses"
        />
        <CoursesElement/>
      </div>
      {/*courses*/}

      {/*partner*/}
      <div
        className="customer relative bg-[#F7FAFF] mt-[100px] text-center py-[50px] mx-[calc(0px-((100vw-100%)/2)+15px)]">
        <div className="container">
          <img className="w-[100px] mx-auto"
               src="https://htmlstream.com/preview/front-v4.2/html/assets/svg/illustrations/oc-person-2.svg"
               alt=""/>
          <p className="my-[30px] text-black text-xl">
            “ The best part about Front Course is the selection. You can find a course for anything you want
            to learn! Thank you Front Course! You've renewed my passion for learning and my dream of
            becoming a web developer. ”
          </p>
          <h3 className="text-black text-xl">
            Martin
            <span className="block text-[#7A7A7A] mt-[5px] text-[15px]">Happy customer</span>
          </h3>
        </div>
      </div>
      {/*partner*/}

      {/*logo-partner*/}
      <div className="flex mt-[50px] gap-x-8 justify-center items-center">
        {
          logoPartner.map((value, index) => {
            return (
              <div className="" key={index}>
                <img src={value.url} className="w-9/12 mx-auto"
                     alt=""/>
              </div>
            )
          })
        }
      </div>
      {/*logo-partner*/}

      {/*form-registration*/}
      <div className="flex gap-x-[100px] items-center mt-[100px] ">
        <div>
          <h2 className="font-bold text-blue text-2xl">Thousands of experts around the world ready to help you.</h2>
          <p className="mt-2.5 mb-[30px]">
            See why leading organizations choose Front Course for Business as their destination for employee
            learning.
          </p>
          <p className="font-bold">
            Learn more about:
          </p>
          <ul className="pl-8 leading-9">
            <li className="list-disc">Unlimited access to the top 3,500+ courses</li>
            <li className="list-disc">Fresh content taught by 1,300+ experts – for any learning style</li>
            <li className="list-disc">Actionable learning insights</li>
          </ul>
        </div>
        <div className="min-w-[445px] max-w-[445px] shadow-msd rounded-5 bg-white">
          <h2
            className="py-[22px] bg-blue text-white text-center text-base font-bold rounded-t-5"
          >
            Try it free for 7 days
            <span
              className="bg-[#F6CD9E] text-black inline-block px-[15px] py-[5px] rounded-full ml-2"
            >
                starting at $59
              </span>
          </h2>
          <div className="p-5 grid gap-5 grid-cols-2">
            <div>
              <label className="text-xs">First name</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="text"/>
            </div>
            <div>
              <label className="text-xs">Last name</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="text"/>
            </div>
            <div className="col-[1/3]">
              <label className="text-xs">Email address</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="email"/>
            </div>
            <div>
              <label className="text-xs">Password</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="password"/>
            </div>
            <div>
              <label className="text-xs">Confirm password</label>
              <input className="w-full rounded-5 border h-10 px-2 mt-2.5" type="password"/>
            </div>
            <div className="text-sm col-[1/3]">
              <input type="checkbox"/> By submitting this form I have read and acknowledged<br/>
              the <span className="text-blue underline">Privacy Policy</span>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between">
            <p className="text-sm">Already have an account? <span className="text-blue underline">Log In</span></p>
            <button className="button">Sign up now</button>
          </div>
        </div>
      </div>
      {/*form-registration*/}

      {/*find-learning*/}
      <div
        className="mt-[100px] text-center bg-[url('https://htmlstream.com/preview/front-v4.2/html/assets/svg/components/shape-6.svg')] bg-cover bg-center bg-top">
        <h3 className="font-bold text-2xl">Find the right learning path for you</h3>
        <p className="my-2.5 text-base">Answer a few questions and match your goals to our programs.</p>
        <button className="button mt-8">Explore by category</button>
      </div>
      {/*find-learning*/}

    </div>
  );
};

export default HomeView;
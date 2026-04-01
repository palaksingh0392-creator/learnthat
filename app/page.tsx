import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-35">
        <div className="hero-bg absolute  inset-0 z-0"></div>
        <div className="relative z-2 text-center max-w-[780] px-6 animate-fade-up">
          <p className="text-[0.89rem] dark:text-white tracking-normal text-muted mb-5 font-normal">
            the best platform you visit for learning
          </p>
          <h1 className="font-serif font-normal text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.12] text-dark mb-5 tracking-tight">
            <TextAnimate animation="blurIn" className="m-0">
              Want to learn something, Switch to
            </TextAnimate>

            <strong> Learnthat</strong>
          </h1>
          <p className="text-base text-[#555] dark:text-white leading-[1.65] max-w-130 mx-auto mb-10 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            voluptatibus mollitia, fugiat ut eius quia nesciunt eveniet nostrum
            voluptas ea quasi fugit quisquam. Tenetur nisi maiores repellat fuga
            minus distinctio!
          </p>

          <ul className="flex fles-row gap-5 items-center  pl-57 ">
            {" "}
            <li>
              <Link href="#">
                <RainbowButton variant={"outline"}>
                  {" "}
                  Explore modules
                </RainbowButton>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#">
                <RainbowButton variant={"default"}>
                  {" "}
                  Watch tutorials
                </RainbowButton>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <section className="max-w-7xl mx-auto px-6 py-20 font-sans bg-">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold tracking-tight dark:text-white text-slate-900 leading-[1.1]">
                New Skills with CourseCo.
                <br />
                <span className="text-slate-800 dark:text-white">
                  A Detailed Look at Our Curriculum
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-slate-500 dark:text-white text-right max-w-50 text-sm">
                With real world projects to create and online classNamees that
                fit a busy routine
              </p>
              <button className="bg-slate-950 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-slate-800 transition-all font-medium">
                Get Started
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            <div className="md:col-span-4 bg-[#BEE9FF] rounded-[40px] p-10 flex flex-col gap-6">
              <div className="w-12 h-12 bg-[#9D95FF] rounded-full flex items-center justify-center text-dark shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-6"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 leading-tight mb-4">
                  Learn at your own pace
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Hands-on creative classes designed for your schedule.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 bg-[#C1FFD7] rounded-[40px] p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 bg-[#FF7E7E] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-6"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-slate-900 leading-tight">
                  CourseCo teachers are everyday creatives and professionals.
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  At CourseCo, we believe that everyone has something to teach.
                  Our teachers are not just experts; they are passionate mentors
                  helping you discover your own creativity.
                </p>
              </div>

              <div className="hidden lg:block w-full h-full bg-white/20 rounded-2xl min-h-50"></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <h4 className="text-xl font-bold mr-4">
              Our Features <br /> Special For You
            </h4>

            <span className="px-6 py-3 bg-slate-100 rounded-full text-slate-800 font-medium cursor-pointer hover:bg-slate-200 transition-colors">
              Get Certificate
            </span>
            <span className="px-6 py-3 bg-slate-100 rounded-full text-slate-800 font-medium cursor-pointer hover:bg-slate-200 transition-colors">
              Amazing Instructor
            </span>
            <span className="px-6 py-3 bg-slate-100 rounded-full text-slate-800 font-medium cursor-pointer hover:bg-slate-200 transition-colors">
              Lifetime Support
            </span>
            <span className="px-6 py-3 bg-slate-100 rounded-full text-slate-800 font-medium cursor-pointer hover:bg-slate-200 transition-colors">
              Video Lesson
            </span>
          </div>
        </section>
      </section>
      <hr />
    </>
  );
}

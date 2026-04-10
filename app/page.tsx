import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import courseData from "@/data/module.json"; // Import your JSON here

import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Particles } from "@/components/ui/particles";
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

            <strong> LearnWithPalak</strong>
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
        <div className="relative h-225 w-full overflow-hidden">
          <section className="max-w-7xl mx-auto px-6 py-20  ">
            {" "}
            <Meteors />
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 font-serif">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold tracking-tight dark:text-white text-slate-900 leading-[1.1]">
                  New Skills with <AuroraText>LearnWithPalakarnthat</AuroraText>
                  <br />
                  <span className="text-slate-800 dark:text-white">
                    A Detailed Look at Our Curriculum
                  </span>
                </h2>
              </div>

              <div className="flex flex-col items-end gap-4 font-light">
                <p className="text-slate-500 dark:text-white text-right max-w-50 text-sm">
                  With real world projects to create and online classNamees that
                  fit a busy routine
                </p>
                <button className="bg-slate-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-slate-800 transition-all font-medium">
                  Get Started
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
              <div className="md:col-span-4 bg-[#8bd8e0] rounded-[40px] p-10 flex flex-col gap-6">
                <div className="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center text-dark shrink-0">
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
                    LearnWithPalakarn at your own pace
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Hands-on creative classes designed for your schedule.
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 bg-[#9ac1fb] rounded-[40px] p-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 bg-[#000000] rounded-full flex items-center justify-center text-white shrink-0">
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
                    At CourseCo, we believe that everyone has something to
                    teach. Our teachers are not just experts; they are
                    passionate mentors helping you discover your own creativity.
                  </p>
                </div>

                <div className="hidden lg:block w-full h-full bg-white/20 rounded-2xl min-h-50"></div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <h4 className="text-3xl font-bold mr-4">
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
                Video LearnWithPalaksson
              </span>
            </div>{" "}
          </section>
        </div>
      </section>{" "}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <SparklesText>Popular Courses</SparklesText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {courseData.map((course) => (
              <Card
                key={course.id}
                className={`${course.theme.cardBg} border-none shadow-sm rounded-[40px] p-4 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <CardContent className="pt-6 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                      {/* You can replace this with course images later */}
                      🎓
                    </div>
                    <Badge
                      className={`${course.theme.badge} border-none rounded-md px-3 py-1 text-[10px]`}
                    >
                      {course.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-tight text-slate-900">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200" />{" "}
                      {/* Avatar Placeholder */}
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span> {course.rating}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t rounded-t-2xl border-slate-100/50 dark:bg-slate-500 pt-6">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {course.price}
                  </span>
                  <Button
                    variant={course.theme.buttonVariant as any}
                    className={`rounded-full px-6 ${course.id === 2 ? "bg-[#2a2d2f]  text-white hover:bg-[#8a82e6]" : ""}`}
                  >
                    Join Now →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#174169] text-white py-20 px-4 min-h-125 w-full relative overflow-hidden flex items-center justify-center">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        {/* 1. COMMUNITY CTA */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Join The Community
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
            At CourseCo, we believe that learning is a collaborative process.
          </p>

          {/* SUBSCRIPTION PILL */}
          <div className="relative max-w-md mx-auto group">
            <div className="flex items-center bg-white rounded-full p-1 pl-6 shadow-lg transition-all focus-within:ring-2 focus-within:ring-purple-500">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-none bg-transparent text-slate-900 focus-visible:ring-0 placeholder:text-slate-400 h-12 w-full"
              />
              <Button className="bg-[#1a1a1a] hover:bg-slate-800 text-white rounded-full px-8 py-6 h-12 flex items-center gap-2 shrink-0">
                Subscribe
                <span className="bg-purple-400/20 text-purple-300 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* 2. DECORATIVE BACKGROUND ICONS */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10 hidden xl:block pointer-events-none">
          <svg
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-500"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        </div>
      </section>
    </>
  );
}

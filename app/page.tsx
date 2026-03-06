import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-12">
        <div className="hero-bg absolute inset-0 z-0"></div>
        <div className="relative z-2 text-center max-w-[780] px-6 animate-fade-up">
          <p className="text-[0.78rem] tracking-normal text-muted mb-5 font-normal">
            the best platform you visit for learning
          </p>
          <h1 className="font-serif font-normal text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.12] text-dark mb-5 tracking-tight">
            Want to learn something, Switch to
            <br />
            <strong> Learnthat</strong>
          </h1>
          <p className="text-base text-[#555] leading-[1.65] max-w-130 mx-auto mb-10 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            voluptatibus mollitia, fugiat ut eius quia nesciunt eveniet nostrum
            voluptas ea quasi fugit quisquam. Tenetur nisi maiores repellat fuga
            minus distinctio!
          </p>

          <ul className="flex fles-row gap-5 items-center  pl-57 ">
            {" "}
            <li>
              <Link href="#">
                <button className="bg-stone-600 text-l text-white w-34 rounded-xl h-9">
                  Explore modules
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#">
                <button className="bg-red-400 text-l text-white w-34 rounded-xl h-9">
                  Watch tutorials
                </button>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

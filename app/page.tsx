import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-20">
        <div className="hero-bg absolute inset-0 z-0"></div>
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
      <section className="relative  flex flex-col items-center overflow-hidden p-20">
        <div>
          <h2 className="text-center text-2xl font-bold">Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            accusamus molestias harum? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quidem ad velit.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}

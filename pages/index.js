import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div
      className={`relative p-5 max-w-6xl mx-auto ${
        data.showCursor && "cursor-none"
      }`}
    >
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-5xl tablet:text-4xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="underline text-xl tablet:text-3xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-5xl tablet:text-4xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-5xl tablet:text-4xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
          <p className="mt-5">
            You will always hold a special place in my heart, now and forever.
          </p>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Our memories.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}

        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Last to say.</h1>
          <div className="tablet:m-10 mt-2 text-lg laptop:text-xl w-full laptop:w-3/5">
            <p>
              I feel grateful and happy because I&apos;ve been accepted at a new
              workplace, but at the same time, I feel deeply sad to leave this
              place, especially all of you Marketing Team, Komersial Team, my
              friends, my second family in LC.
            </p>
            <br />
            <p>
              Kampung Inggris LC is my very first workplace.{" "}
              <i className="underline">
                It&apos;s where I learned a lot not just about work, but about
                life, people, and myself.
              </i>{" "}
              And no matter where I go, this place will always be a part of my
              journey.
            </p>
            <br />
            <p>
              I also want to sincerely apologize if during my time here,
              I&apos;ve made mistakes whether through my attitude, words, or if
              my work was not good enough.
              <br />
              <i className="font-bold">
                Maaf temen-temen gabisa menemani momen Holiday Ceria. I&apos;m
                really sorry for leaving right in the middle of peak season{" "}
              </i>
              😭😭😭{" "}
            </p>
            <br />
            <p>
              Please pray for me in this new step of my life. I hope we can
              still keep in touch, and I hope LC continues to grow and become a
              blessing for many more people, as it has been for me.
              <b> Thank you</b> from the bottom of my heart.
            </p>
            <br />
            <p>May Allah reward all of you for your sincerity and hard work.</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

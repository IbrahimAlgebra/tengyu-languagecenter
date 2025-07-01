import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Kampung Inggris LC</h1>
          <div className="mt-2">
            <h1 className="text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl text-bold">
              #BestEnvironmentForTheBestResult
            </h1>
            {/* <Button type="primary">Schedule a call</Button> */}
            <div className="mt-10">{/* <Socials /> */}</div>
          </div>
        </div>
      </div>

      {/* masukkan video disini */}
      <div className="mt-10 p-2 laptop:p-0 flex justify-start">
        <video
          controls
          preload="none"
          loading="lazy"
          poster="https://res.cloudinary.com/dkde3c8zl/video/upload/so_1/v1751332252/copy_E0F6AF18-E43E-434F-AC7F-5A4B362F26A8_zdw0rh.jpg"
          className="w-full max-w-[600px] rounded-xl shadow-lg"
        >
          <source
            src="https://res.cloudinary.com/dkde3c8zl/video/upload/v1751332252/copy_E0F6AF18-E43E-434F-AC7F-5A4B362F26A8_zdw0rh.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://www.linkedin.com/in/chisna-ad">
          <a className="underline underline-offset-1">Chisna Wakatta</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;

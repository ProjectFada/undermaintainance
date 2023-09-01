import React from "react";
import Image from "next/image";
import { Button, IconButton, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Router, { useRouter } from "next/router";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
export default function Footer() {
  const router = useRouter();

  return (
    <div className="bg-footerbg">
      <div className="container-sk">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-4">
          <div>
            <Image
              placeholder="blur"
              src="/logo2.png"
              width={500}
              height={500}
              alt="logo"
              className="object-contain h-16 md:h-[65px] w-fit my-auto"
              blurDataURL="/blur.png "
            />

            <p className="text-sm md:text-base lg:text-lg text-white mt-3">
              Experience the epitome of luxury and elegance in the best
              apartment in Bangladesh. Nestled in a prime location, this
              exceptional residence offers an unparalleled living experience.
            </p>
          </div>

          <div className="flex md:justify-center">
            <div className="flex flex-col gap-4 text-white w-fit ">
              <p className="lg:text-lg md:text-base text-sm tracking-wide">
                Quick Links
              </p>

              <Link
                href="/"
                className={`${
                  router.pathname == "about-us" && "  text-red-600"
                }  lg:text-lg md:text-base text-sm tracking-wide   hover:text-red-600 duration-300`}
              >
                <DoubleArrowIcon /> About&nbsp;Us
              </Link>
              <Link
                href="/"
                className={`${
                  router.pathname == "all-listings" && "  text-red-600"
                }  lg:text-lg md:text-base text-sm tracking-wide   hover:text-red-600 duration-300`}
              >
                <DoubleArrowIcon /> All&nbsp;Listings
              </Link>
              <Link
                href="/"
                className={`${
                  router.pathname == "become-a-host" && "  text-red-600"
                }  lg:text-lg md:text-base text-sm tracking-wide   hover:text-red-600 duration-300`}
              >
                <DoubleArrowIcon /> Become&nbsp;Host
              </Link>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <p className="text-white lg:text-lg text-base tracking-wide text-center">
              Subscribe to our newsletter
            </p>

            <div className="border-2 border-primary3 hover:border-primary rounded-full mt-3 md:mt-5 overflow-hidden">
              <div className="flex ">
                <input
                  type="text"
                  className="bg-transparent text-white w-full focus:outline-none px-5 h-12"
                  placeholder="Enter your email here."
                />
                <Button className="h-12 px-10 rounded-full bg-primary3 hover:bg-primary text-white capitalize">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-5 justify-center md:justify-start border-b border-white">
          <Link href="https://www.facebook.com/" target="_blank">
            <IconButton className="text-white  bg-white/10 hover:bg-blue-500 duration-300">
              <FacebookIcon className="lg:text-2xl " />
            </IconButton>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <IconButton className="text-white  bg-white/10 hover:bg-blue-600 duration-300">
              <TwitterIcon className="lg:text-2xl " />
            </IconButton>
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <IconButton className="text-white  bg-white/10 hover:bg-red-500 duration-300">
              <InstagramIcon className="lg:text-2xl " />
            </IconButton>
          </Link>
        </div>

        <div className="flex gap-x-4 gap-y-1  md:flex-row flex-col items-center md:justify-between text-white lg:text-base text-sm py-5 flex-wrap ">
          <p>Copyright © 2023 FFR Dhaka</p>

          <Link
            href="https://buyoniasoft.com/"
            className="hover:text-red-500 duration-300"
          >
            Developed By BUYONIASOFT
          </Link>
        </div>
      </div>
    </div>
  );
}

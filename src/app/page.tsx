import BusinessCard from "@/components/business-card/BusinessCard.component";
import InspirePeople from "@/components/inspire/InspirePeople.component";
import NewsLetter from "@/components/new-letters/NewsLetter.component";
import { businessFeatures } from "@/constants/common.constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HomePage {}

// TODO: check tailwind work with COLORS constant
const HomePage: FC<HomePage> = () => {
  return (
    <div className="flex flex-col gap-[256px]">
      <div className="flex flex-row items-center justify-between">
        <div className="h-[256px] w-[30%]">
          <h1 className="text-2xl">A Digital Product Agency</h1>

          <p className="mt-14 max-w-sm text-base text-slate-500">
            Leading digital agency with solid design and development expertise.
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>

          <div>
            <button className="bg-accent hover:text-accent hover:outline-accent] mt-8 rounded-full px-10 py-5 font-bold text-white shadow-2xl hover:bg-white hover:outline hover:outline-2">
              Contact Now
            </button>

            <Image
              src="/svg/matrix-dot.svg"
              className="relative right-12 top-2"
              width={400}
              height={150}
              alt=""
            />
          </div>
        </div>

        <div className="relative">
          <Image
            src="/svg/circle.svg"
            alt=""
            className="absolute left-[-3.75rem] top-0 z-0"
            width={129}
            height={129}
            priority
          />

          <Image
            src="/svg/rectangle.svg"
            alt=""
            className="absolute bottom-[-5rem] right-10 z-0"
            width={129}
            height={129}
            priority
          />

          <Image
            src="/png/people-talk.png"
            alt="main picture"
            className="relative z-50 rounded-bl-[12.5rem] object-none"
            width={754}
            height={512}
            priority
          />
        </div>
      </div>

      <div className="mr-32 flex flex-row gap-20">
        <div>
          <h1 className="min-w-max text-3xl font-bold">Our Client</h1>

          <p className="mt-4 text-base text-slate-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        <Image src="/svg/google.svg" width={150} height={50} alt="" />
        <Image src="/svg/airbnb.svg" width={150} height={50} alt="" />
        <Image src="/svg/uber-eat.svg" width={150} height={50} alt="" />
        <Image src="/svg/amazon.svg" width={150} height={50} alt="" />
      </div>

      <div className="relative flex flex-row items-center justify-between gap-10">
        <div className="z-50">
          <h1 className="text-3xl font-bold">
            How can we help your Business ?
          </h1>

          <p className="mt-4 text-base text-slate-500">
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>

        <div className="z-50 mr-32 flex flex-row gap-10">
          {businessFeatures.map((features, id) => (
            <div
              key={id}
              className="flex flex-col gap-7"
              style={{
                marginTop: id % 2 === 0 ? "5rem" : "0",
              }}
            >
              {features.map((feat) => (
                <BusinessCard
                  key={feat.title}
                  width={75}
                  height={75}
                  src={feat.src}
                  title={feat.title}
                  content={feat.content}
                  colorTheme={feat.colorTheme}
                />
              ))}
            </div>
          ))}
        </div>

        <Image
          className="absolute right-0 z-20"
          src="/svg/second-background.svg"
          width="1047"
          height="619"
          alt=""
        />

        <Image
          className="absolute left-[-1.75rem] top-72 z-10 rotate-180"
          src="/svg/rectangle.svg"
          width="178"
          height="178"
          alt=""
        />

        <Image
          className="absolute bottom-0 left-0 z-0"
          src="/svg/matrix-dot.svg"
          width={400}
          height={150}
          alt=""
        />

        <Image
          className="absolute bottom-16 right-10 z-0"
          src="/svg/circle-no-fill.svg"
          width="120"
          height="120"
          alt=""
        />
      </div>

      <div className="flex flex-row items-center gap-20">
        <div className="relative min-h-max min-w-max">
          <Image
            className="rounded-2xl shadow-lg"
            src="/png/video-people-talk.jpg"
            width="550"
            height="372"
            alt=""
          />

          <Image
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
            width="78"
            height="78"
            src="/svg/play-button.svg"
            alt=""
          />
        </div>

        <div className="relative mr-32">
          <h1 className="relative z-50 pl-10 pt-10 text-3xl font-bold">
            Great Digital Product Agency since 2016
          </h1>

          <p className="relative z-50 mt-4 pl-10 text-base text-slate-500">
            Our Business Plan is a written document describing a company's core
            business activities, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according this
            requirement.
          </p>

          <Image
            className="absolute top-0 z-0"
            width="178"
            height="178"
            src="/svg/rectangle-blue.svg"
            alt=""
          />
        </div>
      </div>

      <div className="mr-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">What our happy client say</h1>

          <p className="text-base text-slate-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        <InspirePeople />
      </div>

      <div className="relative mr-32">
        <div className="relative z-50">
          <NewsLetter />
        </div>

        <Image
          className="absolute right-[-3rem] top-[-3rem] z-0"
          src="/svg/matrix-dot.svg"
          width="404"
          height="154"
          alt=""
        />

        <Image
          className="absolute bottom-[-3rem] left-[-3rem] z-0 rotate-90"
          src="/svg/rectangle.svg"
          width="178"
          height="178"
          alt=""
        />
      </div>

      <div className="border-t-grey-600 mr-32 grid grid-cols-6 gap-24 border-t-2 pt-14">
        <div className="col-span-2 flex flex-col gap-7">
          <p className="text-base">A+ Studio</p>

          <p className="text-base text-slate-500">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>

          <div className="flex flex-row gap-4">
            <Link href="#facebook">
              <Image src="/svg/facebook.svg" width="36" height="36" alt="" />
            </Link>

            <Link href="#twitter">
              <Image src="/svg/twitter.svg" width="36" height="36" alt="" />
            </Link>

            <Link href="#liked-in">
              <Image src="/svg/linked-in.svg" width="36" height="36" alt="" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="min-w-max text-2xl font-bold">What We Do</h2>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#Web Design"
              className="min-w-max text-base text-slate-500"
            >
              Web Design
            </Link>

            <Link
              href="#App Design"
              className="min-w-max text-base text-slate-500"
            >
              App Design
            </Link>

            <Link
              href="#Social Media Manage"
              className="min-w-max text-base text-slate-500"
            >
              Social Media Manage
            </Link>

            <Link
              href="#Market Analysis Project"
              className="text-base text-slate-500"
            >
              Market Analysis Project
            </Link>
          </div>
        </div>

        <div>
          <h2 className="min-w-max text-2xl font-bold">Company</h2>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#Web Design"
              className="min-w-max text-base text-slate-500"
            >
              About us
            </Link>

            <Link
              href="#App Design"
              className="min-w-max text-base text-slate-500"
            >
              Career
            </Link>

            <Link
              href="#Social Media Manage"
              className="min-w-max text-base text-slate-500"
            >
              Become Investor
            </Link>
          </div>
        </div>

        <div>
          <h2 className="min-w-max text-2xl font-bold">Support</h2>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#Web Design"
              className="min-w-max text-base text-slate-500"
            >
              FAQ
            </Link>

            <Link
              href="#App Design"
              className="min-w-max text-base text-slate-500"
            >
              Policy
            </Link>

            <Link
              href="#Social Media Manage"
              className="min-w-max text-base text-slate-500"
            >
              Business
            </Link>
          </div>
        </div>

        <div>
          <h2 className="min-w-max text-2xl font-bold">Contact</h2>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#Web Design"
              className="min-w-max text-base text-slate-500"
            >
              Whatsapp
            </Link>

            <Link
              href="#App Design"
              className="min-w-max text-base text-slate-500"
            >
              Support 24
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

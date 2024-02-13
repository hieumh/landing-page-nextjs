"use client";
import Image from "next/image";
import { ChangeEventHandler, FC, useState } from "react";

interface INewsLetter {}

const NewsLetter: FC<INewsLetter> = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event?.target?.value);
  };

  const handleContact = () => {
    // send data here
  };

  return (
    <div className="bg-primary relative h-72 w-full rounded-[5rem] p-24">
      <h1 className="text-3xl font-bold">Subscribe Newsletter</h1>

      <p className="mt-4 text-base text-slate-500">
        I will update good news and promotion service not spam
      </p>

      <div className="absolute left-3/4 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address..."
            className="w-96 rounded-[5rem] p-5 shadow-2xl outline-none"
          />

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-[5rem] bg-blue-800 px-4 py-3 text-xs font-medium text-white hover:bg-blue-400"
            onClick={handleContact}
          >
            Contact Now
          </button>
        </div>
      </div>

      <Image
        className="absolute bottom-0 right-0 top-0"
        src="/svg/new-letters-background.svg"
        width="497"
        height="292"
        alt=""
      />
    </div>
  );
};

export default NewsLetter;

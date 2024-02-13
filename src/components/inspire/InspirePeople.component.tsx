"use client";
import { ChangeEventHandler, FC, useState } from "react";
import Image from "next/image";

interface IInspirePeople {}

const InspirePeople: FC<IInspirePeople> = () => {
  const [page, setPage] = useState<number>(0);

  const pages = Array.from({ length: 5 }, (_, id) => id);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPage(Number(event.target.value));
  };

  return (
    <div className="mt-32 flex flex-row items-center gap-16">
      <div className="relative min-w-max">
        <Image
          className="relative z-50 rounded-bl-full rounded-br-full rounded-tl-full shadow-lg"
          src="/png/avatar.jpg"
          width="300"
          height="300"
          alt="avatar"
        />

        <Image
          className="absolute right-[-6rem] top-[-6rem] z-0"
          src="/svg/matrix-dot.svg"
          width="404"
          height="154"
          alt=""
        />

        <Image
          className="absolute bottom-[-1rem] left-[-1rem] z-0"
          src="/svg/circle-no-fill.svg"
          width="129"
          height="129"
          alt=""
        />
      </div>

      <div className="flex flex-grow-0 flex-col gap-4">
        <h1 className="text-3xl font-bold">Matthew Paul</h1>

        <p className="w-full text-base text-slate-500">
          Perfect, very good job! Thank you for the amazing design and work.
          Really impressed with the high quality and quick turnaround time.
          Highly recommend.
        </p>

        <div className="flex flex-row gap-4">
          {pages.map((id) => (
            <input
              key={id}
              type="radio"
              checked={id === page}
              value={id}
              onChange={handleChange}
              className="h-6 w-6 border-gray-300 bg-blue-500 text-blue-600 accent-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
          ))}
        </div>
      </div>

      <div className="min-w-max">
        <Image
          src="/svg/group-people.svg"
          width="348"
          height="355"
          alt="group people"
        />
      </div>
    </div>
  );
};

export default InspirePeople;

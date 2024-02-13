import Image from "next/image";
import { FC } from "react";

interface IBusinessCardProps {
  src: string;
  title: string;
  content: string;
  colorTheme: string;

  width?: number;
  height?: number;
}

const BusinessCard: FC<IBusinessCardProps> = ({
  src,
  title,
  content,
  width,
  height,
  colorTheme,
}) => {
  return (
    <div className="flex h-96 w-72 flex-col items-center justify-center gap-7 rounded-2xl bg-white p-8 shadow-2xl">
      <div
        className="flex h-28 w-28 justify-center rounded-[20px]"
        style={{
          backgroundColor: colorTheme || "white",
        }}
      >
        <Image src={src} width={width} height={height} alt="" />
      </div>

      <h3 className="text-center text-2xl font-semibold">{title}</h3>

      <p className="max-w-sm text-center text-base text-slate-500">{content}</p>
    </div>
  );
};

export default BusinessCard;

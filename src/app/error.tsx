"use client";
import { FC } from "react";

interface IError {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<IError> = ({ error, reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>

      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;

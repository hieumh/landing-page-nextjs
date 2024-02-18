import { FC } from "react";

interface IFallbackRoot {}

const FallbackRoot: FC<IFallbackRoot> = () => {
  return <div>fallback</div>;
};

export default FallbackRoot;

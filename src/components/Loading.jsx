import React from "react";
import { Plane } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Plane color="#00BFFF" height={550} width={80} />
    </div>
  );
};

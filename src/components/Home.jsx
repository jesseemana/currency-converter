import React from "react";
import { Fetch } from "./Fetch";

export const Home = () => {
  return (
    <div className="">
      <header className="border bg-blue-300 py-7 mx-auto">
        <h2 className="uppercase text-3xl font-bold text-gray-500 text-center">
          exchange rates
        </h2>
      </header>
      <Fetch />
    </div>
  );
};

import React, { useState } from "react";
import { useEffect } from "react";

export const ExchangeRates = ({
  setQuery1,
  setQuery2,
  setAmount,
  convertRates,
  loading,
  setLoading,
  result
}) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [newAmount, setNewAmount] = useState(0);

  const handleSubmit = () => {
    convertRates();
    setLoading(true)
  };

  useEffect(() => {
    setAmount(newAmount);
  });

  useEffect(() => {
    setQuery1(value1);
  }, [value1]);

  useEffect(() => {
    setQuery2(value2);
  }, [value2]);

  return (
    <div className="bg-blue-500 h-[100vh]">
      <h2 className="text-center uppercase py-5">Exchange Rates</h2>
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <div>
          <p className="text-white capitalize text-lg font-bold">amount</p>
          <input
            type="number"
            name="amount"
            className="bg-gray-300 rounded-md px-2 py-2 text-gray-500 w-[200px] h-[50px] outline-none"
            onChange={(e) => setNewAmount(e.target.value)}
          />
        </div>

        <div>
          <p className="text-white capitalize text-lg font-bold">from:</p>
          <input
            type="text"
            name="query1"
            placeholder="Enter currency"
            className="bg-gray-300 rounded-md px-2 py-2 text-gray-500 w-[200px] h-[50px] outline-none"
            onChange={(e) => setValue1(e.target.value)}
          />
        </div>

        <div>
          <p className="text-white capitalize text-lg font-bold">to:</p>
          <input
            type="text"
            name="query2"
            placeholder="Enter currency"
            className="bg-gray-300 rounded-md px-2 py-2 text-gray-500 w-[200px] h-[50px] outline-none"
            onChange={(e) => setValue2(e.target.value)}
          />
        </div>

        <button
          className="border text-gray-500 rounded-md py-2 uppercase bg-white w-[100px]"
          onClick={handleSubmit}
        >
          get rates
        </button>
        <div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <p className="text-white capitalize text-4xl font-bold">{`${newAmount} ${result.query.from} is trading at ${result.result} ${result.query.to}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

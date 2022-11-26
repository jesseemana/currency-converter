import React, { useEffect, useState } from "react";
import { CurrentTrade } from "./CurrentTrade";
import { ExchangeRates } from "./ExchangeRates";

let key = "YNR6QewLvpBDzl2e696M7PtiCbFsqle6";

export const Fetch = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [query1, setQuery1] = useState(null);
  const [query2, setQuery2] = useState(null);
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // console.log(key);

  const convertRates = () => {
    console.log("Data Fetched!!!");
    try {
      const myHeaders = new Headers();
      myHeaders.append("apikey", key);

      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${query2}&from=${query1}&amount=${amount}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          // setTo(data.query.to);
          // setFrom(data.query.from);
          setResult(data);
          console.log(result);
        });
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useEffect(() => {
    convertRates();
  }, []);

  return (
    <div>
      <ExchangeRates
        setQuery1={setQuery1}
        setQuery2={setQuery2}
        setAmount={setAmount}
        convertRates={convertRates}
        setLoading={setLoading}
        loading={loading}
        result={result}
        from={from}
        to={to}
      />

      <CurrentTrade />
    </div>
  );
};

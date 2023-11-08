"use client";
import { setCurrency } from "@/redux/features/currency-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Convert() {
  const [currencyList, setCurrencyList] = useState([]);
  const amount = useAppSelector((state) => state.currencyReducer.currentAmount);
  const currency = useAppSelector(
    (state) => state.currencyReducer.currentCurrency
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    fetch(
      `https://api.exchangeratesapi.io/v1/latest?access_key=${process.env.NEXT_PUBLIC_CONVERT_KEY}&base=USD&symbols=EUR,GBP,JPY&amount=20`
    )
      .then((res) => res.json())
      .then((data: any) => {
        // @ts-ignore
        setCurrencyList([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <label className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Pick your currency:
        <select
          onChange={(e) => {
            dispatch(setCurrency(e.target.value));
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={currency} key="init">
            Choose currency
          </option>
          {currencyList.map((curr: any) => {
            return (
              <option key={curr} value={curr}>
                {curr}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

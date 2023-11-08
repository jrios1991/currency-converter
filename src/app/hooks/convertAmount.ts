"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount } from "@/redux/features/currency-slice";

export default function ConvertAmount(priceToConvert: number) {
  const [currentAmount, setCurrentAmount] = useState(priceToConvert);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setAmount(priceToConvert));
  const amount = useAppSelector((state) => state.currencyReducer.currentAmount);
  const currency = useAppSelector(
    (state) => state.currencyReducer.currentCurrency
  );

  useEffect(() => {
    fetch(
      `https://api.exchangeratesapi.io/v1/convert?access_key=${process.env.NEXT_PUBLIC_CONVERT_KEY}&from=USD&to=${currency}&amount=${amount}`
    )
      .then((res) => res.json())
      .then((data: any) => {
        setCurrentAmount(data.result);
        console.log(data.result);
      });
  }, [amount, currency]);
  return currentAmount;
}

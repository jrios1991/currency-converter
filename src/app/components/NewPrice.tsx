"use client";
import { useAppSelector } from "@/redux/store";
import ConvertAmount from "../hooks/convertAmount";

export default function NewPrice(props: any) {
  const currency = useAppSelector(
    (state) => state.currencyReducer.currentCurrency
  );
  return (
    <p className="title-font font-medium text-2xl text-gray-900">
      <span>{currency} </span>
      {ConvertAmount(props.children)}
    </p>
  );
}

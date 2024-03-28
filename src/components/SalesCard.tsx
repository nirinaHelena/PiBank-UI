/* eslint-disable @next/next/no-img-element */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";

export type SalesProps = {
  name: string;
  account: string;
  saleAmount: string;
  date: string;
};

export default function SalesCard(props: SalesProps) {
  const getColor = (amount: string) => {
    const num = parseFloat(amount.replace(/[^\d.-]/g, ""));
    return num >= 0 ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="  flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className=" h-10 w-10 rounded-full bg-gray-100 p-1">
          <img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`} alt="avatar" />
        </div>
        <div className="text-sm">
            <p>{props.name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
                {props.account}
            </div>
        </div>
      </section>
      <p className={getColor(props.saleAmount)}>{props.saleAmount}</p>
    </div>
  );
}
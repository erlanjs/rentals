import React from "react";

export default function Card({ data }) {
  return (
    <div className="w-[275px] flex flex-col items-center gap-4">
      <img src={data.images[0].image} alt="" className="w-full " />
      <h3 className="text-[#FF8AB5] font-bold">{data.name}</h3>
      <p className="text-[#FF8AB5]">{data.price}c</p>
      <button className="py-[13px] px-[30px] rounded-md bg-[#FF8AB5] text-white font-semibold">
        Добавить в корзину
      </button>
    </div>
  );
}

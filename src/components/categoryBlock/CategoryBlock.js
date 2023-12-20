import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CategoryBlock() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("https://nurba96.pythonanywhere.com/rentals/category/").then(
      (data) => {
        setData(data.data);
        console.log(data);
      }
    );
  }, []);

  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="text-[42px] font-semibold">Категории платьев</h3>
          <p className="text-[24px] font-light text-center">
            Минимализм, уникальность, качество и <br /> исключительно
            натуральные материалы
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {data.map((category) => (
            <div
              className="p-6 rounded-lg font-bold border-solid border-[3px] border-red cursor-pointer"
              key={category.id}
              onClick={() =>
                navigate(`/category-detail/${category.name}/${category.id}`)
              }
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

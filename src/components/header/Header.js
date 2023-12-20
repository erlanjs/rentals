import React from "react";
import LogoIcon from "../../images/LogoIcon";

export default function Header({ mode }) {
  const links = [
    {
      name: "Главная",
    },
    {
      name: "Магазин",
    },
    {
      name: "О проекте",
    },
    {
      name: "Контакты",
    },
  ];

  return (
    <div className="absolute top-0 w-full z-10 py-3">
      <div className="container">
        <div className=" flex justify-between items-center">
          <LogoIcon color={mode ? "black" : "white"} />
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <a
                href="#"
                className="text-white font-semibold text-lg"
                style={{ color: mode ? "black" : "white" }}
                key={index}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

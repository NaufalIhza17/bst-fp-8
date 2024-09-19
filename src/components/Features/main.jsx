"use client";

import React, { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowHeight/main.jsx";

export const featuresData = [
  {
    peer: "feat-one",
    number: "01",
    title: "Sensor Open Lid",
    desc: "Sensor opens the lid automatically in 1 second, closes it after 5 seconds if no object is detected",
    imgPath: "/images/features-1.png",
  },
  {
    peer: "feat-two",
    number: "02",
    title: "IPX5 Water Proof",
    desc: "Waterproof tech keeps the smart sensor safe from splashes and moisture, preventing potential damage",
    imgPath: "/images/features-1.png",
  },
  {
    peer: "feat-three",
    number: "03",
    title: "Modern Slim Design",
    desc: "Upgrade your space with a modern blend of functionality and aesthetic in a space-saving silhouette",
    imgPath: "/images/features-1.png",
  },
  {
    peer: "feat-four",
    number: "04",
    title: "High Quality ABS",
    desc: "Material Upgrade durability and style with premium ABS construction, ensuring long-lasting performance",
    imgPath: "/images/features-1.png",
  },
];

export default function FeaturesComponents() {
  const windowWith = useWindowWidth();
  const [isShort, setIsShort] = useState(false);
  const [isOpenArray, setIsOpenArray] = useState(featuresData.map(() => false));
  const changeIsOpen = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  useEffect(() => {
    if (windowWith <= 1320) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [windowWith]);

  return (
    <section className="w-full bg-white bg-review bg-center py-20 px-20">
      <div className="layout">
        <div className="flex justify-between gap-[clamp(2.5rem,-3.192rem+8.894vw,4.813rem)]">
          <h1 className="font-semibold text-[#101010] text-2xl min-w-max">
            <span className="text-[#FF8A00]">/ </span>Superior Features
          </h1>
          <div className="grid gap-16 max-w-[980px]">
            <div className="grid gap-4">
              <p className="font-medium leading-none text-[32px] text-[#101010]">
                Immerse yourself in the unparalleled experience of enjoying the
                inherent advantages seamlessly{" "}
                <span className="text-[#667085]">
                  integrated into our exceptional products, designed to enhance
                  and elevate every aspect of your use.
                </span>
              </p>
              <p className="text-[#667085] font-medium">
                Embark on Superiority: Explore and Experience the Inherent
                Benefits Woven into Our Exceptional Products, Elevating Your
                Every Interaction.
              </p>
            </div>
            <div className="grid border-b border-[#EDEDED]">
              {featuresData.map((data, idx) => {
                const isOpen = isOpenArray[idx];
                return (
                  <div
                    key={idx}
                    className={`py-10 grid border-t ${
                      isOpen ? "border-[#101010]" : "border-[#EDEDED]"
                    }`}
                    onClick={() => changeIsOpen(idx)}
                  >
                    <div
                      className={`flex justify-between gap-3  ${
                        isShort ? "flex-col items-start" : "items-center"
                      } ${isOpen ? "text-[#101010]" : "text-[#5E626E]"}`}
                    >
                      <div className="flex items-center gap-3">
                        <p className="font-bold">
                          {data.number}
                        </p>
                        <p className="font-bold text-[28px] min-w-max">
                          {data.title}
                        </p>
                      </div>
                      <p
                        className={`${
                          !isShort && "max-w-[476px]"
                        } text-lg`}
                      >
                        {data.desc}
                      </p>
                    </div>
                    <img
                      src={data.imgPath}
                      alt=""
                      width={980}
                      height={375}
                      className={`rounded-2xl ${
                        isOpen ? "mt-16" : "opacity-0 invisible w-0 h-0"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

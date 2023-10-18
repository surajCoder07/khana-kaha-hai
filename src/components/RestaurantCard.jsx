/* eslint-disable react/prop-types */
import React from "react";
import { img_cdn } from "../utils/constants";
import { GrLocationPin } from "react-icons/gr";

const RestaurantCard = ({ card }) => {
  return (
    <div
      key={card?.id}
      className=" bg-pink-100 min-h-[300px] my-4 flex-shrink-0 w-[280px] cursor-pointer max-sm:w-full  hover:shadow-md duration-200 rounded-md relative"
    >
      <img
        src={img_cdn + card?.cloudinaryImageId}
        className="w-full h-auto rounded-t-md"
      />
      <div className="p-3 flex flex-col gap-2">
        <h1 className="font-semibold text-xl  ">{card?.name}</h1>
        <p className="text-sm">{card?.cuisines.join(", ")}</p>
        <p className="flex items-center">
          <GrLocationPin color="#4E9F3D" />
          {card?.areaName}
        </p>
        <div className="flex justify-between ">
          <p
            className={
              (card?.avgRating >= 4 ? "bg-primary-green " : " bg-red-600  ") +
              " text-white px-2 rounded-sm  "
            }
          >
            {card?.avgRatingString}
          </p>
          <span className="font-semibold text-gray-700">
            {card?.sla?.slaString}
          </span>
          <span className="font-semibold text-gray-700">
            {card?.costForTwo}
          </span>
        </div>
      </div>
      <div
        className={
          (card?.veg ? " border-green-500  " : " border-red-500 ") +
          " bg-white border-2 w-[30px] h-[30px] absolute top-0 right-0 flex items-center justify-center"
        }
      >
        <span
          className={
            (card?.veg ? " bg-green-500 " : " bg-red-500 ") +
            " w-[10px] h-[10px] rounded-full "
          }
        ></span>
      </div>
    </div>
  );
};

export default RestaurantCard;

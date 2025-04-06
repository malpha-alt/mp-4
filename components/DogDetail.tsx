"use client";

import { Breed } from "../types";
import Image from "next/image";

export default function DogDetail({ breed }: { breed: Breed }) {
  // Get image URL from either the root or image object
  const imageUrl = breed.url || breed.image?.url;

  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg my-auto">
      <div className="flex flex-row w-[90%] justify-evenly items-center my-6">
        <button
          onClick={() => (window.location.href = `/`)}
          className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-color hover:cursor-pointer"
        >
          Home
        </button>
        <h1 className="text-2xl font-bold  text-white my-4">{breed.name}</h1>
      </div>
      <div className="flex flex-row w-[90%] rounded-lg shadow-lg my-6">
        <Image
          src={imageUrl || ''}
          alt={breed.name}
          className="w-[40%] h-auto object-cover rounded-lg"
          width={256}
          height={256}
        />
        <div className=" grid grid-cols-2 items-center my-10 mx-auto w-[50%]">
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold">Temperament</h2>
            <p className="text-gray-300">{breed.temperament}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold">Life Span</h2>
            <p className="text-gray-300">{breed.life_span}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold">Height</h2>
            <p className="text-gray-300">{breed.height.metric}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold  ">Breed Group</h2>
            <p className="text-gray-300">{breed.breed_group}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold">Weight</h2>
            <p className="text-gray-300">{breed.weight.metric}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-gray-200 font-bold">Bred For</h2>
            <p className="text-gray-300">{breed.bred_for}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { Breed } from "../types";

export default function DogView({ breed }: { breed: Breed }) {
  // Get image URL from either the root or image object
  const imageUrl = breed.url || breed.image?.url;

  console.log(breed);

  return (
    <div className="flex flex-col items-center w-[100% m-auto p-4">
      <div className="flex flex-col items-center w-[50%]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={breed.name}
            className="w-64 h-64 object-cover rounded-lg mb-4"
          />
        )}
      </div>
      <div className="flex flex-col items-center gap-y-4 w-[50%]">
        <h2 className="text-2xl font-semibold text-white mb-2">{breed.name}</h2>

          <button
            onClick={() => window.location.href = `/dog/${breed.id}`}
            className="px-4 py-2  bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-color hover:cursor-pointer"
          >
            Read More
          </button>
      </div>
    </div>
  );
}

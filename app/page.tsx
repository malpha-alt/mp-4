import DogView from "@/components/DogView";
import { getDog } from "@/lib/getDog";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const breed = await getDog();

  // console.log(breed);

  return (
    <div className=" flex flex-col container w-[100%] m-auto p-4">
      <div className="text-center p-6 mb-6">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to Random Dog Finder</h1>
        <p className="text-gray-300">
          This application helps you discover random dogs from the DaaS Database.
        </p>
      </div>
      <div className="items-center w-[40%] mx-auto bg-gray-800 rounded-lg shadow-lg my-auto">
        <DogView breed={breed} />
      </div>
    </div>
  );
}
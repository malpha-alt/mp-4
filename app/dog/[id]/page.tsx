import { getDogById } from "../../../lib/getDogById";
import DogDetail from "@/components/DogDetail";

export default async function DogPage({ params }: { params: { id: string } }) {
  const breed = await getDogById(params.id);
  
  return (
    <div className=" w-[80%] mx-auto py-8">
        <DogDetail breed={breed} />
    </div>
  );
}
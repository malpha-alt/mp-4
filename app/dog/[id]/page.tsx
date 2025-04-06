import { getDogById } from "../../../lib/getDogById";
import DogDetail from "@/components/DogDetail";

type Props = {
  params: {
    id: string;
  };
};

export default async function DogPage({ params }: Props) {
  const breed = await getDogById(params.id);
  
  return (
    <div className="w-[80%] mx-auto py-8">
      <DogDetail breed={breed} />
    </div>
  );
}
import { getDogById } from "../../../lib/getDogById";
import DogDetail from "@/components/DogDetail";

interface PageProps {
  params: { id: string };
}

export default async function DogPage({ params }: PageProps) {
  const { id } = params;
  const breed = await getDogById(id);

  return (
    <div className="w-[80%] mx-auto py-8">
      <DogDetail breed={breed} />
    </div>
  );
}
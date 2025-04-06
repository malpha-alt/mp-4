import { getDogById } from "../../../lib/getDogById";
import DogDetail from "@/components/DogDetail";
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { id: string };
}

export default async function DogPage({ params }: Props) {
  const { id } = params;
  const breed = await getDogById(id);

  return (
    <div className="w-[80%] mx-auto py-8">
      <DogDetail breed={breed} />
    </div>
  );
}
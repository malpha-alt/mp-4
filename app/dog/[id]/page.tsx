import { getDogById } from "../../../lib/getDogById";
import DogDetail from "@/components/DogDetail";

type Params = Promise<{
  id: string
}>;

export default async function DogPage(props: { params: Params }) {
    const params = await props.params;
    const breed = await getDogById(params.id);

  return (
    <div className="w-[80%] mx-auto py-8">
      <DogDetail breed={breed} />
    </div>
  );
}
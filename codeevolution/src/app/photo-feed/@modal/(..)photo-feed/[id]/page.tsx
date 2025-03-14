import Image from "next/image";
import wondersImages, { WonderImage } from "../../../wonder";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

  if (!photo) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full relative">
        <h1 className="text-center text-2xl font-bold">{photo.name}</h1>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square rounded-md"
        />
        <div className="text-black mt-3">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}

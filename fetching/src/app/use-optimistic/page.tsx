import Link from "next/link";

const ViewProducts = async () => {
  return (
    <div className="max-w-fit mx-auto my-20">
      <h1 className="font-bold text-[50px]">Welcome To Jungle</h1>
      <div className="flex flex-col gap-2">
        <Link href={"/use-optimistic/view-card"}>View Card</Link>
        <Link href={"/use-optimistic/create"}>Create Card</Link>
      </div>
    </div>
  );
};

export default ViewProducts;

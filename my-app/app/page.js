import ImageSlideshow from "@/components/images/image-slide-show";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex">
        <div className="w-1/2">
          <ImageSlideshow />
        </div>
        <div className="max-w-[600px]">
          <div className="mt-10">
            <h1 className="bg-gradient-to-r from-[#fd4715] to-[#f9b241] bg-clip-text text-transparent text-5xl font-bold">
              NextLevel Food for Foodiest
            </h1>
            <p className="text-xl my-3">
              Taste & share food from other countries
            </p>
          </div>
          <div className="flex gap-10 items-center my-5">
            <Link
              href="/community"
              className="bg-gradient-to-r from-[#fd4715] to-[#f9b241] bg-clip-text text-transparent text-[30px] font-thin"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="bg-gradient-to-r from-[#fd4715] to-[#f9b241] px-5 py-3 rounded-lg hover:opacity-90"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="text-center font-bold text-[42px] mt-72">
            How it works
          </h2>
          <p className="text-[16px] text-center my-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-[16px] text-center my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2 className="text-center font-bold text-[42px] mt-20">
            Why NextLevel Food?
          </h2>
          <p className="text-[16px] text-center my-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-[16px] text-center my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

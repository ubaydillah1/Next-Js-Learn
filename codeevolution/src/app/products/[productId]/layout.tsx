"use client";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error Loading Product");
  }
  return (
    <>
      {children}
      <h2 className="text-center text-[20px]">Features products</h2>
    </>
  );
}

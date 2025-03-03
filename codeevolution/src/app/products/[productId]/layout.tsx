export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2 className="text-center text-[20px]">Features products</h2>
    </>
  );
}

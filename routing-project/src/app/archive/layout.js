import DefaultLatest from "./@latest/defaultLates";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div className="container mx-auto px-6 py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">News Archive</h1>
      <div className="grid grid-cols-1 gap-8">
        <section className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Archive</h2>
          <div>{archive}</div>
        </section>
        <section className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Latest</h2>
          <div>{latest ? latest : <DefaultLatest />}</div>
        </section>
      </div>
    </div>
  );
};

export default ArchiveLayout;

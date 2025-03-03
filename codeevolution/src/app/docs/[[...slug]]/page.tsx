const Docs = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs with feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs with feature {slug[0]}</h1>;
  }
  return <div>Docs Home Page</div>;
};

export default Docs;

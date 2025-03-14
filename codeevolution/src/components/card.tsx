const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      {children}
    </div>
  );
};

export default Card;

const Shim = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-72 h-72 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shim;

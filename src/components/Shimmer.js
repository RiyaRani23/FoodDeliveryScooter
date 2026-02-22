const ShimmerCard = () => (
  <div className="m-2 p-6 w-full max-w-[340px] rounded-[2rem] bg-white shadow-lg border border-gray-100 animate-pulse">
    {/* Image Placeholder */}
    <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4"></div>
    {/* Title Placeholder */}
    <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-3"></div>
    {/* Subtitle Placeholder */}
    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-8 mt-8">
      {Array(8).fill("").map((_, i) => <ShimmerCard key={i} />)}
    </div>
  );
};

export default Shimmer;
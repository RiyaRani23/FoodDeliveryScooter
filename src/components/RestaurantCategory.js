import ItemCategory from "./ItemCategory";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mx-auto my-4 w-6/12 bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={handleClick}
      >
        <span className="font-extrabold text-gray-800 text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className={`transform transition-transform duration-300 ${showItems ? "rotate-180" : "rotate-0"}`}>
          🔽
        </span>
      </div>

      {/* Accordion Body */}
      {showItems && <ItemCategory items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
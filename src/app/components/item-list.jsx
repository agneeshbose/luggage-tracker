import { useLocalStorage } from "@/hooks/use-local-storage";
import { useEffect, useState } from "react";
import Card from "./card";

const ItemList = () => {
  const localStorage = useLocalStorage();
  const [listItems, setListItems] = useState([]);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteItem = (itemIndex) => {
    setDeleting(true);
    const items = [...listItems];
    items.splice(itemIndex, 1);
    setListItems(items);
    localStorage.set("luggageItems", items);
    setDeleting(false);
  };

  useEffect(() => {
    const items = localStorage.get("luggageItems") || [];
    setListItems(items);
  }, []);

  if (listItems?.length === 0) {
    return <div>No items found</div>;
  }

  return (
    <div className="w-full h-[500px] overflow-y-auto pr-2 custom-scrollbar">
      {listItems.map((item, index) => (
        // Assuming a unique name for each item since we do not have a unique id to be used as key
        <Card key={item.name}>
          <div>
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-100">{item.destination}</div>
          </div>
          <button
            onClick={() => handleDeleteItem(index)}
            className="text-white hover:underline cursor-pointer select-none"
          >
            {deleting ? <Spinner /> : "Delete"}
          </button>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;

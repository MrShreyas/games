import { useState } from "react";

interface Props {
  category: string[];
  heading: string;
  onSelectedItems: (items: string[]) => void;
}

function ListGroups({ category, heading, onSelectedItems }: Props) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedItems);
    onSelectedItems(updatedItems);
  };

  return (
    <>
      <div className="container bg-primary ">
        <h1>{heading}</h1>

        {category.length === 0 && <p>No category found</p>}
        <ul className="list-group  ">
          {category.map((item, index) => (
            <li
              onClick={() => handleItemClick(item)}
              key={index}
              className={
                selectedItems.includes(item)
                  ? "list-group-item active"
                  : "list-group-item  "
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroups;

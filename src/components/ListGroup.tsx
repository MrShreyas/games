import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroups({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;

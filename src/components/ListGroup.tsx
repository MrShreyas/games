import { useState } from "react";

interface Props {
  category: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroups({ category, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="col ">
        <h1>{heading}</h1>
        {category.length === 0 && <p>No category found</p>}
        <ul className="list-group">
          {category.map((item, index) => (
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
      </div>
    </>
  );
}

export default ListGroups;

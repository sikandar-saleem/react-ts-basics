import { useState } from "react";

interface Prop {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectedItem }: Prop) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event: React.MouseEvent, index: any, item: string) => {
    setSelectedIndex(index);
    console.log(event);
    onSelectedItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => handleClick(event, index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

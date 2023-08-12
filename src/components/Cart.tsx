import React from "react";

interface Props {
  items: string[];
  onClear: () => void;
}

export default function Cart({ items, onClear }: Props) {
  return (
    <>
      <strong>Products</strong>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
}

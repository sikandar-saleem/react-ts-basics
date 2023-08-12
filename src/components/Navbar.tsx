import React from "react";

interface Props {
  itemsCount: number;
}

export default function Navbar({ itemsCount }: Props) {
  return <div>Navbar {itemsCount}</div>;
}

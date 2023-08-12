import { useState } from "react";

export default function Styled() {
  const [person, setPerson] = useState({
    id: 1,
    address: {
      city: "Lahore",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["mushrooms"],
  });

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", qty: 112 },
      { id: 2, title: "Product 2", qty: 34 },
    ],
  });

  const handleClick = () => {
    setPerson({ ...person, address: { ...person.address, city: "FSD" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, qty: 1 } : item
      ),
    });
  };
  return <button onClick={handleClick}>Change</button>;
}

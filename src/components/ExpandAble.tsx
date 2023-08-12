import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

export default function ExpandAble({ children, maxChars = 10 }: Props) {
  const [toggle, setToggle] = useState(false);
  if (maxChars > children.length) {
    return <p>{children}</p>;
  }
  const text = toggle ? children : children.substring(0, maxChars) + "...";
  return (
    <p>
      {text}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Less" : "More"}
      </button>
    </p>
  );
}

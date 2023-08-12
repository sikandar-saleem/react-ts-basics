import { ReactNode } from "react";

interface Prop {
  color?: "primary" | "danger" | "success";
  children: ReactNode | string;
  onClick: () => void;
}

export default function Button({ color = "primary", children, onClick }: Prop) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

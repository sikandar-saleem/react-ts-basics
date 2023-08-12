import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}

export default function Alert({ children, onClose }: Prop) {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      fields below.
      <button
        onClick={onClose}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

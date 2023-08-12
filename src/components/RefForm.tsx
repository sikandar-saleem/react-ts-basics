import React, { useRef } from "react";

export default function RefForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (nameRef.current !== null) console.log(nameRef.current.value);
    if (ageRef.current !== null) console.log(ageRef.current.value);

    console.log("Submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-lable">
        Name
      </label>
      <input ref={nameRef} id="name" className="form-control" />

      <label htmlFor="name" className="form-lable">
        Age
      </label>
      <input ref={ageRef} id="age" className="form-control" />

      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
}

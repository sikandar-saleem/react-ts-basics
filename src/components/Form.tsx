import React, { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-lable">
        Name
      </label>
      <input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="name"
        className="form-control"
      />

      <label htmlFor="name" className="form-lable">
        Age
      </label>
      <input
        type="number"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) })
        }
        id="age"
        className="form-control"
      />

      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
}

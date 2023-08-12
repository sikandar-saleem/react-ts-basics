import axios, { CanceledError } from "axios";
import { useEffect, useInsertionEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function Axios() {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // CanceledError is used for cancelling axios request, We can't define type of in catch params so we check here
        setErrors(err.message);
        setIsLoading(false);
      }) // finally does not work in strict mode (dev) its executed must even promise resolve/reject
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const deleteUser = (user: User) => {
    const orignalUsers = [...users];

    setUsers(users.filter((u) => user.id !== u.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orignalUsers);
      });
  };

  const createUser = () => {
    const orignalUsers = [...users];
    const newUser = { id: 0, name: "Sikandar Saleem" };
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setErrors(err.message);
        setUsers([...orignalUsers]);
      });
  };

  const updateUser = (user: User) => {
    const orignalUsers = [...users];
    const updatedUser = { ...user, name: `${user.name}!` };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        updatedUser
      )
      .catch((err) => {
        setErrors(err.message);
        setUsers([...orignalUsers]);
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border" role="status"></div>}
      {errors && <p className="text-danger">{errors}</p>}

      <button className="btn btn-primary my-4" onClick={createUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

import useUser from "../hooks/useUser";
import userService, { User } from "../services/user-service";

export default function Axios() {
  const { users, errors, isLoading, setUsers, setErrors } = useUser();

  const deleteUser = (user: User) => {
    const orignalUsers = [...users];

    setUsers(users.filter((u) => user.id !== u.id));

    userService.delete(user.id).catch((err) => {
      setErrors(err.message);
      setUsers(orignalUsers);
    });
  };

  const createUser = () => {
    const orignalUsers = [...users];
    const newUser = { id: 0, name: "Sikandar Saleem" };

    setUsers([...users, newUser]);

    userService
      .create(newUser)
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

    userService.update(user.id, updatedUser).catch((err) => {
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

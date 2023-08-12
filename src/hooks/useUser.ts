import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-user";
import userService, { User } from "../services/user-service";

export default () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
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

    // We cancell this axios request if a page just render and browser sent request to fetch data and then
    // user visit another page so we need to cancell the last request because we did not need it more

    return () => cancel();
  }, []);

  return { users, errors, isLoading, setUsers, setErrors }
}
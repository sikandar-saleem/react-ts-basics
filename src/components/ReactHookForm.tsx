import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at leat 3 characters." }),
  age: z.number({ invalid_type_error: "Age field is required." }).min(18),
});

type FormData = z.infer<typeof schema>; // This return interface depend on value_types in schema

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="form-lable">
        Name
      </label>
      <input {...register("name")} className="form-control" />
      {errors.name?.message && (
        <p className="text-danger">{errors.name.message}</p>
      )}
      <label htmlFor="name" className="form-lable">
        Age
      </label>
      <input
        type="number"
        {...register("age", { valueAsNumber: true })}
        className="form-control"
      />
      {errors.age?.message && (
        <p className="text-danger">{errors.age.message}</p>
      )}

      <button disabled={!isValid} className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}

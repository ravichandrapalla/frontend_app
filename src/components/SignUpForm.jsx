import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { object, string } from "yup";
import { signup } from "../services/api";

const SignupSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const handleFormSubmit = async (formData) => {
    const { message, status } = await signup(formData);
    console.log(message, status);
    if (status === 201) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
      </div>
      {errors?.name && <p>{errors.name.message}</p>}
      <div>
        <label htmlFor="email"> Email</label>
        <input id="email" {...register("email")} />
      </div>
      {errors?.email && <p>{errors.email.message}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" {...register("password")} />
      </div>
      {errors?.password && <p>{errors.password.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;

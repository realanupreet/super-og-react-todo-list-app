import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
const FormComponent = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your name is requi"),
    email: yup.string().required().email(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required()
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          required="true"
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
        <input
          type="email"
          placeholder="Email..."
          required="true"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="number"
          placeholder="Age..."
          required="true"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder="Password..."
          required="true"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password..."
          required="true"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;

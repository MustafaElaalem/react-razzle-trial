import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="login-form ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="email form-group" >
                    <label>&nbsp; Email </label>
                    <input type="text" className="form-control"
                        {...register("email",
                            {
                                required: { value: true, message: "this required" },
                                maxLength: { value: 20, message: "this shouldn't exceed 20 charchtar" }
                            })} />
                    {errors.userName && console.log(errors.userName)}
                </div>
                <div className="password form-group" >
                    <label>&nbsp; Password</label>
                    <input type="password" className="form-control"
                        {...register("password",
                            {
                                required: { value: true, message: "this required" },
                                maxLength: { value: 20, message: "this shouldn't exceed 20 charchtar" }
                            })} />
                    {errors.userName && console.log(errors.userName)}
                </div>
                <div className="form-group footer">
                    <input type="submit" className="btn btn-primary" />
                    <a href="/forgetPassword" className="ml-2">Forget Password</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
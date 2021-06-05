import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
    }

    return (
        <div className="register-form ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="userName form-group" >
                    <label>&nbsp; User Name </label>
                    <input type="text" className="form-control"
                        {...register("userName",
                            {
                                required: { value: true, message: "this required" },
                                maxLength: { value: 20, message: "this shouldn't exceed 20 charchtar" }
                            })} />
                    {errors.userName && console.log(errors.userName)}
                </div>
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
                <div className="confirmPassword form-group" >
                    <label>&nbsp; Confirm Password</label>
                    <input type="password" className="form-control"
                        {...register("confirmPassword",
                            {
                                required: { value: true, message: "this required" },
                                maxLength: { value: 20, message: "this shouldn't exceed 20 charchtar" }
                            })} />
                    {errors.userName && console.log(errors.userName)}
                </div>
                <input type="submit" className="btn btn-primary d-block mx-auto mb-1" />
            </form>
        </div>
    );
}

export default Register;
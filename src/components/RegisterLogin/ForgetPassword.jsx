import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const ForgetPassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="forgetPassword-form">
                <div className="email form-group" >
                    <label>&nbsp; Email </label>
                    <input type="text" className="form-control"
                        {...register("email",
                            {
                                required: { value: true, message: "this required" },
                                pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                     message: "this is not a valid email" }
                            })} />
                    {errors.userName && console.log(errors.userName)}
                </div>
                {errors.email && console.log(errors.email)}
                <input type="submit" className="btn btn-primary d-block mx-auto mb-1" />
            </form>
        </div>
    );
};

export default ForgetPassword;
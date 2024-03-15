/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'; // ChatGPT code: Importing TRPC client

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";

type FormProps = {
    name: string;
    age: number;
    phone: string;
    address: string;
};

export const StudentHookForm = () => {
    const createStudent = api.student.createStudent.useMutation();

    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>();

    const formSubmitted = (data: FormProps) => {
        createStudent.mutate({name:data.name, age:+data.age, phone:data.phone,address:data.address});  
    };

    return (
        <form className="text-gray-900" onSubmit={handleSubmit(formSubmitted)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input {...register('name', { required: "Name is required" })} id="name" type="text" className="p-2 border-2" />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="age">Age</label>
                <input {...register('age', { required: "Age is required", min: 1 })} id="age" type="number" className="p-2 border-2" />
                {errors.age && <span className="text-red-500">{errors.age.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input {...register('phone', { required: "Phone is required" })} id="phone" type="text" className="p-2 border-2" />
                {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input {...register('address', { required: "Address is required" })} id="address" type="text" className="p-2 border-2" />
                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
            </div>
            <div>
                <button type="submit" className="border-2 p-2  border-gray-900" disabled={createStudent.isLoading}>
                    {createStudent.isLoading ? "Adding" : "Add"}
                </button>
            </div>
        </form>
    );
};

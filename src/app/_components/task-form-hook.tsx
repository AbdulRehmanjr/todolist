/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import { useEffect, useState } from "react"
import { type FieldValues, useForm } from "react-hook-form"
import { api } from "~/trpc/react"


 type FormProps = {
    taskName:string
 }
export const TaskHookForm = () => {

    const createTask = api.task.createTask.useMutation()
    const [value,setValue] = useState<string>('sds')
    const { handleSubmit, register, formState: { errors } } = useForm<FormProps>()

    //! rendering 
    useEffect(()=>{
        console.log(value)
    },[])

    const formSubmited = (data: FieldValues) => {
        console.log(data)
        createTask.mutate({ taskName: data.taskName })
    }


    return (
        <form className="text-gray-900" onSubmit={handleSubmit(formSubmited)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="task-name">Task name</label>
                <input {...register('taskName', { required: "Task name is required" })} id="task-name" type="text" className="p-2 border-2" />
                {
                    errors.taskName && <span className="text-red-500">{errors.taskName.message?.toString()}</span>
                }
            </div>
            <div>
                <button type="submit" className="border-2 p-2  border-gray-900" disabled={createTask.isLoading}>
                    {createTask.isLoading ? "Adding" : "Add"}
                </button>
            </div>
        </form>
    )
}
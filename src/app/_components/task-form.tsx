'use client'

import { type ChangeEvent, useState, useEffect } from "react"
import { api } from "~/trpc/react"



export const TaskForm = () => {

    const createTask = api.task.createTask.useMutation()
    const tasks = api.task.getAllTasks.useQuery()
    const [task, setTask] = useState<string>('')

    useEffect(()=>{
        console.log('rending')
    },[task])

    const addTask = () => {
        createTask.mutate({ taskName: task })
        setTask(() => '')
    }

    return (
        <>
            <input title="task-add" value={task}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                className="text-gray-900 p-2 rounded-l-md" />
            <button type="button" title="add-task-button" className="text-white bg-green-700 p-2 rounded-r-md" onClick={() => addTask()} disabled={createTask.isLoading}>
                {createTask.isLoading ? "Adding" : "Add Task"}
            </button>

        </>
    )
}
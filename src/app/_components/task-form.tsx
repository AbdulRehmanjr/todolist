'use client'

import { type ChangeEvent, useState } from "react"
import { api } from "~/trpc/react"



export const TaskForm = () => {

    const createTask = api.task.createTask.useMutation()

    const [task, setTask] = useState<string>('')

    const addTask = () => {
        createTask.mutate({ taskName: task })
    }

    return (
        <>
            <input title="task-add" value={task}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                className="text-gray-900 p-2 rounded-l-md" />
            <button title="add-task-button" className="text-white bg-green-700 p-2 rounded-r-md" onClick={() => addTask()} disabled={createTask.isLoading}>
                Add Task
            </button>
        </>
    )
}
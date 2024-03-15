/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'
import { api } from "~/trpc/react"



export const ClientMeu = () => {

    const tasks = api.task.getAllTasks.useQuery()

    if (!tasks.data)
        return (
            <div className="text-3xl font-bold text-white">
                <p>Loading</p>
            </div>
        )
    return (
        <div className="border-2 rounded-md p-4">
            <h2 className="text-white font-bold text-base">Pending Tasks</h2>
            <menu className="h-[6rem] overflow-hidden overflow-y-scroll">
                {
                    tasks.data.map((value: any, index: number) => (
                        <li key={value.taskId} className="flex gap-2">
                            <span className="text-green-400 font-bold">{index}</span>
                            <span>{value.taskName}</span>
                            <button className="text-white bg-red-600 p-2">
                                Delete
                            </button>
                            {/* <Button taskId={value.taskId} /> */}
                        </li>
                    ))
                }
            </menu>
        </div>
    )
}
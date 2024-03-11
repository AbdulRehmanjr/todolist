import { api } from "~/trpc/server"



export const TaskMenu = async () => {

    const tasks = await api.task.getAllTasks.query()

    return (
        <div className="border-2 rounded-md p-4">
            <h2 className="text-white font-bold text-base">Pending Tasks</h2>
            <menu className="h-[6rem] overflow-hidden overflow-y-scroll">
                {
                    tasks?.map((value,index:number) => (
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
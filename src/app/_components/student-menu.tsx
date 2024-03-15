import { api } from "~/trpc/server"



export const StudentMenu = async () => {

    const students = await api.student.getAllStudents.query()

    return (
        <div className="border-2 rounded-md p-4">
            <h2 className="text-white font-bold text-base">Pending Tasks</h2>
            <menu className="h-[6rem] overflow-hidden overflow-y-scroll">
                {
                    students?.map((value,index:number) => (
                        <li key={value.userId} className="flex gap-2">
                            <span className="text-green-400 font-bold">{index}</span> 
                            <span>{value.name}</span>
                            <span>{value.age}</span>
                            <span>{value.address}</span>
                            <span>{value.name}</span>
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
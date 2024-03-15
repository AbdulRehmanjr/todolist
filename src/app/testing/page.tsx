import { TaskForm } from "~/app/_components/task-form"
import { ClientMeu } from "../_components/client-menu"
import { StudentHookForm } from "../_components/student-form-hook"


export default async function TestingPage() {


    return (
        <div className="flex justify-center items-center h-screen bg-green-200">
            <StudentHookForm/>
        </div>

    )
}
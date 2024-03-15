import { TaskForm } from "~/app/_components/task-form"
import { StudentMenu } from "../_components/student-menu"
import { StudentHookForm } from "../_components/student-form-hook"


export default async function TestingPage() {


    return (
        <div className="flex justify-center items-center h-screen bg-green-200">
            <StudentMenu />
            <StudentHookForm />
        </div>

    )
}
import { api } from "~/trpc/server"


export default async function TestingPage() {

    // ! server side page 
    // ! GET POST UPDATE DELETE .... REST API 
    // ! trpc  => type remote procedure call 
    // await api.student.createStudent.mutate({ name: 'Spy dev', age: 20, phone: "+9233014466712", address: "Ghakhar" })


    await api.student.getAllStudents.query()
    return (
        <h1 className="text-gray-900 font-bold text-4xl">Testing</h1>
    )
}
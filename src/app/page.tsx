import { TaskForm } from "~/app/_components/task-form";
import { TaskMenu } from "~/app/_components/task-menu";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <section className="flex flex-col justify-center items-center gap-5  bg-blue_custom text-white p-4 rounded-lg shadow-xl">
        <h1 className="text-white font-bold text-4xl">TODO List By Hina</h1>
        <div className="border-2 rounded-md p-4">
          <TaskForm />
        </div>
        <TaskMenu />
      </section>
    </main>
  );
}




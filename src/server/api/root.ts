
import { createTRPCRouter } from "~/server/api/trpc";
import { TaskRouter } from "./routers/task";
import { StudentRouter } from "./routers/student";


export const appRouter = createTRPCRouter({
    task:TaskRouter,
    student:StudentRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

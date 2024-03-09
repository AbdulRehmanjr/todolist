
import { createTRPCRouter } from "~/server/api/trpc";
import { TaskRouter } from "./routers/task";


export const appRouter = createTRPCRouter({
    task:TaskRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

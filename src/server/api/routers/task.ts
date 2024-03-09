/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const TaskRouter = createTRPCRouter({

    /**
     * ! input()  ====  z.object({})
     * ! mutation(), query() =====  ({ctx})=>{}
     */
    createTask: publicProcedure
        .input(z.object({
            taskName: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await  ctx.db.task.create({
                data: {
                    taskName: input.taskName
                }
            })
        }),

})
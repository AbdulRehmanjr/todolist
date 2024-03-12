import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * ! prisma 
 * ! trpc  
 */
export const StudentRouter = createTRPCRouter({

    createStudent: publicProcedure
        .input(z.object({
            name: z.string(),
            age: z.number(),
            phone: z.string(),
            address: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.student.create({
                data: {
                    name: input.name,
                    age: input.age,
                    phone: input.phone,
                    address: input.address,
                }
            })
        }),
    getAllStudents: publicProcedure
        .query(async ({ ctx }) => {
            const students = await ctx.db.student.findMany({
                where: {
                    address: {
                        contains:'ghakhar',
                    }
                }
            })
            return students
        }),
    //* DELETE
    //* UPDATE
    //* FILTERING,SORT GT GTE LT LE HAS CONTAIN ORDERBY 
    
})
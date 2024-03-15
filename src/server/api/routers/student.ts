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
    deleteStudent: publicProcedure
        .input(z.object({
            phone: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const deletedStudent = await ctx.db.student.deleteMany({
                where: {
                    phone: input.phone,
                }
            });
            return deletedStudent;
        }),
    //* UPDATE

    updateStudent: publicProcedure
    .input(z.object({
        phone: z.string(),
        address: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
        const updatedStudent = await ctx.db.student.updateMany({
            where: {
                phone: input.phone,
            },
            data: {
                address: input.address,
            }
        });
        return updatedStudent;
    }),
    //* FILTERING,SORT GT GTE LT LE HAS CONTAIN ORDERBY 
    getStudentsByAgeRange: publicProcedure
        .input(z.object({
            minAge: z.number(),
            maxAge: z.number(),
        }))
        .query(async ({ ctx, input }) => {
            const students = await ctx.db.student.findMany({
                where: {
                    AND: [
                        { age: { gte: input.minAge } },
                        { age: { lte: input.maxAge } }
                    ]
                }
            });
            return students;
        }),
    
})
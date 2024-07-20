import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({})
  }),

  getFive: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany({
      take: 5,
    })
  }),
});
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getBlogById: protectedProcedure.input(z.object({ id: z.number().min(1) })).query(({ ctx, input }) => {
    return ctx.db.post.findUnique({
      where: { id: input.id, createdBy: { id: ctx.session.user.id } },
    })
  }),

  updateBlogById: protectedProcedure.input(z.object({ id: z.number(), name: z.string().min(1).max(255), description: z.string().min(1).max(2000) })).mutation(async ({ ctx, input }) => {
    return ctx.db.post.update({
      where: { id: input.id, createdBy: { id: ctx.session.user.id } },
      data: {
        name: input.name,
        description: input.description,
      },
    });
  }),

  updateBlogStatus: protectedProcedure.input(z.object({ id: z.number(), status: z.string() })).mutation(async ({ ctx, input }) => {
    return ctx.db.post.update({
      where: { id: input.id, createdBy: { id: ctx.session.user.id } },
      data: {
        status: input.status,
      },
    });
  }),

});

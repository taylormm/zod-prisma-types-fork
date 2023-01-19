import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const PostOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.PostOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  anotherEnum: z.lazy(() => SortOrderSchema).optional(),
}).strict()
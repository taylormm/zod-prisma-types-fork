import { z } from 'zod';
import * as PrismaClient from '@prisma/client';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedBytesNullableFilterSchema } from './NestedBytesNullableFilterSchema';

export const NestedBytesNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBytesNullableWithAggregatesFilter> = z.object({
  equals: z.instanceof(Buffer).optional().nullable(),
  in: z.instanceof(Buffer).array().optional().nullable(),
  notIn: z.instanceof(Buffer).array().optional().nullable(),
  not: z.union([ z.instanceof(Buffer),z.lazy(() => NestedBytesNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBytesNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBytesNullableFilterSchema).optional(),
}).strict()
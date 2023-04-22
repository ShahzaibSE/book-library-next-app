import { NextRequest, NextResponse } from 'next/server';
import {
  Kysely,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
} from 'kysely';
import { NeonDialect } from 'kysely-neon';

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

import {
    NextRequest,
    NextResponse,
  } from "next/server";
  import {
    Kysely,
    Generated,
    ColumnType,
    Selectable,
    Insertable,
    Updateable,
  } from "kysely";
  import { NeonDialect } from "kysely-neon";
  import axios from "axios";

export async function GET(request: NextRequest) {}

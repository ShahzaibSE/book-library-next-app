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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(`Book ID: ${id}`)
  try {
    const res = id !== null ? await fetch(`https://simple-books-api.glitch.me/books/${id}`) : await fetch(
            "https://simple-books-api.glitch.me/books/",
          );
    const books = await res.json();
    console.log(books);
    return NextResponse.json({
      status: true,
      resCode: 200,
      books,
    });
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message:
        "Couldn't get books due to unexpected error",
    });
  }
}

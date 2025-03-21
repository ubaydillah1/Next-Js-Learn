import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("result", "20");
  console.log(cookieStore.get("result"));

  return new Response("<h1>Profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

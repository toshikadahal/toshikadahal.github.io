export function GET() {
  return new Response("google-site-verification: googlee6359fe6e00c7ade.html", {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
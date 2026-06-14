// Vercel Edge Middleware — restricts the whole site to the company VPN.
// Runs on every request before the static assets are served.
// NOTE: this only runs on Vercel deployments; `vite dev` locally is unaffected.

export const config = {
  // Protect every route. (Add exclusions here later if needed.)
  matcher: "/:path*",
};

// Company VPN egress IP(s). Add more entries to widen access.
const ALLOWED_IPS = new Set([
  "93.157.86.134",
]);

export default function middleware(request: Request) {
  const ip =
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "";

  if (ALLOWED_IPS.has(ip)) {
    return; // allowed — continue to the site
  }

  return new Response("Access restricted to the company network.", {
    status: 403,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

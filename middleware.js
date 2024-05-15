export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/add-project",
    "/edit-project/:path*",
    "/api/users",
    "/api/auth:path*, /api/contact",
  ],
};

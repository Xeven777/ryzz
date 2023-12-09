import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: (req) => {
    // Make "/" and all pages under "/send/[id]" public
    return req.url === "/" || req.url.startsWith("/send/");
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

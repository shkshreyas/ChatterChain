// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
// Copy the middleware code as it is from the above resource

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ["/api/webhook/clerk"],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk"],
  
  // Add trusted hosts to avoid redirection to localhost
  debug: process.env.NODE_ENV === 'development',
  
  // Setting trusted host for Vercel deployment
  trustedHosts: [
    /^https:\/\/chatter-chain-gilt.vercel.app$/,
    /\.vercel\.app$/,
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

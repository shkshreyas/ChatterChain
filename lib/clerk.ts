// Clerk configuration helper
import { Clerk } from "@clerk/nextjs/server";

// Function to get the domain based on environment
export function getBaseUrl() {
  // Check if we're in a production environment
  if (typeof window !== "undefined") {
    // Browser should use current URL
    return "";
  }

  // If VERCEL_URL is set (in Vercel deployment)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Development environment
  return `http://localhost:${process.env.PORT || 3000}`;
}

export const clerkClient = Clerk({
  // Add any custom clerk configuration if needed
}); 
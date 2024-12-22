/* eslint-disable react-hooks/rules-of-hooks */
import { withAuth } from "next-auth/middleware";
import { usePathname , useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";

export default withAuth(async () => {
  // Check if the request path is /learn

  const router = useRouter()
  const path = usePathname()

  // If the user is not authenticated and trying to access /learn, redirect to login page
  if (path === "/learn") {
    const {data : session } = useSession();

    // If no session exists, redirect to the login page
    if (!session) {
    router.push("/login")// Redirect to login page
      return NextResponse.redirect('/login');
    }
  }

  // Allow access to the route if authenticated or not trying to access /learn
  return NextResponse.next();
}
)
export const config = {
  matcher: ["/learn/*"], // Specify the routes where middleware should run
};

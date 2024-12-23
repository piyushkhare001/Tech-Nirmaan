/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { AuthOptions, Session, User as NextAuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

// Define the CustomUser type
type CustomUser = {
  googleId: string;
  name: string;
  email: string;
  profilePic: string;
};

declare module "next-auth" {
  // Extend the Session interface to include the 'user' field
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      profilePic: string;
    };
  }


}

declare module "next-auth/jwt" {
  // Augment the JWT interface with profilePic
  interface JWT {
    sub: string;
    profilePic?: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {
      console.log("User in signIn callback:", user);

      await dbConnect();

      const googleId = profile?.sub || account?.id;
      if (!googleId) {
        throw new Error("Google ID is missing");
      }

      const existingUser = await User.findOne({ googleId });
      if (!existingUser) {
        await User.create({
          googleId,
          name: user.name,
          email: user.email,
          profilePic: user.image || "", // Default to an empty string if no image
        });
      }

      return true;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      if (session?.user) {
        console.log("Session in session callback:", session);
        session.user.id = token.sub;
        session.user.profilePic = token.profilePic || session.user.profilePic;
      }
      return session;
    },

    async jwt({
      token,
      user,
    
    }: {
      token: JWT;
      user?: CustomUser | NextAuthUser;  // Accept either the default user or CustomUser
      account: any;
      profile?: any;
    }): Promise<JWT> {
      if (user) {
        console.log("JWT in jwt callback:", user);

        // Ensure user is a CustomUser type (could be either a default User or CustomUser)
        if ('googleId' in user) {
          token.profilePic = user.profilePic || "";
        }
      }

      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

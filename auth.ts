import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session
    },
  },
});
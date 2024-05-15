import connect from "@/db";
import GoogleProvider from "next-auth/providers/google";
import User from "@/db/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth",
    // error: '/auth/error',
    signOut: "/auth",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connect();
          const existingUser = await User.findOne({ email });
          if (!existingUser) {
            const res = await fetch("https://appvil-eu.vercel.app/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });
            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import mongoose from "mongoose"
import User from "@/models/User"
import Payment from "@/models/Payment"


export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await mongoose.connect(process.env.MONGODB_URI)
      const currentUser = await User.findOne({ email: user.email })
      if (!currentUser) {
        // Create a new user if not exists
        const details ={
          name: user.name,
          email: user.email,
          username: user.email.split('@')[0], // Default username from email
          paymentCredentials: '',
          profilePicUrl: user.image || '',
          coverPicUrl: '',
        }
        const newUser = await User.create(details)
      }
      return true
    },
    async session({ session, user, token }) {
      await mongoose.connect(process.env.MONGODB_URI)
      const dbuser = await User.findOne({ email: session.user.email })
      if (dbuser) {
        session.user.name = dbuser.name
        session.user.id = dbuser._id.toString()
        session.user.username = dbuser.username
        session.user.paymentCredentials = dbuser.paymentCredentials
        session.user.profilePicUrl = dbuser.profilePicUrl
        session.user.coverPicUrl = dbuser.coverPicUrl
      }
      return session
    },
  }
})
export {authOptions as GET, authOptions as POST}
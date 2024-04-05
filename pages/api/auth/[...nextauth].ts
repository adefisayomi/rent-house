import Routes from "@/src/Routes"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/src/constants"
import NextAuth from "next-auth"
import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
// import clientPromise from "@/lib/mongodb"
// import { MongoDBAdapter } from "@/lib/MongooseAdapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { createUserWithEmailAndPassword, getUserWithEmailAndPassword } from "@/lib/controllers/user"
import { NextApiRequest, NextApiResponse } from "next"



export function nextAuthOptions (req: NextApiRequest, res: NextApiResponse) {
    const authOptions : NextAuthOptions = ({
        providers: [
            GoogleProvider({
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
              }),
            CredentialsProvider(
                {
                id: 'signup',
                name: 'signup',
                credentials: {email: {type: 'text'}, password: {type: 'password'}, name: {type: 'text'}},
                async authorize(credentials, req) {
                    const user = await createUserWithEmailAndPassword({email: credentials?.email, password: credentials?.password, name: credentials?.name})
                    if (!user.success) throw new Error(user.message)
                    return user.data
                }
              }),

              CredentialsProvider(
                {
                id: 'login',
                name: 'login',
                credentials: {email: {type: 'text'}, password: {type: 'password'}},
                async authorize(credentials, req) {
                    const user = await getUserWithEmailAndPassword({email: credentials?.email, password: credentials?.password})
                    if (!user.success) throw new Error(user.message)
                    return user.data
                }
              }),
        ],
        pages: {
            newUser: Routes.signup,
            signIn: Routes.login,
            error: '/api/auth/errors'
        },
        // adapter: MongoDBAdapter(clientPromise),

        session: {
            strategy: 'jwt'
        },
        callbacks: {
            async signIn({credentials, account}) {
                return true
            }
        }
    })

    return authOptions
}

export default (req: NextApiRequest, res: NextApiResponse) => {
	return NextAuth(req, res, nextAuthOptions(req, res));
};
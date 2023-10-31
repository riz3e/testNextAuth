import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"


export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username or email", type: "text", placeholder: "mailoname" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const user = { id: '1', name: "test", password: "test", email: "example@gmail.com"};
            
                if (user.password === credentials?.password && credentials?.username === user.name) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            // get from https://console.cloud.google.com/apis/credentials OAuth 2.0 Client IDs
        }),
    ],
    

    
}

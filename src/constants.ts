export const toastMessageKey = 'toastMessageKey'
export const MONGO_URI = process.env.MONGO_URI
export const SESSION_SECRET = process.env.SESSION_SECRET

export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!


export const MAX_WIDTH = '1200px'
export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

export const errorDescriptions = {
    OAuthSignin: "authorization url failed",
    OAuthCallback: "authorization faled",
    OAuthCreateAccount: "database error",
    EmailCreateAccount: "Could not create email provider user in the database.",
    Callback: "error ocuured",
    OAuthAccountNotLinked: "user already exist",
    EmailSignin: "Sending the e-mail with the verification token failed.",
    CredentialsSignin: "authorization error",
    SessionRequired: "The content of this page requires you to be signed in at all times.",
    Default: "error occured."
} as any
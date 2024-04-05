import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";




export default async function middleware (req: NextRequest) {
    const accesToken = req.cookies.get("next-auth.session-token")
   
    const restrictedPages = ['login', 'signup', 'reset-password']
    const currentPage = req.nextUrl.pathname.split('/').pop()
    if (accesToken && currentPage && restrictedPages.includes(currentPage)) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] }
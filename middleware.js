import { NextResponse } from "next/server";

export default function middleware(req){
    const token = req.cookies.get('user')
    if (!token) {
        return NextResponse.rewrite(new URL('/login', req.url))
      }
    
      if (token) {
        return NextResponse.rewrite(new URL('/', req.url))
      }
}

export const config = {
    matcher: '/'
}
import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret, raw: true })
    return NextResponse.json({ token })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}

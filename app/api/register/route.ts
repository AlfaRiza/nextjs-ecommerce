import prisma from '@/app/prismadb'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export const POST: (req: Request) => Promise<NextResponse> = async (
  req: Request
): Promise<NextResponse> => {
  const body = await req.json()
  const { name, email, password } = body
  const hashedPassword = await bcrypt.hash(password, 12)
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      {
        error
      },
      {
        status: 500
      }
    )
  }
}

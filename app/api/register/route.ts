import prisma from '@/app/prismadb'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export const POST: (req: Request) => Promise<NextResponse> = async (
  req: Request
): Promise<NextResponse> => {
  const body = await req.json()
  const { name, email, password, birthDate, phone, regency } = body
  const hashedPassword = await bcrypt.hash(password, 12)
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        birthDate: new Date(birthDate),
        phone,
        regencyId: Number(regency)
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

import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

declare interface SuccessResponseProvinceInterface {
  data: Array<{ id: number, name: string, createdAt: Date, updatedAt: Date }>
}

declare interface ErrorResponseProvinceInterface {
  error: unknown
}

export const GET = async (
  req: Request,
  res: Response
): Promise<
NextResponse<
SuccessResponseProvinceInterface | ErrorResponseProvinceInterface
>
> => {
  try {
    const result = await prisma.province.findMany({
      distinct: 'name',
      orderBy: [
        {
          name: 'asc'
        }
      ]
    })
    return NextResponse.json(
      {
        data: result
      },
      {
        status: 200
      }
    )
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

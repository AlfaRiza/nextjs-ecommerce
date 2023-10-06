import prisma from '@/app/prismadb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

declare interface SuccessResponseProvinceInterface {
  data: Array<{ id: number, name: string, provinceId: number }>
}

declare interface ErrorResponseProvinceInterface {
  error: unknown
}

export const GET = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<
NextResponse<
SuccessResponseProvinceInterface | ErrorResponseProvinceInterface
>
> => {
  try {
    const id = res.params.id
    // return NextResponse.json(res)
    const result = await prisma.regency.findMany({
      distinct: 'name',
      orderBy: [
        {
          name: 'asc'
        }
      ],
      where: {
        provinceId: Number(id)
      }
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

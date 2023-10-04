/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/promise-function-async */
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { type FC, type ReactElement } from 'react'

const Dropdown: FC = (): ReactElement => {
  const { data: session } = useSession()

  if (session?.user) {
    return (
      <ul className="py-5 px-1 text-neutral-600">
        <li className="whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer">
          {session.user.name}
        </li>
        <li
          onClick={() => signOut()}
          className="whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer"
        >
          SignOut
        </li>
      </ul>
    )
  }

  return (
    <ul className="py-5 px-1 text-neutral-600">
      <li onClick={() => signIn()} className="whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer">
        SignIn
      </li>
    </ul>
  )
}

export default Dropdown

'use client'
import React, { type ReactElement } from 'react'
import { SessionProvider } from 'next-auth/react'
import { type ProviderPropsInterface } from './interface'

const Provider = ({ children }: ProviderPropsInterface): ReactElement => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider

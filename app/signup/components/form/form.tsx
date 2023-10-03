'use client'
import React, { type FC, type ReactElement } from 'react'
import useForm from '../hooks/useForm'
import locale from '../hooks/locale'
import Link from 'next/link'

const Form: FC = (): ReactElement => {
  const {
    data: { user },
    method: { setUser, Register }
  } = useForm()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">{locale.lbl_signup}</h1>
        {/* name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            {locale.lbl_name}
          </label>
          <input
            type="text"
            className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="name"
            value={user.name}
            placeholder={locale.lbl_name}
            onChange={e => {
              setUser({
                ...user,
                name: e.target.value
              })
            }}
          />
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            {locale.lbl_email}
          </label>
          <input
            type="text"
            className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            value={user.email}
            placeholder={locale.lbl_email}
            onChange={e => {
              setUser({
                ...user,
                email: e.target.value
              })
            }}
          />
        </div>
        {/* password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2">
            {locale.lbl_password}
          </label>
          <input
            type="password"
            className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            value={user.password}
            placeholder={locale.lbl_password}
            onChange={e => {
              setUser({
                ...user,
                password: e.target.value
              })
            }}
          />
        </div>
        <button
          onClick={() => {
            Register()
          }}
          className="p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 rounded-full"
        >
          {locale.lbl_register_now}
        </button>
        <Link
          href={'signin'}
          className="text-sm text-center mt-5 text-neutral-600"
        >
          {locale.lbl_already_has_account}
        </Link>
      </div>
    </div>
  )
}

export default Form

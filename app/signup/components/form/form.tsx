'use client'
import React, { type FC, type ReactElement } from 'react'
import useForm from '../hooks/useForm'
import locale from '../hooks/locale'
import Link from 'next/link'

const Form: FC = (): ReactElement => {
  const {
    data: { user, province, regency, errorMessage },
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
          {errorMessage.name !== '' && (
            <span className="text-red-500">{errorMessage.name}</span>
          )}
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
          {errorMessage.email !== '' && (
            <span className="text-red-500">{errorMessage.email}</span>
          )}
        </div>
        {/* handphone */}
        <div className="flex flex-col">
          <label htmlFor="text" className="mb-2">
            {locale.lbl_phone}
          </label>
          <input
            type="text"
            className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="text"
            value={user.phone}
            placeholder={locale.lbl_phone}
            onChange={e => {
              setUser({
                ...user,
                phone: e.target.value
              })
            }}
          />
          {errorMessage.phone !== '' && (
            <span className="text-red-500">{errorMessage.phone}</span>
          )}
        </div>
        {/* province */}
        <div className="flex flex-col">
          <label htmlFor="province" className="mb-2">
            {locale.lbl_province}
          </label>
          <select
            value={user.province}
            onChange={e => {
              setUser({
                ...user,
                province: Number(e.target.value)
              })
            }}
            id="province"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={-1}>Selected Province</option>
            {province?.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              )
            })}
          </select>
          {errorMessage.province !== '' && (
            <span className="text-red-500">{errorMessage.province}</span>
          )}
        </div>
        {/* regency */}
        <div className="flex flex-col">
          <label htmlFor="regency" className="mb-2">
            {locale.lbl_regency}
          </label>
          <select
            value={user.regency}
            onChange={e => {
              setUser({
                ...user,
                regency: Number(e.target.value)
              })
            }}
            id="regency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={-1}>Selected Regency</option>
            {regency?.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              )
            })}
          </select>
          {errorMessage.regency !== '' && (
            <span className="text-red-500">{errorMessage.regency}</span>
          )}
        </div>
        {/* birthday */}
        <div className="flex flex-col">
          <label htmlFor="birthdate" className="mb-2">
            {locale.lbl_signup}
          </label>
          <input
            type="date"
            className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="birthdate"
            value={user.birth_date}
            placeholder={locale.lbl_password}
            onChange={e => {
              setUser({
                ...user,
                birth_date: e.target.value
              })
            }}
          />
          {errorMessage.birth_date !== '' && (
            <span className="text-red-500">{errorMessage.birth_date}</span>
          )}
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
          {errorMessage.password !== '' && (
            <span className="text-red-500">{errorMessage.password}</span>
          )}
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

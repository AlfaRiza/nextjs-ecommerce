'use client'

import React, { type FC, type ReactElement } from 'react'
import Link from 'next/link'
import SearchBar from '../SearchBar'
import { type NavbarProps } from './interface'
import locale from './hooks/locale'
import Image from 'next/image'
import { CiShoppingCart } from 'react-icons/ci'
import useCustom from './hooks'
import { BsChevronCompactUp } from 'react-icons/bs'

// eslint-disable-next-line no-empty-pattern
const Navbar: FC<NavbarProps> = ({}: NavbarProps): ReactElement => {
  const {
    data: { showNav, showProfile },
    method: { setShowNav, setShowProfile }
  } = useCustom()

  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <Link href={'/'}>{locale.lbl_signin}</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 text-md">
              <li>
                <Link href={'/'} className="py-3 inline-block w-full">
                  {locale.lbl_shop}
                </Link>
              </li>
              <li>
                <Link href={'filter'} className="py-3 inline-block w-full">
                  {locale.lbl_filter}
                </Link>
              </li>
              <li>
                <Link href={'myproducts'} className="py-3 inline-block w-full">
                  {locale.lbl_my_products}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => {
              setShowProfile(!showProfile)
            }}
            className="relative cursor-pointer"
          >
            <Image
              src={
                ''
              }
              className="w-[30px] h-[35px] rounded-full object-cover"
              alt=""
              width={30}
              height={30}
            />
            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? '' : 'hidden'
              }`}
            >
              <Link href={'/sign'}>{locale.lbl_signin}</Link>
            </div>
          </div>
          <Link href={'/cart'}>
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => {
              setShowNav(!showNav)
            }}
            className="p-4 bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-300 ${
                showNav ? 'rotate-180' : ''
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? 'pb-4 px-5' : 'h-0 invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col text-md opacity-75 px-2">
          <li>
            <Link href="/shop" className="py-3 inline-block w-full">
              {locale.lbl_shop}
            </Link>
          </li>
          <li>
            <Link href="/filters" className="py-3 inline-block w-full">
              {locale.lbl_filter}
            </Link>
          </li>
          <li>
            <Link href="/myproducts" className="py-3 inline-block w-full">
              {locale.lbl_my_products}
            </Link>
          </li>
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placehodler:text-gray-600 text-md"
            placeholder={locale.lbl_search}
            autoComplete="false"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar

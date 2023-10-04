import React, { type ReactElement } from 'react'
import { type UserIconInterface } from './interface'

const UserIcon = ({ height, stroke, width }: UserIconInterface): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 800}
      height={height ?? 800}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke ?? '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
  )
}

export default UserIcon

import { type Dispatch, type SetStateAction } from 'react'

export interface UserFormInterface {
  name: string
  email: string
  phone: string
  birth_date: string
  province: number
  regency: number
  password: string
}

export interface ProvinceInterface {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface RegencyInterface {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export interface ErrorMessageInterface {
  name: string
  email: string
  phone: string
  birth_date: string
  province: string
  regency: string
  password: string
}

export interface UseFormInterface {
  data: {
    user: UserFormInterface
    province: ProvinceInterface[]
    regency: RegencyInterface[]
    errorMessage: ErrorMessageInterface
  }
  method: {
    setUser: Dispatch<SetStateAction<UserFormInterface>>
    Register: () => void
  }
}

export interface LocaleInterface {
  lbl_signup: string
  lbl_name: string
  lbl_email: string
  lbl_password: string
  lbl_register_now: string
  lbl_already_has_account: string
  lbl_phone: string
  lbl_province: string
  lbl_regency: string
}

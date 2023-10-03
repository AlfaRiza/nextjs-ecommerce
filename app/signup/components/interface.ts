import { type Dispatch, type SetStateAction } from 'react'

export interface UserFormInterface {
  name: string
  email: string
  password: string
}

export interface UseFormInterface {
  data: {
    user: UserFormInterface
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
}

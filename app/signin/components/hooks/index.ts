import { type Dispatch, type SetStateAction, useState } from 'react'
import { signIn } from 'next-auth/react'

export declare interface UserFormInterface {
  email: string
  password: string
}

export declare interface UseCustomInterface {
  data: {
    user: UserFormInterface
  }
  method: {
    setUser: Dispatch<SetStateAction<UserFormInterface>>
    Login: () => Promise<any>
  }
}

const useCustom = (): UseCustomInterface => {
  const [user, setUser] = useState<UserFormInterface>({
    email: '',
    password: ''
  })

  const Login: () => Promise<any> = async (): Promise<any> => {
    try {
      await signIn('credentials', {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: '/'
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    data: {
      user
    },
    method: {
      setUser,
      Login
    }
  }
}

export default useCustom

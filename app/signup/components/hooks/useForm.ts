import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type UserFormInterface, type UseFormInterface } from '../interface'

const useForm: () => UseFormInterface = (): UseFormInterface => {
  const [user, setUser] = useState<UserFormInterface>({
    name: '',
    email: '',
    password: ''
  })

  const router = useRouter()

  const Register: () => void = (): void => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    axios
      .post('/api/register', data)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        router.push('signin')
      })
  }

  return {
    data: {
      user
    },
    method: {
      setUser,
      Register
    }
  }
}

export default useForm

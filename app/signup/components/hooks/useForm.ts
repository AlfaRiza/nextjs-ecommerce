import utils from '@/app/lib/utils'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { type UserFormInterface, type UseFormInterface, type ProvinceInterface, type RegencyInterface, type ErrorMessageInterface } from '../interface'

const useForm: () => UseFormInterface = (): UseFormInterface => {
  const [user, setUser] = useState<UserFormInterface>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birth_date: '',
    province: -1,
    regency: -1
  })

  const {
    isValidEmail,
    isValidPassword,
    isValidPhone
  } = utils()

  const [province, setProvince] = useState<ProvinceInterface[]>([])
  const [regency, setRegency] = useState<RegencyInterface[]>([])
  const [errorMessage, setErrorMessage] = useState<ErrorMessageInterface>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birth_date: '',
    province: '',
    regency: ''
  })

  const router = useRouter()

  const Register: () => void = (): void => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      birthDate: user.birth_date,
      province: user.province,
      regency: user.regency
    }

    axios
      .post('/api/register', data)
      .then(response => {
        console.log(response)
        router.push('signin')
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
      })
  }

  const getProvince = (): void => {
    axios.get('/api/province')
      .then(response => {
        console.log(response.data.data)
        setProvince(response.data.data)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {

      })
  }

  const getRegency = (): void => {
    axios
      .get(`/api/regency/${user.province}`)
      .then(response => {
        console.log(response.data.data)
        setRegency(response.data.data)
      })
      .catch(e => {
        console.log(e)
      })
      .finally(() => {})
  }

  useEffect(() => {
    getProvince()
  }, [])

  useEffect(() => {
    if (user.province === 0) {
      return
    }
    getRegency()
  }, [user.province])

  useEffect(() => {
    if (user.name === '') {
      setErrorMessage({
        ...errorMessage,
        name: 'required'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        name: ''
      })
    }
  }, [user.name])

  useEffect(() => {
    if (user.email === '') {
      setErrorMessage({
        ...errorMessage,
        email: 'required'
      })
    } else if (isValidEmail(user.email)) {
      setErrorMessage({
        ...errorMessage,
        email: 'invalid email'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        email: ''
      })
    }
  }, [user.email])

  useEffect(() => {
    if (user.phone === '') {
      setErrorMessage({
        ...errorMessage,
        phone: 'required'
      })
    } else if (isValidPhone(user.phone)) {
      setErrorMessage({
        ...errorMessage,
        phone: 'invalid phone'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        phone: ''
      })
    }
  }, [user.phone])

  useEffect(() => {
    if (user.province === -1) {
      setErrorMessage({
        ...errorMessage,
        province: 'required'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        province: ''
      })
    }
  }, [user.province])

  useEffect(() => {
    if (user.regency === -1) {
      setErrorMessage({
        ...errorMessage,
        regency: 'required'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        regency: ''
      })
    }
  }, [user.regency])

  useEffect(() => {
    if (user.birth_date === '') {
      setErrorMessage({
        ...errorMessage,
        birth_date: 'required'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        birth_date: ''
      })
    }
  }, [user.birth_date])

  useEffect(() => {
    if (user.password === '') {
      setErrorMessage({
        ...errorMessage,
        password: 'required'
      })
    } else if (isValidPassword(user.password)) {
      setErrorMessage({
        ...errorMessage,
        password: 'invalid password'
      })
    } else {
      setErrorMessage({
        ...errorMessage,
        password: ''
      })
    }
  }, [user.password])

  return {
    data: {
      user,
      province,
      regency,
      errorMessage
    },
    method: {
      setUser,
      Register
    }
  }
}

export default useForm

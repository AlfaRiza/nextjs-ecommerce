declare interface UtilsInterface {
  isValidEmail: (email: string) => boolean
  isValidPassword: (password: string) => boolean
  isValidPhone: (phone: string) => boolean
}

const utils = (): UtilsInterface => {
  const isValidEmail = (email: string): boolean => {
    return (
      email !== '' && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    )
  }

  const isValidPassword = (password: string): boolean => {
    return (
      password !== '' &&
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/.test(password)
    )
  }

  const isValidPhone = (phone: string): boolean => {
    return phone !== '' && !/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(phone)
  }
  return {
    isValidEmail,
    isValidPassword,
    isValidPhone
  }
}

export default utils

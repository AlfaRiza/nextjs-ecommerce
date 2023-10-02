import { type UseCustomInterface } from '../interface'
import { useState } from 'react'

const useCustom: () => UseCustomInterface = (): UseCustomInterface => {
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(true)

  return {
    data: {
      showNav,
      showProfile
    },
    method: {
      setShowNav,
      setShowProfile
    }
  }
}

export default useCustom

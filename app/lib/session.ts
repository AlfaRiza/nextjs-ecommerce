import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

export declare interface UseSessionInterface {
  getSession: () => any
  getCurrentUser: () => Promise<any>
}
const useSession: () => UseSessionInterface = (): UseSessionInterface => {
  const getSession = (): any => {
    return getServerSession(options)
  }

  const getCurrentUser = async (): Promise<any> => {
    const session = await getSession()
    return session?.user
  }

  return {
    getSession,
    getCurrentUser
  }
}

export default useSession

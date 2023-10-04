import React, { type ReactElement } from 'react'
import Navbar from './components/Navbar'

const Home: () => Promise<ReactElement> = async (): Promise<ReactElement> => {
  // const { getCurrentUser } = useSession()
  // const user = await getCurrentUser()
  // console.log(user)
  return (
    <div className="px-5 max-w-[1200px] mx-auto">
      <Navbar />
    </div>
  )
}

export default Home

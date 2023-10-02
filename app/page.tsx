import React, { type FC, type ReactElement } from 'react'
import Navbar from './components/Navbar'

const Home: FC = (): ReactElement => {
  return (
    <div className='px-5 max-w-[1200px] mx-auto'>
      <Navbar />
    </div>
  )
}

export default Home

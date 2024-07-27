import React from 'react'
import { SignUp } from "@clerk/clerk-react"

const index = () => {
  return (
    <div className=' h-full grid place-items-center'>

      <SignUp path="/sign-up" signInUrl='/sign-in' />
    </div>
  )
}

export default index
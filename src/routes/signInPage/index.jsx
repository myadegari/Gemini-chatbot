import React from 'react'
import { SignIn } from "@clerk/clerk-react"

const index = () => {
  return (
    <div className=' h-full grid place-items-center'>

      <SignIn path="/sign-in" signUpUrl='/sign-up' />
    </div>
  )
}

export default index
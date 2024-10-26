import { SignUp } from '@clerk/nextjs'
import './SignUp.css'

export default function Page() {
  return <div className='sign-up'>
      <SignUp />
    </div>
}
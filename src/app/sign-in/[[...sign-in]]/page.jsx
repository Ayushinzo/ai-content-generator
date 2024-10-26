import { SignIn } from '@clerk/nextjs'
import './SignIn.css'

export default function Page() {
  return <div className='sign-in'>
      <SignIn />
    </div>
}
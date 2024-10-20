"use client";
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'

const Page = () => {
  
    const onClick = (provider: "google") => {
        signIn(provider, {
          callbackUrl: '/'
        })
    }

  return (
    <div>
      <Button onClick={() => onClick('google')}>
            <User className="mr-2 h-5 w-5" />
            Signin with Google
        </Button>
    </div>
  )
}

export default Page

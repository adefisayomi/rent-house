import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { signIn } from 'next-auth/react';



export function GoogleAuth () {
    const handleGoogleSignin = async () => {
        await signIn('google')
    }
    return (
        <Button variant='secondary' onClick={handleGoogleSignin}>
            {<Icon icon="devicon:google" className="mr-2 h-5 w-5" />}
            {"continue with Google"}
        </Button>
    )
}

export default function SocialAuth () {

    return (
        <div className='flex flex-col gap-4 w-full'>
            <GoogleAuth/>
        </div>
    )
}
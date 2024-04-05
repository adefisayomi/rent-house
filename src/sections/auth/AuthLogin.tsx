import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./formSchemas"
import yup from 'yup'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { LabelSeparator} from "@/components/ui/separator"
import SocialAuth from "./SocialAuth"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Routes from "@/src/Routes"
import { useRouter } from "next/router"
import useAlert from "@/src/hooks/useAlert"



export default function AuthLogin () {

    const router = useRouter()
    const {setAlert} = useAlert()
    const form = useForm<yup.InferType<typeof loginFormSchema>>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {email: '', password: ''}
      })

    async function onSubmit(data: yup.InferType<typeof loginFormSchema>) {
        const res = await signIn('login', {...data, callbackUrl: '/login'})
        if (res?.error) return setAlert(res.error, 'error')
        else {
            setAlert(`welcome back buddy !`, 'success')
            form.reset()
            return router.back()
        }
      }
    
    

    return (
        <div className="flex flex-col relative">
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="email" placeholder="Email" {...field} className="" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className='mt-4 w-full'>
                    <Button className="w-full"  loading={form.formState.isSubmitting} >
                        Login
                    </Button>
                </div>
            </form>
        </Form>

        <LabelSeparator className='my-6' label='or' />
        <div className="mt-2 flex w-full items-center gap-4 justify-center flex-col">
            <SocialAuth />
            <Link className="text-xs hover:underline" href={Routes.resetPassword}>Forgot password?</Link>
        </div>
        </div>
    )
}
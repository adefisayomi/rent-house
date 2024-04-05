import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signupFormSchema } from "./formSchemas"
import yup from 'yup'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LabelSeparator } from "@/components/ui/separator"
import SocialAuth from "./SocialAuth"
import { signIn } from "next-auth/react"
import useAlert from "@/src/hooks/useAlert"
import { useRouter } from "next/router"



export default function AuthSignup () {

    const {setAlert} = useAlert()
    const router = useRouter()
    const form = useForm<yup.InferType<typeof signupFormSchema>>({
        resolver: yupResolver(signupFormSchema),
        defaultValues: {email: '', password: '', name: ''}
      })

    // ---
    async function onSubmit(data: yup.InferType<typeof signupFormSchema>) {
        const res = await signIn('signup', {...data, redirect: false, callbackUrl: '/signup'})
        if (res?.error) return setAlert(res.error, 'error')
        else {
            setAlert(`welcome onboard buddy!`, 'success')
            form.reset()
            return router.back()
        }
      }
    

    return (
        <div className="flex flex-col">
            <div className="mb-2"><SocialAuth /></div>
            <LabelSeparator label='or' className='my-4'/>
      

        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="text" placeholder="First & Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="email" placeholder="Email" {...field} />
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
                        Sign Up
                    </Button>
                </div>
            </form>
        </Form>

        </div>
    )
}
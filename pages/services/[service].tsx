import Page from "@/components/Page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icon } from "@iconify/react"
import { useRouter } from "next/router"
import { useState } from "react"

export default  function Service () {

  const [open, setOpen] = useState(true)
  const router = useRouter()
  const handleOpen = () => {
    setOpen(() => !open)
    router.back()
  }

  return (
    <Page title={router?.query ? router.query['service'] as string : 'services'}>
    <Dialog open={open} onOpenChange={handleOpen} >
      <DialogContent className="w-full max-w-6xl min-h-screen my-10 p-0">

        <DialogHeader className="bg-primary text-black flex flex-col justify-end pb-5 pl-5 bg-[url('/frame1.png')] bg-opacity-50 bg-no-repeat">

            <div className="flex items-center gap-1 ">
            <Icon icon="icon-park-solid:success" className="w-10 h-10"/>
            <DialogTitle className="scroll-m-20 text-4xl capitalize font-bold tracking-tight text-black py-4">
                {`"${router.query['service'] || '-' }"`}
            </DialogTitle>
            </div>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </Page>
  )
}

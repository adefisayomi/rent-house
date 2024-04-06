import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export function FooterNewsLetter () {
    return (
        <div className="p-2 bg-primary rounded-3xl w-full max-w-6xl text-black py-4 flex flex-col items-center gap-4">
            <h2 className="scroll-m-20 capitalize text-3xl font-bold tracking-tight first:mt-0 text-center">Looking for a hassle free house to rent in nigeria?</h2>
            <p className="text-sm text-center max-w-3xl">Look no further! Subscribe now to receive hassle-free house rental updates straight to your inbox. Let us simplify your search and help you find your dream home effortlessly</p>

            <div className="w-full max-w-lg bg-white rounded-lg p-2 h-16 mt-2 flex items-center gap-2">
                <div className="flex items-start w-full">
                    <Input placeholder="Enter your email address" className="border-none focus-visible:ring-0 shadow-none" />
                </div>
                <Button className="rounded-lg px-5 font-bold bg-black text-white hover:bg-black">
                  Subscribe
                </Button>
            </div>
        </div>
    )
}
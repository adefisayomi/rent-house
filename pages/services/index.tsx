import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { _services } from "@/src/home/ServiceDescription";
import Layout from "@/src/layout";
import { Link } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";



export default function Services () {

    return (
        <Page title="services">
            <div className="w-full bg-primary min-h-screen pb-20">
                <div className="w-full bg-black relative h-[50vh]">
                    <div className="absolute left-0 bottom-0">
                        <Image
                            src='/services-bg.png'
                            alt='services page'
                            width={800}
                            height={800}
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-full max-w-9xl mx-auto flex items-end justify-end h-full pb-6">
                        <h1 className="z-[1] md:text-6xl text-7xl text-right font-bold tracking-tight lg:text-8xl text-primary uppercase">
                            our <br /> services
                        </h1>
                    </div>
                </div>

                <div className="w-full max-w-9xl mx-auto flex flex-col items-center text-black px-2 py-10">
                    <p className="text-lg text-center max-w-6xl">
                        Welcome to RentHouse, your premier destination for hassle-free renting in Lagos. At RentHouse, we offer a comprehensive range of services designed to make your renting experience seamless, convenient, and enjoyable. 
                    </p>

                    <div className="w-full max-w-9xl grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 mx-auto pt-20 px-2 md:px-0">
                        {
                            _services.map((service, index) => (
                                <ServiceComponent key={index} service={service} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}

Services.getLayout = (page: ReactNode) => <Layout>{page}</Layout>


type ServiceProps = {
    service: {
        header: string;
        icon: any;
        description: string;
        image: string;
    }
}
function ServiceComponent ({service}: ServiceProps) {
    const router = useRouter()
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-4 border p-2 md:p-6 rounded-xl py-4 md:py-2">
            <div className="flex flex-col md:items-end items-start gap-4 md:max-w-[300px]">
                <div className="flex justify-center flex-col md:items-end items-start">
                    {
                    service.header.split(" ").map((_, index) => (
                        <h2 key={index} className="scroll-m-20 text-xl font-bold tracking-tight first:mt-0 capitalize leading-normal">{_}</h2>
                    ))
                    }
                </div>
                <p className="text-sm text-left md:text-right">{service.description}</p>

                <Button onClick={() => router.push(`/services/${service.header.split(' ').join('-').toLowerCase()}`)} className="rounded-full bg-black text-white hover:bg-black hover:text-primary " size={'sm'}>
                    Learn More
                </Button>
            </div>
            <div className="w-fit h-fit overflow-hidden rounded-xl">
            <img src={service.image} alt={service.header} className="w-full flex object-cover md:max-w-[350px] aspect-square rounded-xl h-full transform transition duration-300 hover:scale-110" />
            </div>
        </div>
    )
}
import Page from "@/components/Page";
import { ReactElement, ReactNode, useEffect } from "react";
import Layout from "@/src/layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ServiceDescription from "@/src/home/ServiceDescription";


export default function Home () {


  return (
    <Page title="">
      <div className="">
        <div className="w-full  flex mx-auto flex-col relative h-[88vh]">
            <motion.div 
              className="h-full flex items-start flex-col justify-center gap-2  w-full max-w-9xl mx-auto"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="scroll-m-20 pb-2 text-4xl font-normal capitalize tracking-tight first:mt-0">seamless <span className="font-medium text-primary">rentals,</span></h2>
              <h2 className="scroll-m-20 pb-2 text-4xl font-normal capitalize tracking-tight first:mt-0">skip the  <span className="font-medium text-primary">agents hassles,</span></h2>

              <p className="text-sm max-w-xl">
              Welcome to the future of hassle-free living in Nigeria! Our mission is to redefine the way you rent, putting you in control of your housing journey without the unnecessary headaches. Experience the true essence of Lagos living, minus the traditional agent wahala.
              </p>

              <div className="w-full max-w-lg border-2 border-stone-400 rounded-lg p-2 h-20 mt-14 flex items-center gap-2">
                <div className="flex items-start w-full">
                    <Icon icon="mdi:house-search" className="w-9 h-9 text-stone-400"/>
                    <Input placeholder="Search by city, address or state " className="border-none focus-visible:ring-0" />
                </div>
                <Button className="rounded-full px-5 font-bold">
                  Search
                </Button>
              </div>
            </motion.div>

            <div className="absolute right-0 bottom-0">
              <Image
                src='/home-bg.png'
                alt='home page'
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
        </div>

        <div className="w-full">
          <ServiceDescription />    
        </div>
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>



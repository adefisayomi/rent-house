import { FooterNewsLetter } from "@/src/newsletter";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";



export default function Footer ({disableNewsletter}: {disableNewsletter?: boolean}) {

    return (
        <div className="w-full bg-white p-2 flex flex-col items-center gap-4 pb-8 pt-20">
            {!disableNewsletter && <FooterNewsLetter />}

            <div className="flex items-start md:flex-row flex-col justify-between gap-4 max-w-6xl w-full mt-10">
                <div className="flex flex-col items-start text-black border-t border-slate-300 w-full p-2 md:border-none  md:w-fit">
                    <Link href='/'>
                        <Image
                            src="/logo-black.png"
                            alt='logo'
                            width={500}
                            height={500}
                            className="w-full max-w-[120px] mb-4"
                        />
                    </Link>

                    <div className="space-y-2 text-sm">
                        <Link  href="tel:+234-816-920-8730" aria-label="Our phone" title="Our phone" className="flex items-center gap-1 font-medium text-xs">
                            <Icon icon="ic:baseline-phone" className="w-6 h-6 "/>
                            +234 234 567 823
                        </Link>

                        <Link  href="mailto:info@renthouse.com" aria-label="Our email" title="Our email" className="flex items-center gap-1 font-medium text-xs">
                            <Icon icon="material-symbols:mail" className="w-6 h-6 "/>
                            info@renthouse.com
                        </Link>

                        <Link  href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="flex items-center gap-1 font-medium text-xs">
                            <Icon icon="mdi:location" className="w-6 h-6 "/>
                            House 2, Clarence Avenue TX. USA
                        </Link>

                        <div className="flex items-center gap-4 pt-1">
                            <Icon icon="logos:facebook" className="w-5 h-5"/>
                            <Icon icon="entypo-social:linkedin-with-circle" className="w-5 h-5"/>
                            <Icon icon="ri:instagram-fill" className="w-5 h-5"/>
                            <Icon icon="ri:twitter-x-fill" className="w-5 h-5"/>
                        </div>
                    </div>
                </div>
                {footerListMenu.map((menu, index) => <MenuComponent key={index} menu={menu} />)}
            </div>


            <div className="w-full max-w-9xl mx-auto text-xs border-t border-slate-300 text-black flex items-center justify-center capitalize pt-4">
                copyright &copy; 2024 Rent-house. All right reserved by promediatech
            </div>
        </div>
    )
}

type FooterMenu = {
    menu?: {
        header: string;
        list: {label: string, url: string}[];
    }
}
function MenuComponent ({menu}: FooterMenu) {

    return (
        <div className="text-black border-t border-slate-300 w-full p-2 md:border-none  md:w-fit">
            <h4 className="scroll-m-20 text-lg capitalize font-semibold mb-4 tracking-tight">
                {menu?.header}
            </h4>

            <ul className="flex flex-col items-start gap-2 text-xs font-medium capitalize">
                {
                    menu?.list.map((list, index) => (
                        <Link key={index} href={list.url}><li className="hover:underline">{list.label}</li></Link>
                    ))
                }
            </ul>
        </div>
    )
}


const footerListMenu = [
    {header: 'company', list: [
        {label: 'about', url: '/about-us'},
        {label: 'blog', url: '/blog'},
        {label: 'location map', url: '/map'},
        {label: 'faq', url: '/faq'},
        {label: 'contact us', url: '/contact-us'},
    ]},
    {header: 'services', list: [
        {label: 'meet our agents', url: '/agents'},
        {label: 'properties', url: '/listings'},
        {label: 'houses', url: '/listings'},
        {label: 'office space', url: '/office-space'},
        {label: 'legal assistance', url: '/legal'},
    ]},
    {header: 'popular search', list: [
        {label: 'apertment low to high', url: '/agents'},
        {label: 'property for rent', url: '/listings'},
        {label: 'featured properties', url: '/listings'},
        {label: 'office', url: '/office-space'},
        {label: 'new properties', url: '/legal'},
    ]},
]
import { ReactElement } from "react";
import { Icon } from "@iconify/react";


export default function ServiceDescription () {

    return (
        <div className="w-full bg-primary p-2 flex flex-col items-center gap-4 py-10 ">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl text-black py-4">
                why choose us ?
            </h1>
            <p className="text-center max-w-4xl pb-10 text-black">{" Welcome to RentHouse, your premier choice for seamless renting experiences in Nigeria. At RentHouse, we've curated a comprehensive suite of services tailored to ensure hassle-free renting. Our commitment to customer satisfaction underscores every interaction, making choosing us synonymous with convenience, reliability, and unparalleled peace of mind. Whether you're a seasoned renter or new to the process, RentHouse is your ultimate destination for stress-free living in Nigeria."}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {
                    _services.map((service, index) => (
                        <ListComponent service={service} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

type ServiceProps = {
    service: {
        header: string, icon: ReactElement, description: string
    }
}
function ListComponent ({service}: ServiceProps) {
    const {icon, header, description} = service

    return (
      <div className="w-full rounded-2xl bg-black flex py-10 flex-col items-center gap-6 md:max-w-[280px] aspect-square md:aspect-auto cursor-pointer justify-between">
        <div>{icon}</div>
        <div className="flex justify-center flex-col items-center">
        {
          header.split(" ").map((_, index) => (
            <h2 key={index} className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 capitalize leading-normal">{_}</h2>
          ))
        }
        </div>
        <p className="text-center text-sm px-1 text-primary">{description}</p>
      </div>
    )
  }
  

  const _services = [
    {header: 'verified properties', icon: <Icon icon="icon-park-solid:success" className="w-10 h-10"/>, description: 'Explore a diverse selection of verified properties, meticulously curated to meet your specific needs and preferences. From cozy apartments to spacious family homes, we have the perfect rental waiting for you.'},
    {header: 'Property Management System', icon: <Icon icon="icon-park-outline:spanner" className="w-10 h-10"/>, description: 'Experience unparalleled convenience with our advanced property management system. Streamline rent payments, maintenance requests, and communication with landlords—all in one centralized platform.'},
    {header: 'Legal Assistance', icon: <Icon icon="mdi:legal" className="w-10 h-10"/>, description: 'Experience unparalleled convenience with our advanced property management system. Streamline rent payments, maintenance requests, and communication with landlords—all in one centralized platform.'},
    {header: 'Transparent Pricing', icon: <Icon icon="icomoon-free:price-tags" className="w-10 h-10"/>, description: 'At RentHouse, transparency is our priority. Rest assured knowing that our pricing is clear, upfront, and free from hidden fees or surprises. With us, what you see is what you get'},
    {header: 'Mutual Partnerships', icon: <Icon icon="mdi:partnership-outline" className="w-10 h-10"/>, description: 'Benefit from our extensive partnerships with leading mobility companies, cleaning services, interior firms, and more. Enjoy exclusive discounts and seamless access to essential services to enhance your renting experience'},
    {header: 'Renters Insurance Referrals', icon: <Icon icon="ep:connection" className="w-10 h-10"/>, description: 'Protect your belongings and your peace of mind with our renters insurance referrals. Gain access to trusted insurance providers offering comprehensive coverage tailored to your needs'},
    {header: 'negotiation assistance', icon: <Icon icon="foundation:hearing-aid" className="w-10 h-10"/>, description: 'Our expert team provides negotiation assistance, ensuring fair and favorable rental terms that work for both tenants and landlords. Let us handle the negotiations while you focus on finding your dream home'},
    {header: 'community forum', icon: <Icon icon="healthicons:forum" className="w-10 h-10"/>, description: 'Connect with landlords and fellow renters through our vibrant community forum. Share experiences, seek advice, and build meaningful connections within the RentHouse community'},
  ]
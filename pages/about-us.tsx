import Page from "@/components/Page";
import { ReactNode } from "react";
import Layout from "@/src/layout";
import Image from "next/image";


export default function AboutUs () {


  return (
    <Page title="About-Us">
      <div className="bg-primary w-full min-h-screen py-10">
          <div className="w-full max-w-9xl mx-auto overflow-hidden">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black capitalize mb-10">
              What we represent
            </h1>

            <div className="w-full flex flex-col gap-10 text-sm text-black max-w-4xl">
              <p >{"At Rent-House, we understand that finding the perfect home can be a daunting task. Whether you're searching for a cozy apartment, a spacious villa, or a trendy loft, we are committed to making your renting experience seamless and enjoyable."}
              </p>
              <p>{"Our mission is to provide a comprehensive platform that connects tenants with verified properties, reliable services, and a supportive community. With Rent-House, you can rest assured that you'll find a home that suits your lifestyle and budget."}
              </p>

              <div className="w-full flex flex-col gap-2">
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">Why Choose Rent-House?</h2>
                <ul className="list-[square] pl-8 flex flex-col items-start gap-4">
                  <li><strong>Verified Properties:</strong>{" We understand the importance of security and peace of mind when renting a property. That's why we meticulously verify each listing to ensure that it meets our standards of quality and safety."}</li>
                  <li><strong>Wide Selection:</strong> {"Whether you're looking for a furnished studio in Victoria Island or a family-friendly house in Lekki, we have a diverse range of properties to suit every need and preference."}</li>
                <li><strong>Reliable Services:</strong> {"From property inspections to lease agreements, our team of professionals is dedicated to providing you with top-notch service every step of the way. We're here to make the renting process hassle-free and efficient"}.</li>
                <li><strong>Supportive Community:</strong> {"Renting a home is more than just finding four walls and a roof – it's about building a sense of belonging. At Rent-House, we foster a supportive community where tenants can connect, share experiences, and feel at home."}</li>
                </ul>
              </div>

              <div className="w-full flex flex-col gap-2">
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">How It Works:</h2>
                <ul className="list-[square] pl-8 flex flex-col items-start gap-4">
                  <li><strong>Search:</strong>{" Use our intuitive search filters to narrow down your options based on location, price, size, and amenities."}</li>
              <li><strong>View:</strong> {"Browse through detailed listings, complete with photos, descriptions, and virtual tours, to find the perfect property for you."}</li>
              <li><strong>Connect:</strong>{" Reach out to our friendly team of experts who will guide you through the rental process and answer any questions you may have."}</li>
              <li><strong>Move In:</strong> {"Once you've found your dream home, we'll handle the paperwork and logistics, so you can move in with ease and peace of mind."}</li>
                </ul>
              </div>

              <div className="w-full flex flex-col gap-2">
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">Join the Rent-House Community Today!</h2>
                <ul className="list-[square] pl-8 flex flex-col items-start gap-4">
                  <li>{"Whether you're a first-time renter or a seasoned tenant, Rent-House is here to help you find your ideal home in Lagos. Start your search today and embark on a journey to your new living space with confidence and excitement. Welcome to Rent-House – where finding your perfect home is just a click away."}</li>
                </ul>
              </div>

            </div>

            <div className="mt-20 flex flex-col-reverse md:flex-row justify-center items-center gap-10">
              <Image
                  src='/about-us.png'
                  alt='about-us1'
                  width={1000}
                  height={1000}
                  className='w-full max-w-[600px] object-cover '
                />
              <div className="flex flex-col gap-4 text-black max-w-lg">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
                  Our Mission
                </h2>
                <p>{"Our mission at Rent-House is simple: to revolutionize the renting experience in Lagos. We strive to empower tenants by offering a wide range of verified properties, transparent pricing, and exceptional customer service. Our goal is to make renting hassle-free, transparent, and rewarding for everyone involved."}</p>
              </div>
            </div>
          </div>
      </div>
    </Page>
  );
}

AboutUs.getLayout = (page: ReactNode) => <Layout>{page}</Layout>
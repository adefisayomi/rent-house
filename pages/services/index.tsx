import Page from "@/components/Page";
import Layout from "@/src/layout";
import { ReactNode } from "react";



export default function Services () {

    return (
        <Page title="services">
            <div>
                Sevices
            </div>
        </Page>
    )
}

Services.getLayout = (page: ReactNode) => <Layout>{page}</Layout>
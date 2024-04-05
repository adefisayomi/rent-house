import Page from "@/components/Page";
import { ReactNode } from "react";
import Layout from "@/src/layout";


export default function AboutUs () {


  return (
    <Page title="About-Us">
      <div>
          aboit us 
      </div>
    </Page>
  );
}

AboutUs.getLayout = (page: ReactNode) => <Layout>{page}</Layout>
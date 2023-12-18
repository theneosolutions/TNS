import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const Service1 = dynamic(() => import("@/components/service/Service1"));
const ServiceBrand = dynamic(() => import("@/components/brand/ServiceBrand"));
const DigitalAgencyCTA = dynamic(() =>
  import("@/components/cta/DigitalAgencyCTA")
);
const ServiceV6Hero = dynamic(() => import("@/components/hero/ServiceV6Hero"));

const Service = () => {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceV6Hero />
          <Service1 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;

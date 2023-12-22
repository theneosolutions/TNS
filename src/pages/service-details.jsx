import dynamic from "next/dynamic";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Data from "../data/services";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const ServiceDetailsDevelopment = dynamic(() =>
  import("@/components/development/ServiceDetailsDevelopment")
);
const ServiceDetailsWorkflow = dynamic(() =>
  import("@/components/workflow/ServiceDetailsWorkflow")
);
const ServiceDetailsService = dynamic(() =>
  import("@/components/service/ServiceDetailsService")
);
const ServiceDetailsFaq = dynamic(() =>
  import("@/components/faq/ServiceDetailsFaq")
);
const DigitalAgencyCTA = dynamic(() =>
  import("@/components/cta/DigitalAgencyCTA")
);

const ServiceDetails = () => {
  const [state, setState] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      const matchingObject = Data.find((item) => item.name === search);
      setState(matchingObject);
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Service Details</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          {state && <ServiceDetailsDevelopment data={state} />}
          {state && <ServiceDetailsWorkflow data={state} />}
          {state && <ServiceDetailsService data={state} />}
          {state && <ServiceDetailsFaq data={state} />}
          
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;

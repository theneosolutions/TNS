import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Data from "../data/services";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const ServiceDetails = () => {
  console.log("ServiceJson", Data);
  const [state, setState] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      // Find the object in Data with a matching name
      const matchingObject = Data.find((item) => item.name === search);
      setState(matchingObject);
    }
  }, [search]);
  console.log("state", state);

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
          {state && <ServiceDetailsWorkflow data={state} />}{" "}
          {state && <ServiceDetailsService data={state} />}{" "}
          {state && <ServiceDetailsFaq data={state} />}{" "}
          {state && <DigitalAgencyCTA data={state} />}
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;

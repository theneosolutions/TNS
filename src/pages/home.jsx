import React, { lazy, Suspense } from "react";
import Head from "next/head";

const RootLayout = lazy(() => import("@/components/common/layout/RootLayout"));
const DigitalMarketingHero = lazy(() =>
  import("@/components/hero/DigitalMarketingHero")
);
const DigitalMarketingBrand = lazy(() =>
  import("@/components/brand/DigitalMarketingBrand")
);
const DigitalMarketingAbout = lazy(() =>
  import("@/components/about/DigitalMarketingAbout")
);
const DigitalMarketingService = lazy(() =>
  import("@/components/service/DigitalMarketingService")
);
const DigitalMarketingWorkflow = lazy(() =>
  import("@/components/workflow/DigitalMarketingWorkflow")
);
const DigitalMarketingPrice = lazy(() =>
  import("@/components/price/DigitalMarketingPrice")
);
const DigitalMarketingBlog = lazy(() =>
  import("@/components/blog/DigitalMarketingBlog")
);

const DigitalMarketing = () => {
  return (
    <div>
      <Head>
        <title>The Neo Solutions</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <RootLayout header="header1" footer="footer1">
            <DigitalMarketingHero />
            <DigitalMarketingBrand />
            <DigitalMarketingAbout />
            <DigitalMarketingService />
            <DigitalMarketingWorkflow />
            <DigitalMarketingPrice />
            <DigitalMarketingBlog />
          </RootLayout>
        </Suspense>
      </main>
    </div>
  );
};

export default DigitalMarketing;

import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const DigitalMarketingHero = dynamic(() =>
  import("@/components/hero/DigitalMarketingHero")
);
const DigitalMarketingBrand = dynamic(() =>
  import("@/components/brand/DigitalMarketingBrand")
);
const DigitalMarketingAbout = dynamic(() =>
  import("@/components/about/DigitalMarketingAbout")
);
const DigitalMarketingService = dynamic(() =>
  import("@/components/service/DigitalMarketingService")
);
const DigitalMarketingWorkflow = dynamic(() =>
  import("@/components/workflow/DigitalMarketingWorkflow")
);
const DigitalMarketingPrice = dynamic(() =>
  import("@/components/price/DigitalMarketingPrice")
);
const DigitalMarketingBlog = dynamic(() =>
  import("@/components/blog/DigitalMarketingBlog")
);

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>The Neo</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingBrand />
          <DigitalMarketingAbout />
          <DigitalMarketingService />
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />
          {/* <DigitalMarketingBlog /> */}
        </RootLayout>
      </main>
    </div>
  );
}

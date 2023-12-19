import dynamic from "next/dynamic";
import Head from "next/head";

// Import components using dynamic import
const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const AboutHero = dynamic(() => import("@/components/hero/AboutHero"));
const AboutStory = dynamic(() => import("@/components/story/AboutStory"));
const AboutCounter = dynamic(() => import("@/components/counter/AboutCounter"));
const DigitalMarketingBrand = dynamic(() =>
  import("@/components/brand/DigitalMarketingBrand")
);
const DigitalAgencyBrand = dynamic(() =>
  import("@/components/brand/DigitalAgencyBrand")
);
const DigitalAgencyCTA = dynamic(() =>
  import("@/components/cta/DigitalAgencyCTA")
);

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <DigitalMarketingBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;

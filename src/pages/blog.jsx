import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const BlogElementV2 = dynamic(() => import("@/components/blog/BlogElementV2"));
const DigitalAgencyCTA = dynamic(() =>
  import("@/components/cta/DigitalAgencyCTA")
);

const BlogV2 = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blog V2 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <BlogElementV2 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogV2;

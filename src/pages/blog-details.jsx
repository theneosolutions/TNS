import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const BlogDetails1 = dynamic(() => import("@/components/blog/BlogDetails1"));
const BlogRelated = dynamic(() => import("@/components/blog/BlogRelated"));
const DigitalAgencyCTA = dynamic(() =>
  import("@/components/cta/DigitalAgencyCTA")
);

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Blog Details</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <BlogDetails1 />
          <BlogRelated />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetails;

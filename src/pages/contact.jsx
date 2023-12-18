import dynamic from "next/dynamic";
import Head from "next/head";

const RootLayout = dynamic(() =>
  import("@/components/common/layout/RootLayout")
);
const Contact1 = dynamic(() => import("@/components/contact/Contact1"));

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default Contact;

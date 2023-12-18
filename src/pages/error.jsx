import Head from "next/head";
import dynamic from "next/dynamic"; // Import the dynamic function

const Error = () => {
  const DynamicRootLayout = dynamic(() =>
    import("@/components/common/layout/RootLayout")
  );

  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Error Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DynamicRootLayout header="header3" footer="none"></DynamicRootLayout>
      </main>
    </>
  );
};

export default Error;

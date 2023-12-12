import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss";
import "@/styles/extra.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaMeasurementId={gaMeasurementId} />
      <Component {...pageProps} />
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import allNavData from "../../../data/navData.json";
import Preloader from "@/components/preloader/Preloader";
import CommonAnimation from "../CommonAnimation";
import ScrollSmootherComponents from "../ScrollSmootherComponents";
import CursorAnimation from "../CursorAnimation";
import Switcher from "../Switcher";
import ScrollTop from "../ScrollTop";

// Import Header1 and Footer1 dynamically
const Header1 = dynamic(() => import("@/components/header/Header1"));
const Footer1 = dynamic(() => import("@/components/footer/Footer1"));

const HeaderContent = ({ navData }) => {
  return <Header1 navData={navData} />;
};
const FooterContent = () => {
  return <Footer1 />;
};

export default function RootLayout({
  children,
  header = "",
  footer = "",
  defaultMode = "",
}) {
  const [mode, setMode] = useState(defaultMode);
  const [navData, setNavData] = useState({});

  const cursor1 = useRef();
  const cursor2 = useRef();

  useEffect(() => {
    setNavData(allNavData);
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [mode]);

  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        <div className="cursor" id="team_cursor">
          Drag
        </div>
        <Preloader />
        <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
        {/* <Switcher
          setMode={setMode}
          mode={mode}
          cursor1={cursor1}
          cursor2={cursor2}
        /> */}
        <ScrollTop />
        <HeaderContent navData={navData} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterContent />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
}

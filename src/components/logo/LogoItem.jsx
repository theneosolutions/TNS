import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import DummyLogo from "../../../public/assets/imgs/logo-dummy.png";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function LogoItem() {
  const [logoData, setLogoData] = useState({});
  useEffect(() => {
    GetLogo();
  }, []);
  function GetLogo() {
    axios
      .get(URL + "/api/main-logos?populate=%2A")
      .then((res) => {
        setLogoData(res?.data?.data[0]?.attributes);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  const Logo = () => {
    const imageUrl = logoData?.image?.data[0]?.attributes?.url;

    const src = imageUrl ? `${URL}${imageUrl}` : DummyLogo;

    return <Image width={150} height={50} src={src} alt="Logo" />;
  };

  return (
    <>
      <div className="header__logo-2">
        <Link href={"/digital-marketing"} className="logo-dark">
          <Logo />
        </Link>
      </div>
    </>
  );
}

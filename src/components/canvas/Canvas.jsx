import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";
import DummyLogo from "../../../public/assets/imgs/logo-dummy.png";

import axios from "axios";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [address, setAddress] = useState({});
  const [subAccordion, setSubAccordion] = useState(0);
  const [links, setLinks] = useState([]);
  const [footerLogo, setFooterLogo] = useState({});
  const headerTitle = useRef();
  const URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {
              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  useEffect(() => {
    GetData();
    GetDataSocail();
    GetFooterLogo();
  }, []);
  function GetData() {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/addresses")
      .then((res) => {
        console.log("res", res?.data?.data[0]?.attributes);
        setAddress(res?.data?.data[0]?.attributes);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  function GetDataSocail() {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/socails")
      .then((res) => {
        setLinks(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  function GetFooterLogo() {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/logos?populate=%2A")
      .then((res) => {
        setFooterLogo(res?.data?.data[0]?.attributes);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  const FooterLogo = () => {
    const imageUrl = footerLogo?.image?.data[0]?.attributes?.url;
    const src = imageUrl ? `${URL}${imageUrl}` : DummyLogo;

    return (
      <Image priority height={30} width={90} src={src} alt="Footer Logo" />
    );
  };

  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/digital-marketing">
                <FooterLogo />
              </Link>
            </div>
            <div className="offcanvas__social" style={{ marginTop: -80 }}>
              <h3 className="social-title">Follow Us</h3>
              <ul>
                {links?.map((v, k) => {
                  return (
                    <li>
                      <a href={v.attributes.link}>{v.attributes.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="offcanvas__links"></div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href={"/home"}>HOME</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/about"}>ABOUT</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service"}>SERVICE</Link>
                      <div className="accordian-btn">
                        {accordion === 3 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(3)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 3 ? { display: "" } : { display: "none" }
                      }>
                      {array.map((v, k) => {
                        return (
                          <li>
                            <Link href={v.link}>{v.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>

                  <li>
                    <div className="header_title">
                      <Link href={"/blog"}>BLOG</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/contact"}>CONTACT</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </form>
            </div>
            <div className="offcanvas__contact " style={{ marginTop: -50 }}>
              <h3>Get in touch</h3>
              <ul>
                {address?.number ? (
                  <>
                    {address?.number.split(",")?.map((v, k) => {
                      return (
                        <li>
                          <a href="tel:+(2)578365379">{v}</a>
                        </li>
                      );
                    })}
                  </>
                ) : null}
                <li>
                  <a href="mailto:info@theneosolutions.com">{address?.email}</a>
                </li>
                <li>
                  <span>{address?.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;

const array = [
  {
    name: "Mobile App",
    link: "/service-details?search=mobile-app",
  },
  {
    name: "Web App",
    link: "/service-details?search=web-app",
  },
  {
    name: "SAAS",
    link: "/service-details?search=saas",
  },
  {
    name: "Software",
    link: "/service-details?search=software",
  },
  {
    name: "MicroServices",
    link: "/service-details?search=microservices",
  },
  {
    name: "Cyber Security",
    link: "/service-details?search=cyber-security",
  },
  {
    name: "DevOps",
    link: "/service-details?search=dev-ops",
  },
  {
    name: "Marketing",
    link: "/service-details?search=marketing",
  },
  {
    name: "Social Media Marketing",
    link: "/service-details?search=social-media-marketing",
  },
  {
    name: "Search Engine Optimization",
    link: "/service-details?search=search-engine-optimization",
  },
  {
    name: "Search Engine Marketing",
    link: "/service-details?search=search-engine-marketing",
  },
  {
    name: "Content Marketing",
    link: "/service-details?search=content-marketing",
  },
  {
    name: "Email Marketing",
    link: "/service-details?search=email-marketing",
  },
  {
    name: "Interactive Content Marketing",
    link: "/service-details?search=interactive-content-marketing",
  },
  {
    name: "Video Marketing",
    link: "/service-details?search=video-marketing",
  },
  {
    name: "Graphic Design",
    link: "/service-details?search=graphic-designing",
  },
  {
    name: "Video Design",
    link: "/service-details?search=video-design",
  },
  {
    name: "UI/UX Design",
    link: "/service-details?search=ui-ux-design",
  },
];

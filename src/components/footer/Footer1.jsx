import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
import Link from "next/link.js";
import SiteLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Image from "next/image.js";
import axios from "axios";
import DummyLogo from "../../../public/assets/imgs/logo-dummy.png";

gsap.registerPlugin(ScrollTrigger);

export default function Footer1() {
  const menuAnim = useRef();
  const [links, setLinks] = useState([]);
  const [footerLogo, setFooterLogo] = useState({});
  const URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let endTl = gsap.timeline({
          repeat: -1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
          },
        });
        gsap.set(".end", {
          opacity: 0,
        });
        gsap.to(".end", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
            once: true,
          },
        });
        let mySplitText = new SplitText(".end", { type: "words,chars" });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale([
          "#F9D371",
          "#F47340",
          "#EF2F88",
          "#8843F2",
        ]);
        endTl.to(chars, {
          duration: 0.5,
          scaleY: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          transformOrigin: "center bottom",
        });
        endTl.to(
          chars,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            color: (i, el, arr) => {
              return endGradient(i / arr.length).hex();
            },
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        );
        endTl.to(chars, {
          color: "#c9f31d",
          duration: 1.4,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  useEffect(() => {
    setTimeout(() => GetData(), 2000);
    setTimeout(() => GetFooterLogo(), 3000);
  }, []);
  function GetData() {
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
      <footer className="footer__area-3">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <FooterLogo />
              <p>{footerLogo?.discription}</p>
            </div>
            <div className="footer__social-3">
              <ul>
                {links?.map((v, k) => {
                  return (
                    <li key={k}>
                      <a href={v.attributes.link}>{v.attributes.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer__contact-3">
              <Link className="end" href="/contact">
                Let’s talk
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="footer__copyright-3">
                  <p>
                    © 2022 - 2025 | Alrights reserved by{" "}
                    <a href="#" target="_blank">
                      The Neo Solutions
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/about">about us</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

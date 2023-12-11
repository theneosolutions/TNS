import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

import Image from "next/image";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingBrand = () => {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const [brandsData, setBrandsLogoData] = useState([]);

  useEffect(() => {
    GetBrandLogo();
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          gsap.set(".fade_bottom", { y: 30, opacity: 0 });

          if (device_width < 1023) {
            const fadeArray = gsap.utils.toArray(".fade_bottom");
            fadeArray.forEach((item, i) => {
              let fadeTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
              });
            });
          } else {
            gsap.to(".fade_bottom", {
              scrollTrigger: {
                trigger: ".fade_bottom",
                start: "top center+=300",
                markers: false,
              },
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
              stagger: {
                each: 0.2,
              },
            });
          }
        });
        return () => tHero.revert();
      }, 100);
    }
  }, []);
  function GetBrandLogo() {
    axios
      .get(URL + "/api/brands?populate=%2A")
      .then((res) => {
        console.log("brand logo", res?.data?.data);
        setBrandsLogoData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const Logo = (url) => {
    const imageUrl = url;

    const src = imageUrl ? `${URL}${imageUrl}` : DummyLogo;

    return <Image priority width={97} height={67} src={src} alt="Brand Logo" />;
  };
  return (
    <>
      <section className="brand__area">
        <div className="container pt-140 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
                We worked with global largest brands
              </h2>
              <div className="brand__list-3">
                {brandsData?.map((v, k) => {
                  return (
                    <div className="brand__item-2 fade_bottom" key={k}>
                      {Logo(v.attributes?.image?.data[0]?.attributes.url)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingBrand;

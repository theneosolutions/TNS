import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  const [data, setData] = useState([]);
  const URL = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    GetServicesData();
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };
  function GetServicesData() {
    axios
      .get(URL + "/api/services?populate=%2A")
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  console.log("data service", data);
  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Services</h2>
                <h3 className="sec-title title-anim">
                  Our marketing <br /> Services
                </h3>
                <p>
                  Consumers today rely heavily on digital means to research
                  products. We research a brand of bldend engaging with it,
                  according to the meanwhile, 51% of consumers say they use
                  Google to research products before buying.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              {data && (
                <div className="service__list-3" ref={serviceList}>
                  {data?.map((v, k) => {
                    return (
                      <div className="service__item-3 service_animation">
                        <h3>
                          <Link
                            href="/service-details?search=mobile-app"
                            className="service__title-3">
                            {v?.attributes?.heading}
                          </Link>
                        </h3>
                        <div className="service__content-3">
                          <p>{v?.attributes?.discription}</p>
                          {/* <ul className="">
                          <li>+ Mobile App Development</li>
                          <li>+ Website Development</li>
                          <li>+ Software Development </li>
                        </ul> */}
                        </div>
                        <div className="service__btn-3">
                          <div className="btn_wrapper">
                            <Link
                              href="/service-details?search=mobile-app"
                              className="wc-btn-black btn-hover btn-item">
                              <span></span> Details
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>

                        <div
                          className="service__hover-3"
                          style={{
                            backgroundImage: `url(${
                              URL + v?.attributes?.image?.data?.attributes?.url
                            })`,
                          }}></div>
                      </div>
                    );
                  })}

                  <div className="service3__img-wrap">
                    <div className="service3__img"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;

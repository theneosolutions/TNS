import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from 'next/image'

import Services1 from "../../../public/assets/imgs/service/1.jpg";
import Service2 from "../../../public/assets/imgs/service/2.jpg";
import Service3 from "../../../public/assets/imgs/service/3.jpg";
import Service4 from "../../../public/assets/imgs/service/4.jpg";
import Service5 from "../../../public/assets/imgs/service/5.jpg";
import Service6 from "../../../public/assets/imgs/service/6.jpg";
import Service7 from "../../../public/assets/imgs/service/7.jpg";
import Service8 from "../../../public/assets/imgs/service/8.jpg";
import Service9 from "../../../public/assets/imgs/service/9.jpg";
import Service10 from "../../../public/assets/imgs/service/10.jpg";
import Service11 from "../../../public/assets/imgs/service/11.jpg";
import Service12 from "../../../public/assets/imgs/service/12.jpg";
import Service13 from "../../../public/assets/imgs/service/13.jpg";
import Service14 from "../../../public/assets/imgs/service/14.jpg";



gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                   
                    <li>
                      <a href="#service_1">
                        Mobile <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Web <br />
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                      SAAS
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                      Software
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                      MicroServices
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                      Cyber <br /> Security
                      </a>
                    </li>
                    <li>
                      <a href="#service_7">
                      DevOps
                      </a>
                    </li>
                    <li>
                      <a href="#service_8">
                      Social <br /> Media Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_9">
                      Search<br /> Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a href="#service_10">
                      Search<br /> Engine Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_11">
                      Content<br />Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#service_12">
                      Graphic<br /> Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_13">
                      Video <br />Design
                      </a>
                    </li>
                    <li>
                      <a href="#service_14">
                      UI/UX <br />Design
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Services1}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service2}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service3}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service4}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service5}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service6}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service7}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service8}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service9}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service10}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Services1}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                        Mobile Development
                        </h2>
                        <p>
                        Mobile applications have become an integral part of modern business strategies, providing a direct and personalized connection to your customers. At Neo Solutions, we excel in crafting bespoke mobile applications tailored to your unique goals. 
                        </p>
                        <ul>
                          <li>+ React Native Framework</li>
                          <li>+ API Development</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ TypeScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service2}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Web Development
                        </h2>
                        <p>
                        In the digital age, your website is often the first impression your audience has of your brand. Neo Solutions specializes in creating responsive, user-friendly, and visually stunning websites that leave a lasting impact. 
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ React, Next Js,</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Node js, Java</li>
                          <li>+ TypeScript</li>
                          
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service3}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Software as a Service
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          <li>+ WordPress</li>
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                          <li>+ JavaScript</li>
                          <li>+ Fluter Framework</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service4}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Software Development 
                        </h2>
                        <p>
                          In today's fast-paced business environment, software is the backbone of many operations. Neo Solutions offers comprehensive software development services that empower your business processes. 
                        </p>
                        <ul>
                          <li>+ CRM</li>
                          <li>+ SAAS</li>
                          <li>+ Cloud Migration</li>
                          <li>+ JAVA based</li>
                         
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service5}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          MicroServices
                        </h2>
                        <p>
                          This is the second workshop of the UX design
                          methodology. Given all the conclusions drawn in the
                          personae workshop, we will project ourselves towards
                          the production of ideal user journeys. In other words:
                          how each persona can achieve their goal.
                        </p>
                        <ul>
                          <li>+ API Development</li>
                          
                          <li>+ Cloud Migration</li>
                          <li>+ Front End Development</li>
                         
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Cyber Security 
                        </h2>
                        <p>
                        Cybersecurity refers to the practice of protecting computer systems, networks, and data from theft, damage, unauthorized access, or any form of cyber threats.
                        </p>
                        <ul>
                          <li>+ Network Security</li>
                          <li>+ Endpoint Security</li>
                          <li>+ Identity and Access Management</li>
                          <li>+ Encryption</li>
                          <li>+ Application Security</li>
                          
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      
                    </div>
                    <div
                      className="service__item-7"
                      id="service_7"
                      data-secid="7"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service6}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Cyber Security 
                        </h2>
                        <p>
                        Cybersecurity refers to the practice of protecting computer systems, networks, and data from theft, damage, unauthorized access, or any form of cyber threats.
                        </p>
                        <ul>
                          <li>+ Network Security</li>
                          <li>+ Endpoint Security</li>
                          <li>+ Identity and Access Management</li>
                          <li>+ Encryption</li>
                          <li>+ Application Security</li>
                          
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;

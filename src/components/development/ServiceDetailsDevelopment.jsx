import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import ThumbDev23 from "../../../public/assets/imgs/about/3/1.jpg";

const ServiceDetailsDevelopment = ({ data }) => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  console.log("new data", data);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  {data?.data?.name}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>{data?.data?.section1?.content1}</p>
                  <p>{data?.data?.section1?.content2}</p>
                </div>
                <ul>
                  {data?.data?.section1?.list?.map((v, k) => {
                    return <li key={k}>+ {v}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                {console.log("hum tum", data?.data?.section1?.largeImage)}
                {data?.data?.section1?.largeImage && (
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={ThumbDev23}
                    alt="Development Image"
                    data-speed="auto"
                  />
                )}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev23}
                  alt="Development Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;

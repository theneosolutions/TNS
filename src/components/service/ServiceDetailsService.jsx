import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Image component
const DynamicImage = dynamic(() => import("next/image"));

// Dynamically import ServiceDetail and Shape6 images
const DynamicServiceDetail = dynamic(() =>
  import("../../../public/assets/imgs/thumb/service-detail.png")
);
const DynamicShape6 = dynamic(() =>
  import("../../../public/assets/imgs/icon/shape-6.png")
);

const ServiceDetailsService = ({ data }) => {
  console.log("datadata", data?.data?.section3);

  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {data?.data?.section3?.heading}
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <DynamicImage
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={DynamicServiceDetail}
                  alt="Service detail image"
                />
                <DynamicImage
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={DynamicShape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>{data?.data?.section3?.content1}</p>
                <p>{data?.data?.section3?.content2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;

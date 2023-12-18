import dynamic from "next/dynamic";

// Dynamically import Link component
const DynamicLink = dynamic(() => import("next/link"));

const DigitalAgencyCTA = ({ data }) => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">{data?.data?.section5?.text}</p>
                <h2 className="cta__title title-anim">
                  {data?.data?.section5?.heading}
                </h2>
                <div className="btn_wrapper">
                  <DynamicLink
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item">
                    <span></span>Let’s talk us{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </DynamicLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;

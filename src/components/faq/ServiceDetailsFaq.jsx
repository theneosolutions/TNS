import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = ({ data }) => {
  console.log("datadata", data?.data?.section4);

  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  {data?.data?.section4?.heading}{" "}
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample">
                    {data?.data?.section4?.list?.map((v, k) => {
                      return (
                        <Accordion.Item
                          key={k}
                          eventKey={v?.eventKey}
                          className="accordion-item">
                          <Accordion.Header
                            className="accordion-header"
                            id="headingOne">
                            {v?.question}
                          </Accordion.Header>
                          <Accordion.Body className="accordion-body">
                            <p>{v?.answer}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceDetailsFaq;

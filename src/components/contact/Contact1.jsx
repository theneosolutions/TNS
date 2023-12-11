import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Contact1 = () => {
  const [address, setAddress] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);
  useEffect(() => {
    GetData();
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

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/forms", {
        data: {
          Name: name,
          phone: phone,
          email: email,
          subject: subject,
          message: message,
        },
      })
      .then((res) => {
        console.log("response", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Great! We're excited to hear from you and let's start something special togerter. call us for any inquery."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}>
                  {"Don't be afraid man ! "}
                  <br />
                  say hello
                </h3>
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
                    <a href="mailto:info@theneosolutions.com">
                      {address?.email}
                    </a>
                  </li>
                  <li>
                    <span>
                      {address.address}
                      {/* Office No. 209, 2nd Floor, <br />
                      GulMohar Trade Centre <br /> Gulberg 2 Main Market,
                      (Lahore) */}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages *"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button
                          className="wc-btn-primary btn-hover btn-item"
                          type="submit">
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;

const ServiceDetailsWorkflow = ({ data }) => {
  return (
    <>
      <section className="workflow__area-6">
        <div className="container g-0 line pb-130">
          <div className="line-3"></div>
          <div className="workflow__wrapper-6">
            <div className="row">
              {data?.data?.section2?.map((v, k) => {
                return (
                  <div key={k} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">{v?.name}</h6>
                      <p>{v?.discription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;

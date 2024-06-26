import { ServiceInfoData } from "../../Data";
import "./serviceInfo.css";

const ServiceInfo = () => {
  return (
    <section className="service-info-contianer">
      <div className="wrapper">
        <div className="service-info-content">
          {ServiceInfoData.map((item) => {
            let { id, icon, title, desc } = item;

            return (
              <div className="service-info-item" key={id}>
                {icon}
                <h2 className="service-info-title">{title}</h2>
                <p className="service-info-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;

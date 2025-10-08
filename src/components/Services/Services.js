import React from "react";
import "./Services.css"; 
import "../../style.css";

const Services = () => {
  const services = [
    {
      icon: "🖥️",
      title: "Web Development and Managment",
      description: "Build responsive and user-friendly websites tailored to your business needs.",
      gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)", 
    },
    // {
    //   icon: "📱",
    //   title: "Mobile App Development",
    //   description: "We create cross-platform mobile applications that deliver seamless user experiences.",
    //   gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)", 
    // },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Design intuitive and visually appealing interfaces to enhance user engagement.",
      gradient: "linear-gradient(135deg, #00c6ff, #0072ff)", 
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Provide ongoing maintenance and support to ensure your systems run smoothly.",
      gradient: "linear-gradient(135deg, #56ab2f, #a8e063)", 
    },
  ];

  return (
    <div className="services-section">
      {/* <h2>Our Services</h2> */}
      <h1 className="project-heading">
      What  <strong className="purple">I offer </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      <div className="services-container">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ background: service.gradient }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
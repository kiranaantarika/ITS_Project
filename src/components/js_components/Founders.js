import React, { useState, useEffect } from "react";
import "../css-files/Founders.css";

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("executives");

  const team = {
    executives: [
    { image: "./images/employees/IMG-20250405-WA0003.jpg" },
  { image: "./images/employees/IMG-20250405-WA0004.jpg" },
  { image: "./images/employees/IMG-20250405-WA0005.jpg" },
  { image: "./images/employees/IMG-20250405-WA0006.jpg" },
  { image: "./images/employees/IMG-20250405-WA0007.jpg" },
  { image: "./images/employees/IMG-20250405-WA0008.jpg" },
  { image: "./images/employees/IMG-20250405-WA0009.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0010.jpg" },
  { image: "./images/employees/IMG-20250405-WA0011.jpg" },
  { image: "./images/employees/IMG-20250405-WA0012.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0013.jpg" },
  { image: "./images/employees/IMG-20250405-WA0014.jpg" },
  { image: "./images/employees/IMG-20250405-WA0015.jpg" },
  { image: "./images/employees/IMG-20250405-WA0016.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0017.jpg" },
  { image: "./images/employees/IMG-20250405-WA0018.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0019.jpg" },
  { image: "./images/employees/IMG-20250405-WA0020.jpg" },
  { image: "./images/employees/IMG-20250405-WA0021.jpg" },
  { image: "./images/employees/IMG-20250405-WA0022.jpg" },
  { image: "./images/employees/IMG-20250405-WA0023.jpg" },
  { image: "./images/employees/IMG-20250405-WA0024.jpg" },
  { image: "./images/employees/IMG-20250405-WA0025.jpg" },
  { image: "./images/employees/IMG-20250405-WA0026.jpg" },
  { image: "./images/employees/IMG-20250405-WA0027.jpg" },
  { image: "./images/employees/IMG-20250405-WA0028.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0029.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0030.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0031.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0032.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0033.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0034.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0035.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0036.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0037.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0038.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0039.jpg" },
  // { image: "./images/employees/IMG-20250405-WA0040.jpg" },
      { image: "./images/employees/IMG-20250405-WA0058.jpg" },
      { image: "./images/employees/IMG-20250405-WA0055.jpg" },
      { image: "./images/employees/IMG-20250405-WA0042.jpg" },
      { image: "./images/employees/IMG-20250405-WA0061.jpg" },
      { image: "./images/employees/IMG-20250405-WA0045.jpg" },
      { image: "./images/employees/IMG-20250405-WA0015.jpg" },
      
      { image: "./images/employees/IMG-20250405-WA0059.jpg" },
      { image: "./images/employees/IMG-20250405-WA0064.jpg" },
      { image: "./images/employees/IMG-20250405-WA0063.jpg" },
    ],
    // manager: {
    //   image: "./images/Profile-Images/Ramya.jpg",
    //   name: 'Ramya',
    //   title: 'Chief Technology Officer'
    // },
    employees: [
      { image: "./images/employees/5.jpg" },
      { image: "./images/employees/6.jpg" },
      { image: "./images/employees/7.jpg" },
      { image: "./images/employees/a.jpg" },
      { image: "./images/employees/8.jpg" },
      { image: "./images/employees/9.jpg" },
      { image: "./images/employees/10.jpg" },
      { image: "./images/employees/11.jpg" },
      { image: "./images/employees/12.jpg" },
      {
        image:
          "./images/employees/WhatsApp Image 2025-05-16 at 05.36.12_dc57cfde.jpg",
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`founder-container ${isVisible ? "visible" : ""}`}>
      <h1 className="founder-heading">The People Powering Our Success</h1>

      <div className="button-group">
        <button
          className={activeSection === "executives" ? "active" : ""}
          onClick={() => setActiveSection("executives")}
        >
          Cleaning
        </button>

        <button
          className={activeSection === "employees" ? "active" : ""}
          onClick={() => setActiveSection("employees")}
        >
          Deep Cleaning
        </button>
      </div>

      {/* Executives */}
      {/* {activeSection === "executives" && (
        <div className="row executives">
          {team.executives.map((exec, index) => (
            <div key={index} className="team-card">
              <img src={exec.image} alt={exec.name} className="team-image" />
              <h3 className="team-name">{exec.name}</h3>
              <p className="team-title">{exec.title}</p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          ))}
        </div>
      )} */}

      {activeSection === "executives" && (
        <div className="scroll-buttons">
          <button
            className="scroll-button left"
            onClick={() =>
              document
                .querySelector(".employees-scrollable")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
          >
            &lt;
          </button>

          <div className="row employees-scrollable">
            {team.executives.map((exec, index) => (
              <div key={index} className="employee-card">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="team-image large"
                />
                {/* <h3 className="team-name">{employee.name}</h3>
          <p className="team-title">{employee.title}</p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          </div> */}
              </div>
            ))}
          </div>

          <button
            className="scroll-button right"
            onClick={() =>
              document
                .querySelector(".employees-scrollable")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
          >
            &gt;
          </button>
        </div>
      )}

      {/* Manager */}
      {/* {activeSection === 'manager' && (
        <div className="row manager">
          <div className="manager-card">
            <img src={team.manager.image} alt={team.manager.name} className="team-image" />
            <h3 className="team-name">{team.manager.name}</h3>
            <p className="team-title">{team.manager.title}</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      )} */}

      {/* Employees */}
      {activeSection === "employees" && (
        <div className="scroll-buttons">
          <button
            className="scroll-button left"
            onClick={() =>
              document
                .querySelector(".employees-scrollable")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
          >
            &lt;
          </button>

          <div className="row employees-scrollable">
            {team.employees.map((employee, index) => (
              <div key={index} className="employee-card">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="team-image large"
                />
                {/* <h3 className="team-name">{employee.name}</h3>
          <p className="team-title">{employee.title}</p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
          </div> */}
              </div>
            ))}
          </div>

          <button
            className="scroll-button right"
            onClick={() =>
              document
                .querySelector(".employees-scrollable")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Founder;

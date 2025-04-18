import React, { useState, useEffect } from "react";
import "../css-files/Founders.css";

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("executives");

  const team = {
    executives: [
      { image: "./images/employees/IMG-20250405-WA0045.jpg" },
      { image: "./images/employees/IMG-20250405-WA0015.jpg" },
      { image: "./images/employees/IMG-20250405-WA0021.jpg" },
      { image: "./images/employees/IMG-20250405-WA0011.jpg" },
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
      { image: "./images/employees/IMG-20250405-WA0003.jpg" },
      { image: "./images/employees/IMG-20250405-WA0004.jpg" },
      { image: "./images/employees/IMG-20250405-WA0058.jpg" },
      { image: "./images/employees/IMG-20250405-WA0055.jpg" },
      { image: "./images/employees/IMG-20250405-WA0042.jpg" },
      { image: "./images/employees/IMG-20250405-WA0061.jpg" },
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
        {/* <button
          className={activeSection === 'manager' ? 'active' : ''}
          onClick={() => setActiveSection('manager')}
        >
          Manager
        </button> */}
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

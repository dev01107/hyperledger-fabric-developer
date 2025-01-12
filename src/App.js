import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <h1>Hire a Hyperledger Fabric Developer</h1>
        <p>Expert in blockchain solutions tailored to your business.</p>
        <a href='#contact' className='cta-button'>
          Contact Me
        </a>
      </header>

      <section className='about'>
        <h2>Why Choose Me?</h2>
        <p>
          I am a professional Hyperledger Fabric developer offering expertise in
          blockchain, smart contracts, and enterprise-grade solutions. With
          years of experience, I help businesses achieve secure and scalable
          systems.
        </p>
        <div className='about-boxes'>
          <div className='about-box'>
            <i className='fas fa-laptop-code'></i> {/* Icon for Expertise */}
            <h3>Expertise</h3>
            <p>🔗 Expertise in Hyperledger Fabric and Smart Contracts</p>
          </div>
          <div className='about-box'>
            <i className='fas fa-chart-line'></i>{" "}
            {/* Icon for Scalable Solutions */}
            <h3>Scalable Solutions</h3>
            <p>⚡ Scalable and Secure Blockchain Solutions</p>
          </div>
          <div className='about-box'>
            <i className='fas fa-globe-americas'></i>{" "}
            {/* Icon for Global Availability */}
            <h3>Global Availability</h3>
            <p>🌍 Open to Remote and International Projects</p>
          </div>
          <div className='about-box'>
            <i className='fas fa-chalkboard-teacher'></i>{" "}
            {/* Icon for Consultation & Training */}
            <h3>Consultation & Training</h3>
            <p>💡 Tailored Consultation and Training Services</p>
          </div>
        </div>
      </section>

      <section className='projects'>
        <h2>Common Projects I Have Worked On</h2>
        <p>
          Below are some typical projects where I have utilized Hyperledger
          Fabric to provide secure, scalable, and efficient blockchain
          solutions:
        </p>
        <div className='project-cards'>
          <div className='project-card'>
            <i className='fas fa-warehouse'></i> {/* Icon for Supply Chain */}
            <h3>Supply Chain Management</h3>
            <p>
              Developed a decentralized supply chain management system using
              Hyperledger Fabric to ensure transparency, traceability, and
              real-time updates of product status across the supply chain.
            </p>
          </div>
          <div className='project-card'>
            <i className='fas fa-credit-card'></i>{" "}
            {/* Icon for Financial Services */}
            <h3>Financial Services</h3>
            <p>
              Implemented a blockchain solution for financial institutions to
              manage cross-border payments, with reduced processing times and
              enhanced security.
            </p>
          </div>
          <div className='project-card'>
            <i className='fas fa-hospital'></i>{" "}
            {/* Icon for Healthcare Data Management */}
            <h3>Healthcare Data Management</h3>
            <p>
              Built a healthcare data management system to ensure privacy and
              secure sharing of patient data between healthcare providers and
              insurers using Hyperledger Fabric.
            </p>
          </div>
          <div className='project-card'>
            <i className='fas fa-vote-yea'></i> {/* Icon for Voting Systems */}
            <h3>Voting Systems</h3>
            <p>
              Developed a blockchain-based voting system for secure,
              transparent, and verifiable elections, reducing the risk of fraud
              and tampering.
            </p>
          </div>
        </div>
      </section>

      <section className='services'>
        <h2>What I Offer</h2>
        <div className='service-list'>
          <div className='service-item'>
            <i className='fas fa-briefcase'></i>{" "}
            {/* Icon for Blockchain Development */}
            <h3>Blockchain Development</h3>
            <p>Custom Hyperledger Fabric solutions for your business.</p>
          </div>
          <div className='service-item'>
            <i className='fas fa-file-contract'></i>{" "}
            {/* Icon for Smart Contracts */}
            <h3>Smart Contracts</h3>
            <p>Secure chaincode development and deployment.</p>
          </div>
          <div className='service-item'>
            <i className='fas fa-chalkboard-teacher'></i>{" "}
            {/* Icon for Consulting */}
            <h3>Consulting</h3>
            <p>Personalized training and implementation guidance.</p>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <h2>Contact Me</h2>
        {/* Button to Open Google Form */}
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSclsC3zrJIvIGdmGuu_Bz4JbBCDZ2SAq4o_Iawh0MqxDSX1QA/viewform",
              "_blank"
            )
          }
          className='cta-button'>
          Open Google Form
        </button>
      </section>

      <footer className='footer'>
        <p>Hyperledger Fabric Developer</p>
      </footer>
    </div>
  );
};

export default App;

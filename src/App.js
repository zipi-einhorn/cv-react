import './App.css'; // Import your style file
import React from "react";
import Background from './background.jpg'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
const [showList, setShowList] = useState(false);

 return (

   <header className="header">
     <nav className="nav container">
       <div className="nav__menu" id="nav-menu">
         <ul className="nav__list">
           <li class="nav__item">
             <NavLink to="/about" className="nav__link">
              About
             </NavLink>
           </li>
           <li className="nav__item" onTouchMoveCapture={() => setShowList(!showList)}>
             <NavLink
               to="/experience"
               className="nav__link"
             >
               Experience

             </NavLink>
             
              {showList &&(
                <ul >
    <li><a href="#" onclick="document.getElementById('palo alto').scrollIntoView(); return false;"> Palo Alto</a> </li>
    <li><a href="#" onclick="document.getElementById('solaredge').scrollIntoView(); return false;">Solaredge</a></li>
    <li><a href="#" onclick="document.getElementById('intel').scrollIntoView(); return false;">Intel</a></li>
    </ul>
              )}

           </li>
           <li className="nav__item">
             <NavLink
               to="/contact"
               className="nav__link"
             >
               Contact
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </header>
 );
};


const App = () => {
 return (
  <>
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<About />} />
         <Route path="/about" element={<About />} />
         <Route path="/experience" element={<Experiences />} />
         <Route path="/contact" element={<ContactUs />} />
       </Routes>
     </main>
   </Router>
  <Background/>
     </>
 );
};

export default App;

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-items">
        <div className="contact-information">
          <span><b>Phone: </b><br /><a href="tel:054-8512331">054-8512331</a></span>
          <span><b>Email: </b><br /><a href="mailto:Einhorn.Zipi@gmail.com">Einhorn.Zipi@gmail.com</a></span>
          <span><b>LinkedIn: </b><br /><a href="#">LinkedIn</a></span>
          <span><b>Github: </b><br /><a href="#">Github</a></span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-title-div">
        <h2 className="about-title">About</h2>
      </div>
      <div className="about-description-div">
        <p className="about-description">
        With 3 years of back-end development experience at Intel and SolarEdge, <br></br>
 I have built complex back-end web applications and oversaw cloud deployment. <br></br>
 I bring deep experience in Java, Python, data modeling, and cloud deployments. <br></br>
 I seek to elevate my team through my collaboration, and mentoring experiences, but also from my strong sense of ownership.<br></br>
 I graduated with honors in Software Development from Mahat and Kama Tech.

        </p>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="experiences-title-div">
        <h2 className="experiences-title">Experience</h2>
      </div>
      <div className="experiences-item-div" id="palo alto">        
        <div class="experience-item" >
        <img src="./img/palo_alto_networks_logo.jpg"></img>
            <h2>Mentor Practicum</h2>
            <p>Palo Alto Company</p>
            <p>Provided mentorship and guidance to students studying software engineering.</p>
            <p>Taught complex coding and fundamentals using Golang (Go), <br></br>teaching & communication methods to foster effective learning.</p>
        </div>
        
        <div class="experience-item" id="solaredge">
        <img src='./img/solaredge_logo.jpg' alt="Palo Alto Networks Logo" />
            <h2>Back-End Developer</h2>
            <p>SolarEdge</p>
            <p>2022 - 2024</p>
            <p>•	Created and maintained a global platform that enables customers to visually monitor and self-manage solar energy production, usage/consumption, and system efficiency/performance.
<br></br>•	Orchestrated the planning and execution of Java applications, adhering meticulously to industry-leading methodologies and coding standards to deliver robust, high-performance software solutions.
<br></br>•	Collaborated with diverse teams to elicit business needs and compose into technical specifications.
<br></br>•	Analyzed observability & quality reports and debugging using Grafana and Elastic.
<br></br>•	Conducted comprehensive, shift-left testing, including unit tests, integration tests, and debugging, Utilized tools like Mockito to identify and resolve software bugs.
<br></br>•	Demonstrated expertise & versatility in micro-services and monolithic architectures, by crafting micro-services from inception to deployment, fostering scalability and agility within the software ecosystem.
<br></br>•	Leveraging AWS files and cloud deployment.
<br></br>•	Applied proficiency in state machine utilization, employing Dead Letter Queues (DLQ), to enhance system reliability and fault tolerance, ensuring seamless operation
</p>
        </div>

        <div class="experience-item" id="intel">
        <img src="./img/intel_corporation_logo.jpg" alt="Intel"></img>
            <h2>Automation Developer (Student Position)</h2>
            <p>Intel</p>
            <p>Contributed to a team responsible for developing wireless features (Bluetooth, Wi-Fi).</p>
            <p>Conducted automation development and wrote complex test cases in Python.</p>
        </div>
      </div>
    </section>
  );
}

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k9e9ntn', 'template_he6ro1m', form.current, {
        publicKey: 'yEebFtnLkfJPwY9eZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section class="contact">
            <div id="form">
              <form id="contactForm" ref={form}>
                <div>
                  <div >
                    <label for="name" ></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="user_name"></input>
                    <div>
                      <label for="email"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="user_email"></input>
                    </div>
                  </div>
                  <div>
                    <label for="textarea"></label><textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" name="Send" onClick={sendEmail} >Send Message</button>
                </div>
              </form>
      </div>
      <div>
              <ul class="contact1">
                  <div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="h-6 w-6">
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                      </path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Contact
                    </h3>
                    <p>Mobile: +1 (123) 456-7890</p>
                    <p>Mail: tailnext@gmail.com</p>
                  </div>
              </ul>
            </div>

    </section>
  );
};

function ListEperience() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        לחץ כאן להצגת הרשימה
      </button>
      {showList && (
        <ul>
          <li>פריט 1</li>
          <li>פריט 2</li>
          <li>פריט 3</li>
        </ul>
      )}
    </div>
  );
}






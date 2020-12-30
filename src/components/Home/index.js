import React from "react";

export default function Home() {
  return (
    // <div>
    //   <h1>test</h1>
    // </div>
    <div>
      <div className="container header">
        <div className="row" data-aos="fade-left">
          <div className="col-1"></div>
          <div className="col-5">
            <h1>Hello There!</h1>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <h2>
              I'm <span className="name">Robbert van den Outenaar</span>, a full
              stack software engineer focused on building high quality websites{" "}
            </h2>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <h3>
              <span>contact me</span>&nbsp;
              <span>
                <i className="fas fa-arrow-alt-circle-right fa-sm"></i>
              </span>{" "}
              &nbsp;
              <span>
                <a href="mailto:robbertoutenaar@gmail.com">
                  robbertoutenaar@gmail.com
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="container backgroundSection section">
        <div className="row" data-aos="fade-left">
          <div className="col-1"></div>
          <div className="col-md-2">
            <div className="sectionTitle ">Background </div>
          </div>
          <div className="col-md-6 fadeIn">
            <p>
              I'm currently working in a small and great team as an IT
              professional for <a href="https://www.baza.nl">Baza</a>, where I
              edit the website and build applications for automatisation. I
              recently graduated from{" "}
              <a href="https://www.codaisseur.com">Codaisseur</a> as a fullstack
              developer.
            </p>
            <p>
              As a developer, I enjoy building applications that are scalable
              and efficient while providing great user experiences. Making
              people happy with great applications gives me a lot of joy!
            </p>
            <p>
              When I'm not in front of a computer screen, I'm probably going out
              in Amsterdam, traveling to different parts of the world, or biking
              across the beautiful Dutch landscapes.
            </p>
          </div>

          <div className="col-md-auto"></div>
        </div>
      </div>
      <div className="skillsSection container section">
        <div className="row" data-aos="fade-left">
          <div className="col-1"></div>
          <div className="col-md-2">
            <div className="sectionTitle ">Skills </div>
          </div>
          <div className="col-md-2">
            <div className="label">LANGUAGES</div>
            <ul>
              <li>JavaScript (ES6)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="label">FRAMEWORKS & METHODOLOGIES</div>
            <ul>
              <li>React</li>
              <li>Laravel</li>
              <li>Scrum</li>
              <li>Agile</li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="label">TOOLS</div>
            <ul>
              <li>Git & Github</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>

          <div className="col-md-auto"></div>
        </div>
      </div>
      <div className="experienceSection container section">
        <div className="row" data-aos="fade-left">
          <div className="col-1"></div>
          <div className="col-md-2">
            <div className="sectionTitle">Experience </div>
          </div>
          <div className="col-md-6">
            <div className="companyAndTime d-flex justify-content-between">
              <div className="company">Baza House of Seeds</div>
              <div className="time">July 2020 - current</div>
            </div>

            <div className="position">IT Professional</div>

            <div className="companyAndTime d-flex justify-content-between">
              <div className="company">Codaisseur</div>
              <div className="time">March 2020 - July 2020</div>
            </div>

            <div className="position">Webdevelopment</div>

            <div className="companyAndTime d-flex justify-content-between">
              <div className="company">Robidus</div>
              <div className="time">Dec 2018 - Dec 2019</div>
            </div>

            <div className="position">Absenteeism consultant</div>

            <div className="companyAndTime d-flex justify-content-between">
              <div className="company">Reaal</div>
              <div className="time">Sep 2016 - Nov 2018</div>
            </div>

            <div className="position">Customer Service Representative</div>

            <div className="companyAndTime d-flex justify-content-between">
              <div className="company">Professional Poker Player</div>
              <div className="time">Nov 2008 - Nov 2018</div>
            </div>

            <div className="position">Self employed Poker Player.</div>
          </div>
        </div>
      </div>
      <div className="viewResume container section">
        <div className="row" data-aos="fade-left">
          <div className="col-2"></div>

          <div className="col-md-8">
            <a
              className="sectionTitle"
              href="https://cvonline.me/@robbert"
              style={{ textDecoration: "none", color: "#0086b3" }}
            >
              View my resume &nbsp; &nbsp;
              <i
                style={{ textDecoration: "none" }}
                className="fas fa-file-download"
              ></i>
            </a>
          </div>
          <div className="col-md-auto"></div>
        </div>
      </div>
      <div className="Projects container section">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2">
            <div className="sectionTitle">Projects </div>
          </div>
        </div>
      </div>{" "}
      <footer className="footer">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto"></div>
            <div className="col-md-8">
              <div className="footerLinks d-flex justify-content-between">
                <a
                  href="https://www.linkedin.com/in/robbert-van-den-outenaar-79a23611/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIN &nbsp;<i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/systemthinker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github &nbsp;<i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:robbertoutenaar@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email &nbsp;<i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="col-md-auto"></div>
          </div>
        </div>
      </footer>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
}

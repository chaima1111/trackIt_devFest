import "./landingPage.css";
import Header from "./component/header1/Navbar";
import secure from "./assets/secure.png";
import dash from "./assets/dash.png";
import chart from "./assets/chart.png";
import calc from "./assets/calc.png";
import pdf from "./assets/pdf.png";
import group from "./assets/page3img.png";
import item from "./assets/list-icon.png";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import feedback from "./assets/feedback.png";
import landi from "./assets/Saly2.png"
import FaTwitter from "./assets/twitter.png";
import FaGithub from "./assets/github.png";
import FaFacebook from "./assets/facebook.png";
import FaInstagram from "./assets/instagram.png";
import FaTelegram from "./assets/telegram.png";

const testimonials = [
  {
    name: "Roxanne Rath",
    title: "Business owner",
    testimonial: "The real-time dashboard gives us instant financial insights.",
    avatar: avatar1, // Replace with actual image paths
    rating: 5,
  },
  {
    name: "Lewis Quigley",
    title: "Business owner",
    testimonial: "Automated reports save us so much time!",
    avatar: avatar2,
    rating: 5,
  },
  {
    name: "Ann Krajcik",
    title: "Business owner",
    testimonial: "The interface is super intuitive and easy to use.",
    avatar: avatar3,
    rating: 5,
  },
];

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <section className="landingPage-heroSection">
        <div className="landingPage-hero-content">
          <h1>
            Empowering Businesses with <br></br>AI-Driven Financial Insights{" "}
            <br></br>for Strategic Growth
          </h1>
          <p>
            Manage Your Business’s Financial Health with AI, All in One Place.
          </p>
          <button className="landingPage-start-now-btn">Start now</button>
        </div>

        <div className="landingPage-hero-illustration">
          <img src={landi} alt="" />
        </div>
      </section>
      <section className="landingPage-services">
        <div className="landingPage-tex">
          <p>Our services</p>
          <h2>Powerful Features for Seamless Financial Management</h2>
        </div>
        <section className="landingPage-features-section">
          <h2 className="landingPage-section-title">Explore Our Features</h2>
          <div className="landingPage-cards-container">
            <div className="feature-card">
              <img src={dash} alt="" className="feature-img" />
              <h2>Real-Time Dashboard</h2>
              <p>
                Track your finances instantly with live data updates and
                customizable views.
              </p>
            </div>
            <div className="feature-card">
              <img src={chart} alt="" className="feature-img" />
              <h2>Expense Insights</h2>
              <p>
                Get smart recommendations based on spending patterns to optimize
                your budget.
              </p>
            </div>
            <div className="feature-card">
              <img src={secure} alt="" className="feature-img" />
              <h2>Scalable & Secure Authentication</h2>
              <p>
                Ensure data security with role- based access, built to scale as
                your business grows.
              </p>
            </div>
            <div className="feature-card">
              <img src={calc} alt="" className="feature-img" />
              <h2>Expense Tracking</h2>
              <p>
                Easily log and visualize expenses with real-time updates and
                insights.
              </p>
            </div>
            <div className="feature-card">
              <img src={pdf} alt="" className="feature-img" />
              <h2>Automated Financial Reports</h2>
              <p>
                Generate custom financial reports and export in formats like PDF
                and Excel.
              </p>
            </div>
          </div>
        </section>
        <button className="landingPage-try-btn">Try now</button>
        <img src={group} alt="" className="group-img" />
      </section>
      <section>
        <div className="landingPage-tex">
          <p>Some Reasons</p>
          <h2>Why Choose Us ?</h2>
        </div>

        <div className="reasons-container">
          <div className="features-list">
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>Real-Time Financial Insights</h3>
                <p>
                  Access up-to-the-minute data to make informed financial
                  decisions instantly.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>Automated Reporting</h3>
                <p>
                  Save time with automatically generated reports in multiple
                  formats.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>Smart Expense Tracking</h3>
                <p>
                  Stay on top of your spending with real-time updates and trend
                  analysis.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>Customizable & User-Friendly</h3>
                <p>
                  Tailor your dashboard to your needs, with an intuitive design.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>AI-Driven Expense Recommendations</h3>
                <p>
                  Optimize your budget with AI-powered recommendations based on
                  patterns.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <img src={item} alt="" className="item-img" />
              <div>
                <h3>Scalable & Secure Solution</h3>
                <p>
                  Enterprise-grade security for seamless business growth without
                  issues.
                </p>
              </div>
            </div>
          </div>

          <div className="landingPage-chart-container">
            <div className="landingPage-circle-chart">
              <span className="landingPage-percentage">138%</span>
            </div>
            <div className="landingPage-legend">
              <div className="landingPage-legend-item">
                <span className="landingPage-color-box blue"></span>Uses the premium plan of
                tRAK
              </div>
              <div className="landingPage-legend-item">
                <span className="landingPage-color-box pink"></span>Uses the free plan of tRAK
              </div>
              <div className="landingPage-legend-item">
                <span className="landingPage-color-box grey"></span>Used tRAK for a period of
                time
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section>
        <img src={feedback} alt="" className="feedback-img" />
        <div className="landingPage-tex">
          <p>See our</p>
          <h2>Clients feedbacks</h2>
        </div>

        <div className="testimonials-container">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <img src={item.avatar} alt={item.name} className="avatar" />
              <h3 className="landingPage-name">{item.name}</h3>
              <p className="landingPage-title">{item.title}</p>
              <p className="testimonial">{item.testimonial}</p>
              <div className="stars">{"★".repeat(item.rating)}</div>
            </div>
          ))}
        </div>
        <button className="landingPage-try-btn">See more</button>
      </section>
      <br />
      <br />
      <section>
        <div className="landingPage-navbar-container">
          <div className="social-icons">
            <img src={FaTwitter} alt="" className="landingPage-icon" />
            <img src={FaGithub} alt="" className="landingPage-icon" />
            <img src={FaTelegram} alt="" className="landingPage-icon" />
            <img src={FaInstagram} alt="" className="landingPage-icon" />
            <img src={FaFacebook} alt="" className="landingPage-icon" />
          </div>

          <nav className="landingPage-nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#team">Team</a>
          </nav>

          <button className="landingPage-contact-button">Contact Us</button>

          <hr className="separator" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

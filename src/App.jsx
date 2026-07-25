import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://nomination-environment-pushing-pensions.trycloudflare.com/webhook/leadflow",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setStatus(
        "success"
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus(
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">⚡ LeadFlow AI</div>

        <a href="#contact" className="nav-button">
          Get Started
        </a>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            🤖 AI-Powered Lead Management
          </div>

          <h1>
            Turn Every Enquiry Into a
            <span> Qualified Opportunity.</span>
          </h1>

          <p>
            LeadFlow AI automatically analyses customer enquiries,
            identifies high-value leads, stores them in your CRM,
            and instantly notifies your team.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="primary-button"
            >
              Get Started →
            </a>

            <a
              href="#how-it-works"
              className="secondary-button"
            >
              See How It Works
            </a>

          </div>

        </div>


        {/* AI CARD */}
        <div className="hero-card">

          <div className="card-header">

            <span>
              Live Lead Analysis
            </span>

            <span className="status">
              ● Active
            </span>

          </div>


          <div className="lead-card">

            <div className="lead-icon">
              👤
            </div>

            <div>

              <h3>
                New Customer Enquiry
              </h3>

              <p>
                Interested in your services
              </p>

            </div>

          </div>


          <div className="analysis">

            <div>

              <span>
                Lead Status
              </span>

              <strong>
                Interested
              </strong>

            </div>


            <div>

              <span>
                Priority
              </span>

              <strong className="high">
                High
              </strong>

            </div>


            <div>

              <span>
                Intent
              </span>

              <strong>
                Service Inquiry
              </strong>

            </div>

          </div>


          <div className="ai-message">

            🧠 AI Recommendation

            <p>
              Follow up with the customer and provide
              detailed service information.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="section-heading">

          <span className="small-label">
            POWERFUL AUTOMATION
          </span>

          <h2>
            Everything Your Business Needs to Manage Leads
          </h2>

          <p>
            Stop manually sorting enquiries.
            Let AI qualify your leads automatically.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              AI Lead Qualification
            </h3>

            <p>
              Automatically analyse every enquiry and
              determine lead status, priority,
              and customer intent.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Centralised CRM
            </h3>

            <p>
              Keep all your leads organised with automatic
              CRM updates and structured customer information.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📧
            </div>

            <h3>
              Instant Notifications
            </h3>

            <p>
              Get immediate email alerts when a new lead
              arrives so your team can respond faster.
            </p>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}
      <section
        id="how-it-works"
        className="workflow"
      >

        <div className="section-heading">

          <span className="small-label">
            HOW IT WORKS
          </span>

          <h2>
            From Enquiry to Action Automatically
          </h2>

        </div>


        <div className="steps">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>
              Customer Enquiry
            </h3>

            <p>
              A customer submits an enquiry
              through your website.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>
              AI Analysis
            </h3>

            <p>
              AI analyses the enquiry and
              identifies its potential.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>
              CRM Update
            </h3>

            <p>
              The lead is automatically
              stored in your CRM.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              04
            </div>

            <h3>
              Instant Alert
            </h3>

            <p>
              Your team receives an
              immediate notification.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT FORM */}
      <section
        id="contact"
        className="contact"
      >

        <div className="contact-content">

          <span className="small-label">
            GET STARTED
          </span>

          <h2>
            Ready to Automate Your Lead Management?
          </h2>

          <p>
            Submit your details and experience how
            LeadFlow AI can transform your customer
            enquiry process.
          </p>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />


          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />


          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />


          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business and requirements..."
            rows="5"
            required
          />


          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Submitting..."
              : "Submit Enquiry →"}

          </button>


          {status === "success" && (
            <div className="success-message">
              ✅ Your enquiry has been submitted successfully!
              Our team will contact you soon.
            </div>
          )}


          {status === "error" && (
            <div className="error-message">
              ❌ Unable to submit your enquiry.
              Please make sure the n8n workflow is waiting
              for a test webhook and try again.
            </div>
          )}

        </form>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="logo">
          ⚡ LeadFlow AI
        </div>

        <p>
          AI-powered lead qualification and
          business automation.
        </p>

        <span>
          © 2026 LeadFlow AI.
          All rights reserved.
        </span>

      </footer>

    </div>
  );
}

export default App;
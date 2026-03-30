import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Brain,
  Zap,
  CheckCircle,
  Sparkles,
  Rocket,
  Shield,
} from "lucide-react";

import galleryImg1 from "../../assets/image/homePage/galleryImg1.png";
import galleryImg2 from "../../assets/image/homePage/galleryImg2.png";
import galleryImg3 from "../../assets/image/homePage/galleryImg3.png";
import galleryImg4 from "../../assets/image/homePage/galleryImg4.png";
import galleryFeaturedImg from "../../assets/image/homePage/galleryFeaturedImg.png";
import worldMapImg from "../../assets/image/contactUs/worldMap.png";

export function ContactUs() {
  return (
    <>
      {/* contact form section */}
      <section className="py-24 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-6 mt-6"
              style={{ color: "#1E3A4C", fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ color: "#6B6B6B" }}
            >
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day assurance bed necessary.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-2 items-start contact-section-grid"
            style={{ gap: "32px" }}
          >
            <div className="form-container">
              <form className="contact-form">
                {/* Name Field */}
                <div className="floating-group">
                  <input
                    type="text"
                    id="name"
                    className="floating-input"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="floating-label">
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="floating-group">
                  <input
                    type="email"
                    id="email"
                    className="floating-input"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="floating-label">
                    Email
                  </label>
                </div>

                {/* Subject Field */}
                <div className="floating-group">
                  <input
                    type="text"
                    id="subject"
                    className="floating-input"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="floating-label">
                    Subject
                  </label>
                </div>

                {/* Message Field */}
                <div className="floating-group">
                  <textarea
                    id="message"
                    className="floating-input floating-textarea"
                    placeholder=" "
                    rows={5}
                  ></textarea>
                  <label htmlFor="message" className="floating-label">
                    Message
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* IMAGE SECTION  */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "-3rem"

              }}
            >
              <img
                src={worldMapImg}
                alt="Rehax Team Collaboration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginTop: "-8rem",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION  */}
      <section
        className="bg-white mobile-padding"
        style={{
          padding: "5% 10%",
          fontFamily: "var(--font-desc)",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            maxWidth: "100vw",
            margin: "0 auto",
          }}
        >
          <div className="gallery-grid">
            {/* TEXT SECTION */}
            <div
              className="text-box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.4em",
                  color: "#166890",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                GALLERY
              </p>

              <h1
                className="gallery-h1"
                style={{
                  fontWeight: 600,
                  lineHeight: 1.2,
                  fontFamily: "var(--font-desc)",
                }}
              >
                Immersive beautiful <br />
                Rehab space Design
              </h1>
            </div>

            {/* FEATURED IMAGE */}
            <div
              className="featured-box group shadow-md hover:shadow-xl transition-shadow duration-500"
              style={{ overflow: "hidden" }}
            >
              <img
                className="h-full w-full mt-8 transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={galleryFeaturedImg}
                alt="Featured"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* IMAGE 1 */}
            <div className="img1-box group" style={{ overflow: "hidden" }}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={galleryImg1}
                alt="Gallery 1"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="img2-box group" style={{ overflow: "hidden" }}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={galleryImg2}
                alt="Gallery 2"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="img3-box group" style={{ overflow: "hidden" }}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={galleryImg3}
                alt="Gallery 3"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="img4-box group" style={{ overflow: "hidden" }}>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={galleryImg4}
                alt="Gallery 4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #006B7D 0%, #5E60CE 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Transform Your Rehabilitation Center?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how Rehax can help you create a world-class facility
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate("space-planner")}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#7ED6DF", color: "#1E3A4C" }}
            >
              Start Planning Your Space
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

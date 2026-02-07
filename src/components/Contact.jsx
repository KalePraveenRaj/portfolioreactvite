import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vjl8ox5",
        "template_ex5w5pb",
        formRef.current,
        "wCzczedoi1tjeKQjz"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  const cardStyle = `
    relative
    h-full
    bg-[rgba(0,0,0,0.35)]
    rounded-3xl
    p-8
    transition-all duration-300
    hover:-translate-y-1
  `;

  const gradientShadow = {
    boxShadow:
      "0 30px 60px rgba(34,211,238,0.22), 0 30px 60px rgba(168,85,247,0.18), 0 30px 60px rgba(236,72,153,0.15)",
  };

  return (
    <section
      id="contact"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Contact
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

          {/* LEFT CARD */}
          <div className="group relative h-full">
            {/* Gradient Shadow */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
              style={gradientShadow}
            />

            <div className={cardStyle}>
              <h3 className="text-xl font-semibold mb-6">
                I&apos;M ALSO ON{" "}
                <span className="text-cyan-400">SOCIAL NETWORKS</span>
              </h3>

              {/* Social Icons */}
              <div className="flex gap-8 text-2xl text-gray-300 mb-8">
                <a href="https://github.com/kalepraveenraj" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub /></a>
                <a href="https://linkedin.com/in/kale-praveen-raj-7b2178130" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
                <a href="https://www.youtube.com/@kalepraveenraj6536" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaYoutube /></a>
                <a href="https://www.instagram.com/praveen_raj_kale_1729/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
                <a href="https://www.facebook.com/praveen.raj.135388/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaFacebook /></a>
                <a href="https://twitter.com/kalepraveenraj" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaTwitter /></a>
              </div>

              <div className="w-full h-px bg-white/20 mb-8"></div>

              {/* Contact Info */}
              <div className="space-y-6 text-gray-300">
                <div className="flex gap-4">
                  <FaHome className="text-white mt-1" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhone className="text-white mt-1" />
                  <div>
                    <p className="font-semibold text-white">Let&apos;s Talk</p>
                    <p>+91 85000 58880</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-white mt-1" />
                  <div>
                    <p className="font-semibold text-white">E-Mail</p>
                    <p>kalepraveenraj@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative h-full">
            {/* Gradient Shadow */}
            <div
              className="
                absolute inset-0
                rounded-3xl
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
              style={gradientShadow}
            />

            <div className={cardStyle}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                GET IN TOUCH
              </h3>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5 h-full flex flex-col"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name *"
                  required
                  className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  name="email_id"
                  placeholder="Email *"
                  required
                  className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message *"
                  required
                  className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />

                {/* Button pinned to bottom */}
                <button
                  type="submit"
                  className="
                    mt-auto
                    w-full flex items-center justify-center gap-3
                    bg-cyan-500 text-black font-semibold
                    py-3 rounded-lg
                    transition-all duration-300
                    hover:bg-cyan-400
                    hover:-translate-y-1
                    hover:shadow-[0_15px_30px_rgba(34,211,238,0.45)]
                  "
                >
                  SEND <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

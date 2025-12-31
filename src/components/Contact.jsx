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

  const boxStyle = `
    bg-[rgba(0,0,0,0.35)]
    rounded-3xl
    p-8
    shadow-[0_25px_50px_rgba(0,0,0,0.65)]
    transition
    duration-300
    hover:-translate-y-2
    hover:shadow-[0_35px_70px_rgba(0,0,0,0.85)]
  `;

  return (
    <section
      id="contact"
      className="w-full bg-[rgb(27,37,61)] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT BOX */}
          <div className={boxStyle}>

            <h3 className="text-xl font-semibold mb-6">
              I&apos;M ALSO ON{" "}
              <span className="text-cyan-400">SOCIAL NETWORKS</span>
            </h3>

            {/* Social Icons */}
            <div className="flex gap-10 text-2xl text-gray-300 mb-6">
              <a href="https://github.com/kalepraveenraj" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaGithub /></a>
              <a href="https://linkedin.com/in/kale-praveen-raj-7b2178130" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@kalepraveenraj6536" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaYoutube /></a>
              <a href="https://www.instagram.com/praveen_raj_kale_1729/" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaInstagram /></a>
              <a href="https://www.facebook.com/praveen.raj.135388/" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaFacebook /></a>
              <a href="https://twitter.com/kalepraveenraj" target="_blank" rel="noreferrer" className="hover:text-white transition hover:scale-110"><FaTwitter /></a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/30 my-8"></div>

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

          {/* RIGHT BOX – FORM */}
          <div className={boxStyle}>

            <h3 className="text-xl font-semibold mb-6 text-center">
              GET IN TOUCH
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
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
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition"
              >
                SEND <FaPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

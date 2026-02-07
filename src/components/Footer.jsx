import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const iconStyle = `
    transition-all duration-300
    hover:-translate-y-1
    hover:text-white
    hover:drop-shadow-[0_4px_12px_rgba(34,211,238,0.45)]
  `;

  return (
    <footer className="w-full bg-[rgb(17,24,39)] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Social Links */}
        <div className="flex gap-12 text-2xl text-gray-300 mb-6">
          <a href="https://github.com/kalepraveenraj" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kale-praveen-raj-7b2178130" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@kalepraveenraj" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/praveen_raj_kale_1729/" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/praveen.raj.135388/" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com/kalepraveenraj" target="_blank" rel="noreferrer" className={iconStyle}>
            <FaTwitter />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2018{" "}
          <span className="text-white font-medium">
            Kale Praveen Raj
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

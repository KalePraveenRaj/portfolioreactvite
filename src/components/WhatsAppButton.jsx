import { useEffect, useState } from "react";
import WhatsAppIcon from "../assets/whatsapp.svg";

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  const phone = "918500058880";
  const message = "Hi Praveen, I visited your portfolio.";

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        w-14 h-14 rounded-full
        bg-cyan-500
        flex items-center justify-center
        shadow-lg
        hover:bg-cyan-600 hover:scale-110
        transition-all duration-300
      "
    >
      {/* WhatsApp SVG */}
      <WhatsAppIcon className="w-7 h-7 fill-white" />
    </a>
  );
}

export default WhatsAppButton;

import { useEffect, useState } from "react";

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
        w-14 h-14
        rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-transform duration-300
      "
    >
      {/* WhatsApp Icon ONLY */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16 2C8.27 2 2 8.27 2 16c0 2.47.65 4.79 1.78 6.8L2 30l7.38-1.94A13.93 13.93 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.46c-2.12 0-4.1-.62-5.77-1.69l-.41-.25-4.38 1.15 1.17-4.26-.27-.44A11.43 11.43 0 1 1 16 27.46z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;

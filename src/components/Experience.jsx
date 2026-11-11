import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaBriefcase, FaTimes } from "react-icons/fa";

const timeline = [
  {
    title: "App Developer",
    org: "Evoke Phygital Marketplace",
    start: [2026, 4],
    end: null, // present
    icon: FaBriefcase,
    color: "#e5535e",
    points: [
      "Developed and maintain a cross-platform e-commerce mobile app (Flutter/Dart) for Android and iOS, covering the home, product details, cart, wishlist, checkout and order history flows.",
      "Integrated REST APIs with backend teams for products, cart, orders, addresses and user accounts, and debugged API and integration issues.",
      "Implemented authentication, including Facebook social login, plus a full on-device guest-user flow (cart, wishlist, checkout, addresses, order history) so users can shop without signing up.",
      "Integrated payment gateways, including Stripe payments via QR code and a crypto payment flow in a WebView, with delivery-estimate logic at checkout.",
      "Built a product customizer with image layers, cropping and pattern fill over a print area, and fixed layout and clipping bugs in it.",
      "Added a recently viewed products feature, an in-app chatbot UI, and home-screen sections (special offers, charity, EGT program).",
      "Diagnosed UI, layout and performance issues, and planned optimizations such as image loading, skeleton loaders and caching.",
      "Handled Android platform configuration (AndroidManifest, permissions) and device-specific behavior.",
    ],
    tags: ["Flutter", "Dart", "REST APIs", "Stripe", "Facebook Login"],
  },
  {
    title: "Flutter Developer",
    org: "The Entrepreneurship Network",
    start: [2026, 1],
    end: [2026, 4],
    icon: FaBriefcase,
    color: "#dd8545",
    points: [
      "Developed cross-platform mobile applications using Flutter, implementing responsive UI from Figma designs for Android and iOS platforms.",
      "Integrated REST APIs, handled JSON data parsing, and implemented JWT-based authentication.",
      "Managed application state using Riverpod/Provider/Bloc and optimized app performance through debugging and testing.",
      "Collaborated with backend developers and designers using Git/GitHub for version control while following Flutter best practices.",
    ],
    tags: ["Flutter", "Figma", "JWT", "Riverpod", "Bloc", "Git"],
  },
  {
    title: "Desktop App Developer",
    org: "Horrizon Tech Alliance World",
    start: [2024, 12],
    end: [2025, 6],
    icon: FaBriefcase,
    color: "#4fadae",
    points: [
      "Engineered a desktop application for an online wiring harness company, achieving a 30% increase in user engagement and enhancing the shopping experience.",
      "Integrated Nexar's API based on subscription plans, improving functionality and streamlining user interactions by 25%.",
      "Stored and managed data from the Nexar API in Supabase, ensuring reliable data retrieval and performance.",
    ],
    tags: ["Desktop App", "Nexar API", "Supabase"],
  },
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const fmt = ([y, m]) => `${MONTHS[m - 1]} ${y}`;

function duration(start, end) {
  const now = new Date();
  const [ey, em] = end || [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - start[0]) * 12 + (em - start[1]);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} Year${years > 1 ? "s" : ""}`);
  if (months || !years) parts.push(`${months} Month${months !== 1 ? "s" : ""}`);
  return parts.join(" ");
}

const RING_R = 76; // centre-line radius of each half ring
const RING_W = 22; // ring thickness

function Reveal({ children, from = "left", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden =
    from === "left"
      ? "opacity-0 lg:-translate-x-12 translate-y-8"
      : "opacity-0 lg:translate-x-12 translate-y-8";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ item, onOpen }) {
  const clickable = Boolean(item.points);
  const present = item.start && !item.end;

  return (
    <div
      onClick={clickable ? onOpen : undefined}
      onKeyDown={(e) => clickable && e.key === "Enter" && onOpen()}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      className={`relative bg-black px-7 py-5 border-x border-cyan-400/25 shadow-[0_0_26px_rgba(34,211,238,0.28)] transition-all duration-300 ${
        clickable
          ? "cursor-pointer hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"
          : ""
      }`}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />

      <h3 className="text-xl font-semibold leading-tight bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-orange-300 bg-clip-text text-transparent">
        {item.title}
      </h3>
      <p className="mt-2 text-[15px] text-white">{item.org}</p>
      <p className="text-[15px] text-white">
        {item.line ||
          `${fmt(item.start)}${item.end ? ` - ${fmt(item.end)}` : ""} · ${duration(
            item.start,
            item.end
          )}`}
        {present && (
          <span className="ml-4 font-bold uppercase tracking-wide text-purple-200 [text-shadow:0_0_10px_rgba(168,85,247,1)]">
            Present
          </span>
        )}
      </p>
    </div>
  );
}

function Modal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-black px-8 py-7 border-x border-cyan-400/25 shadow-[0_0_40px_rgba(168,85,247,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
        >
          <FaTimes />
        </button>

        <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-orange-300 bg-clip-text text-transparent">
          {item.title}
        </h3>
        <p className="mt-1 text-white">{item.org}</p>
        <p className="text-gray-400 text-sm">
          {item.start
            ? `${fmt(item.start)} - ${item.end ? fmt(item.end) : "Present"} · ${duration(
                item.start,
                item.end
              )}`
            : item.line}
        </p>

        <ul className="mt-5 list-disc pl-5 space-y-2 text-sm text-gray-300 leading-relaxed">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-white/15 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const treeRef = useRef(null);
  const nodeRefs = useRef([]);
  const [curve, setCurve] = useState({ segs: [], grads: [], w: 0, h: 0 });
  const [active, setActive] = useState(null);

  // Build rings (desktop) / straight line (mobile) from real node positions
  useLayoutEffect(() => {
    const build = () => {
      const tree = treeRef.current;
      if (!tree) return;
      const box = tree.getBoundingClientRect();
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const pts = nodeRefs.current.filter(Boolean).map((el, i) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left - box.left + r.width / 2,
          y: r.top - box.top + r.height / 2,
          color: timeline[i].color,
          sweep: i % 2 === 0 ? 1 : 0, // first ring bulges right
        };
      });
      if (!pts.length) return;

      const R = desktop ? RING_R : 0;
      const segs = [];
      const grads = [];

      const line = (key, x, y1, y2, c1, c2) => {
        if (y2 - y1 < 0.5) return;
        const id = `g-${key}`;
        grads.push({ id, x, y1, y2, c1, c2 });
        segs.push({ key, d: `M ${x} ${y1} L ${x} ${y2}`, stroke: `url(#${id})` });
      };

      const first = pts[0];
      const last = pts[pts.length - 1];
      line("lead", first.x, 0, first.y - R, first.color, first.color);

      pts.forEach((p, i) => {
        if (R > 0) {
          segs.push({
            key: `ring-${i}`,
            d: `M ${p.x} ${p.y - R} A ${R} ${R} 0 0 ${p.sweep} ${p.x} ${p.y + R}`,
            stroke: p.color,
          });
        }
        const next = pts[i + 1];
        if (next) line(`link-${i}`, p.x, p.y + R, next.y - R, p.color, next.color);
      });

      line("tail", last.x, last.y + R, box.height, last.color, last.color);
      setCurve({ segs, grads, w: box.width, h: box.height });
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(treeRef.current);
    window.addEventListener("resize", build);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-black text-white py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent inline-block">
            Timeline
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-72 max-w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500" />
        </div>

        {/* Tree */}
        <div ref={treeRef} className="relative">
          {curve.segs.length > 0 && (
            <svg
              className="pointer-events-none absolute inset-0 overflow-visible"
              width={curve.w}
              height={curve.h}
              aria-hidden="true"
            >
              <defs>
                {curve.grads.map((g) => (
                  <linearGradient
                    key={g.id}
                    id={g.id}
                    gradientUnits="userSpaceOnUse"
                    x1={g.x}
                    y1={g.y1}
                    x2={g.x}
                    y2={g.y2}
                  >
                    <stop offset="0%" stopColor={g.c1} />
                    <stop offset="100%" stopColor={g.c2} />
                  </linearGradient>
                ))}
              </defs>
              {curve.segs.map((s) => (
                <path
                  key={s.key}
                  d={s.d}
                  fill="none"
                  stroke={s.stroke}
                  strokeWidth={s.key.startsWith("ring") ? RING_W : 6}
                  strokeLinecap="butt"
                />
              ))}
            </svg>
          )}

          <div className="space-y-10 lg:space-y-0">
            {timeline.map((item, index) => {
              const cardLeft = index % 2 === 1;
              return (
                <div
                  key={item.title}
                  className="relative pl-20 lg:pl-0 lg:h-[152px] lg:grid lg:grid-cols-2 lg:gap-x-[18.5rem] lg:items-center"
                >
                  {/* Node: white circle with coloured icon */}
                  <div
                    ref={(el) => (nodeRefs.current[index] = el)}
                    className="absolute left-7 lg:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
                  >
                    <div
                      className="flex h-14 w-14 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-white text-2xl lg:text-4xl"
                      style={{ color: item.color }}
                    >
                      <item.icon />
                    </div>
                  </div>

                  {/* Striped connector from ring to card */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[14px] w-6 lg:w-16 left-[56px] ${
                      cardLeft
                        ? "lg:left-auto lg:right-[calc(50%+84px)]"
                        : "lg:left-[calc(50%+84px)]"
                    }`}
                    style={{
                      backgroundImage: `repeating-linear-gradient(90deg, ${item.color} 0 8px, rgba(0,0,0,0.22) 8px 10px)`,
                    }}
                  />

                  <Reveal
                    from={cardLeft ? "left" : "right"}
                    className={cardLeft ? "lg:col-start-1" : "lg:col-start-2"}
                  >
                    <Card item={item} onOpen={() => setActive(item)} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export default Experience;

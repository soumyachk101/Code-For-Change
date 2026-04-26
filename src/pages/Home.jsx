import { createElement, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  Code2,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Rocket,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import "../styles/synchronicity.css";

import cfcLogo from "../assets/cfc_logo.png";
import devfolioLogo from "../assets/devfolio_text.png";
import vercelLogo from "../assets/vercel.png";
import lfxLogo from "../assets/LFX_Education.png";
import cndLogo from "../assets/Cn dgp.png";
import binduLogo from "../assets/Bindu_with_fav.png";
import grafanaLogo from "../assets/grafana.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Challenges", href: "#challenges" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

const heroStats = [
  { value: "24h", label: "Build Sprint" },
  { value: "4.5k+", label: "Community Reach" },
  { value: "8", label: "Tracks" },
];

const whyCards = [
  {
    icon: Rocket,
    title: "Build Fast",
    text: "Move from idea to working prototype in one focused sprint.",
  },
  {
    icon: Users,
    title: "Team Up",
    text: "Collaborate with designers, developers, and product thinkers.",
  },
  {
    icon: Trophy,
    title: "Win Big",
    text: "Compete for prizes, partner perks, mentorship, and recognition.",
  },
  {
    icon: Sparkles,
    title: "Get Seen",
    text: "Showcase your project to mentors, communities, and sponsors.",
  },
];

const challengeTracks = [
  {
    category: "Web Development",
    color: "blue",
    items: [
      "Build performant, accessible web apps for real community needs.",
      "Design tools that make workflows clearer, faster, and easier to repeat.",
    ],
  },
  {
    category: "WEB3",
    color: "mint",
    items: [
      "Create decentralized products with transparent ownership and trust.",
      "Use wallets, smart contracts, or token incentives with real utility.",
    ],
  },
  {
    category: "AI / ML",
    color: "violet",
    items: [
      "Use models to analyze, summarize, recommend, detect, or automate.",
      "Build responsible AI experiences that keep humans in control.",
    ],
  },
];

const timeline = [
  {
    title: "Registration Opens",
    date: "March 15, 2026",
    text: "Teams start applying and shaping their first ideas.",
  },
  {
    title: "Idea Screening",
    date: "March 30, 2026",
    text: "Shortlisted teams move forward with mentor guidance.",
  },
  {
    title: "Hackathon Starts",
    date: "April 10, 2026",
    text: "The 24-hour build window begins on campus.",
  },
  {
    title: "Demo Submission",
    date: "April 11, 2026",
    text: "Projects are submitted with demos, decks, and code links.",
  },
  {
    title: "Final Round",
    date: "April 11, 2026",
    text: "Top teams pitch to judges and winners are announced.",
  },
];

const sponsors = [
  { name: "Cloud Native Durgapur", logo: cndLogo, tier: "Community Partner" },
  { name: "Devfolio", logo: devfolioLogo, tier: "Platform Partner" },
  { name: "Vercel", logo: vercelLogo, tier: "Deployment Partner" },
  { name: "The Linux Foundation", logo: lfxLogo, tier: "Education Partner" },
  { name: "Bindu", logo: binduLogo, tier: "Design Partner" },
  { name: "Grafana", logo: grafanaLogo, tier: "Observability Partner" },
];

const faqs = [
  {
    question: "Who can participate?",
    answer: "Students, builders, designers, and beginners from any branch can participate.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No. Code for Change 2.0 is free for selected participants.",
  },
  {
    question: "Can I join without a team?",
    answer: "Yes. Solo participants can join, and team formation support will be available.",
  },
  {
    question: "What should I bring?",
    answer: "Bring a laptop, charger, college ID, and anything your team needs to build comfortably.",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/codenest_osdc?igsh=bm93ZXJwMDJ5ZjJu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/codenest-osdc/" },
  { icon: Github, label: "GitHub", href: "https://github.com/CodeNest-OSDC" },
  { icon: Mail, label: "Email", href: "mailto:codeforchange2.0@gmail.com" },
];

function RobotMascot({ className = "" }) {
  return (
    <div className={`robot-mascot ${className}`} aria-label="Code for Change 2.0 robot mascot" role="img">
      <div className="robot-antenna">
        <span className="robot-antenna-ring" />
      </div>
      <div className="robot-head">
        <span className="robot-ear robot-ear-left" />
        <span className="robot-ear robot-ear-right" />
        <div className="robot-screen">
          <span className="robot-visor" />
          <span className="robot-eye" />
          <span className="robot-eye" />
          <span className="robot-smile" />
        </div>
      </div>
      <div className="robot-neck" />
      <div className="robot-body">
        <span className="robot-chest-panel" />
        <span className="robot-core" />
        <span className="robot-arm robot-arm-left"><span className="robot-hand" /></span>
        <span className="robot-arm robot-arm-right"><span className="robot-hand" /></span>
        <span className="robot-leg robot-leg-left"><span className="robot-foot" /></span>
        <span className="robot-leg robot-leg-right"><span className="robot-foot" /></span>
      </div>
    </div>
  );
}



function CloudBank({ variant = "" }) {
  return (
    <div className={`cloud-bank ${variant}`} aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function RoadmapItem({ item, index }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const pathLength = scrollYProgress;
  const dotScale = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const contentXLeft = useTransform(scrollYProgress, [0.5, 0.9], [50, 0]);
  const contentXRight = useTransform(scrollYProgress, [0.5, 0.9], [-50, 0]);
  const numberColor = useTransform(scrollYProgress, [0.5, 1], ["rgba(255,255,255,0.06)", "rgba(255,255,255,0.85)"]);
  const arrowOpacity1 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const arrowOpacity2 = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const arrowOpacity3 = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const pinBounce = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, -8, 2, 0]);

  // Dramatic curly S-curve paths — wider swings with a loop-de-loop feel
  const pathD = isLeft
    ? "M 50 0 C 80 5, 90 18, 20 30 C -10 38, 5 48, 15 52 C 30 58, 70 72, 50 100"
    : "M 50 0 C 20 5, 10 18, 80 30 C 110 38, 95 48, 85 52 C 70 58, 30 72, 50 100";

  // Arrow positions along the curly path
  const arrows = isLeft
    ? [
        { x: 20, y: 30, rot: 170 },
        { x: 15, y: 52, rot: 40 },
        { x: 50, y: 97, rot: 100 },
      ]
    : [
        { x: 80, y: 30, rot: 10 },
        { x: 85, y: 52, rot: 140 },
        { x: 50, y: 97, rot: 80 },
      ];
  const arrowOps = [arrowOpacity1, arrowOpacity2, arrowOpacity3];

  return (
    <div ref={ref} className="roadmap-item" style={{ position: "relative", width: "100%", minHeight: "240px", display: "flex", alignItems: "center" }}>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
        {/* Dashed treasure-map ghost trail */}
        <path
          d={pathD}
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />

        {/* Animated glowing curly path */}
        <motion.path
          d={pathD}
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke="url(#treasureGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 8px rgba(13,223,168,0.8))", pathLength }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="treasureGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="50%" stopColor="var(--mint)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>

        {/* Curly arrow markers along path */}
        {arrows.map((a, i) => (
          <motion.polygon
            key={i}
            points="0,-4 4.5,3 -4.5,3"
            fill="var(--mint)"
            transform={`translate(${a.x}, ${a.y}) rotate(${a.rot})`}
            style={{ filter: "drop-shadow(0 0 5px rgba(13,223,168,0.9))", opacity: arrowOps[i] }}
          />
        ))}
      </svg>

      {/* Treasure pin waypoint at path's widest point */}
      <motion.div
        className="treasure-pin"
        style={{
          position: "absolute",
          top: "30%",
          left: isLeft ? "20%" : "80%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          scale: dotScale,
          opacity: dotScale,
          y: pinBounce,
        }}
      >
        <span className="pin-head" />
        <span className="pin-spike" />
      </motion.div>

      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        width: "100%",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        padding: isLeft ? "0 0 0 18%" : "0 18% 0 0",
        alignItems: "center",
        gap: "30px",
      }}>
        {isLeft ? (
          <>
            <motion.span className="timeline-number" style={{ fontSize: "8rem", margin: 0, lineHeight: 0.8, fontWeight: 900, color: numberColor }}>
              {index + 1}
            </motion.span>
            <motion.div className="timeline-card-content" style={{ textAlign: "left", maxWidth: "350px", opacity: contentOpacity, x: contentXLeft }}>
              <h3 style={{ color: "var(--mint)", fontSize: "1.6rem", margin: "0 0 8px 0", fontWeight: 900 }}>{item.title}</h3>
              <p style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "0 0 6px 0" }}>{item.date}</p>
              <span style={{ color: "#8b9a9c", fontSize: "0.9rem", display: "block", fontWeight: 600 }}>{item.text}</span>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div className="timeline-card-content" style={{ textAlign: "right", maxWidth: "350px", opacity: contentOpacity, x: contentXRight }}>
              <h3 style={{ color: "var(--mint)", fontSize: "1.6rem", margin: "0 0 8px 0", fontWeight: 900 }}>{item.title}</h3>
              <p style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "0 0 6px 0" }}>{item.date}</p>
              <span style={{ color: "#8b9a9c", fontSize: "0.9rem", display: "block", fontWeight: 600 }}>{item.text}</span>
            </motion.div>
            <motion.span className="timeline-number" style={{ fontSize: "8rem", margin: 0, lineHeight: 0.8, fontWeight: 900, color: numberColor }}>
              {index + 1}
            </motion.span>
          </>
        )}
      </div>

    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    document.body.classList.add("synch-body");
    return () => document.body.classList.remove("synch-body");
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="synch-page">
      <nav className="synch-nav" aria-label="Primary navigation">
        <a className="synch-brand" href="#home" onClick={closeMenu}>
          <img src={cfcLogo} alt="Code for Change 2.0" />
          <span>Code for Change 2.0</span>
        </a>

        <div className={`synch-nav-links ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-pill" href="#register" onClick={closeMenu}>
            Apply Now
          </a>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className="quick-dots" aria-label="Section shortcuts">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href} aria-label={link.label}>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <section className="hero-section" id="home">
        <motion.div 
          className="hero-stars" 
          aria-hidden="true" 
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <div className="hero-grid">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow">CodeNest OSDC presents</p>
            <h1>
              <span>Code for Change</span>
              <strong>2.0</strong>
            </h1>
            <p className="hero-subtitle">
              A bright 24-hour hackathon where curious builders turn practical problems into polished prototypes.
            </p>
            <div className="hero-meta" aria-label="Event details">
              <span>
                <CalendarDays size={18} />
                April 10-11, 2026
              </span>
              <span>
                <MapPin size={18} />
                NSHM Knowledge Campus, Durgapur
              </span>
            </div>
            <div className="hero-actions">
              <a className="primary-btn" href="#register">
                Apply on Devfolio
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-btn" href="#timeline">
                View Timeline
              </a>
            </div>
          </motion.div>

          <motion.div
             className="hero-right"
             initial={{ opacity: 0, x: 40, y: 30 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div
               animate={{ y: [-20, 20, -20] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               style={{ width: '100%', display: 'flex', justifyContent: 'center', transform: 'scale(1.2)' }}
            >
              <RobotMascot className="hero-robot" />
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-stat-strip">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <CloudBank variant="hero-clouds" />
      </section>

      <section className="why-section section-pad" id="about">
        <div className="section-heading">
          <p className="eyebrow">Why you cannot miss</p>
          <h2>Code for Change 2.0!</h2>
        </div>

        <div className="why-stage">
          <div className="why-card-grid">
            {whyCards.map((card, index) => (
              <motion.article
                className="why-card"
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <card.icon size={22} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            ))}
          </div>
          <RobotMascot className="why-robot" />
        </div>

        <p className="about-copy">
          Code for Change 2.0 brings together students, mentors, open-source communities, and sponsors for one energetic
          build sprint. Bring a meaningful problem, shape it with your team, and leave with a demo that people can
          actually use.
        </p>
      </section>

      <section className="challenges-section section-pad" id="challenges">
        <div className="section-heading">
          <p className="eyebrow">Solve real-world</p>
          <h2>Challenges !!</h2>
        </div>

        <motion.article
          className="open-innovation-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="track-chip">Main Track</span>
            <h3>Open Innovation</h3>
            <p>
              Start with a real pain point and use any technology stack to build an elegant, useful, and demo-ready
              solution.
            </p>
          </div>
          <a href="#register" aria-label="Apply for Open Innovation">
            <ArrowUpRight size={24} />
          </a>
        </motion.article>

        <div className="challenge-list">
          {challengeTracks.map((track) => (
            <section className={`track-block track-${track.color}`} key={track.category}>
              <h3>{track.category}</h3>
              <div className="track-items">
                {track.items.map((item, index) => (
                  <motion.article
                    className="track-item"
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <strong>{index + 1}</strong>
                    <div>
                      <p>{item}</p>
                      <div className="tag-row">
                        <span>Prototype</span>
                        <span>Impact</span>
                        <span>Demo</span>
                      </div>
                    </div>
                    <ArrowUpRight size={20} />
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="stats-section section-pad">
        <div className="section-heading compact">
          <p className="eyebrow">Our Stats</p>
          <h2>Built for reach</h2>
        </div>
        <div className="stats-grid">
          <motion.article
            className="big-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <strong><CountUp end={4497} suffix="+" duration={2200} /></strong>
            <span>Hackers, viewers, and community members reached last season.</span>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Code2 size={26} />
            <strong><CountUp end={120} suffix="+" duration={1800} /></strong>
            <span>Project ideas shaped across tracks.</span>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Globe2 size={26} />
            <strong><CountUp end={15} suffix="+" duration={1500} /></strong>
            <span>Partner communities and mentors.</span>
          </motion.article>
        </div>

        <div className="events-await">
          <div>
            <p className="eyebrow">Exciting Events</p>
            <h2>Await !!</h2>
          </div>
          <RobotMascot className="event-robot" />
        </div>
      </section>

      <section className="timeline-section-new" id="timeline">
        <div className="skyline" aria-hidden="true" />
        <div className="timeline-inner">
          <div className="section-heading dark">
            <p className="eyebrow">Schedule</p>
            <h2>Timeline</h2>
          </div>
          <div className="roadmap-container" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1000px', margin: '40px auto 0' }}>
            {timeline.map((item, index) => (
              <RoadmapItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="sponsors-section-new" id="sponsors">
        <div className="section-heading dark sponsor-heading">
          <p className="eyebrow">Backed by</p>
          <h2>Sponsors</h2>
        </div>
        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <motion.article
              className="sponsor-card"
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={sponsor.logo} alt={sponsor.name} />
              <span>{sponsor.tier}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="faq-contact-section" id="faq">
        <div className="faq-wrap">
          <div>
            <p className="eyebrow">Have doubts?</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.button
                className={`faq-item-new ${activeFaq === index ? "active" : ""}`}
                type="button"
                key={faq.question}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span>{faq.question}</span>
                <strong>{activeFaq === index ? "-" : "+"}</strong>
                {activeFaq === index && <p>{faq.answer}</p>}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="contact-wrap" id="register">

          <div className="contact-copy">
            <p className="eyebrow">Get in touch</p>
            <h2>Let us sync your team with the next big build.</h2>
            <p>
              Questions about selection, tracks, sponsorship, or team formation? Reach the organizing team directly.
            </p>
            <a href="mailto:codeforchange2.0@gmail.com">
              <Mail size={18} />
              codeforchange2.0@gmail.com
            </a>
          </div>
        </div>

        <footer className="synch-footer-advanced">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <a className="synch-brand footer-brand" href="#home">
                <img src={cfcLogo} alt="Code for Change 2.0" />
                <span>Code for Change 2.0</span>
              </a>
              <p>A bright 24-hour hackathon where curious builders turn practical problems into polished prototypes.</p>
              <div className="footer-socials">
                {socialLinks.map((social) => (
                  <a href={social.href} aria-label={social.label} key={social.label} target="_blank" rel="noreferrer" title={social.label}>
                    <social.icon size={18} />
                    <span>{social.label}</span>
                  </a>
                ))}
                <a href="https://discord.gg/VPprt8haws" aria-label="Discord" target="_blank" rel="noreferrer" title="Discord">
                  <MessageCircle size={18} />
                  <span>Discord</span>
                </a>
              </div>
            </div>
            
            <div className="footer-links-col">
              <h3>Quick Links</h3>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
                <a href="#register">Register</a>
              </div>
            </div>

            <div className="footer-map-col">
              <h3>Location</h3>
              <a 
                href="https://maps.app.goo.gl/oXZW9c3jRTYv3Mh97" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-location-link"
                title="View on Google Maps"
              >
                <MapPin size={16} /> NSHM Knowledge Campus, Durgapur
              </a>
              <div className="footer-map-wrapper">
                <iframe 
                  src="https://maps.google.com/maps?q=NSHM%20Knowledge%20Campus,%20Durgapur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'contrast(1.1) opacity(0.95)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CodeNest OSDC. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default Home;

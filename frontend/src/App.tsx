import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  Linkedin,
  Menu,
  Send,
  Sparkles,
  X,
  Youtube,
  Instagram,
  Mail,
  ShieldCheck,
  Boxes,
  BarChart3,
} from "lucide-react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const API = (
  import.meta.env.VITE_API_BASE_URL ||
  "https://biavanta-backend.onrender.com/api"
).replace(/\/$/, "");

type Product = {
  name: string;
  category: string;
  description: string;
  slug?: string;
};

type Insight = {
  title: string;
  category: string;
  excerpt: string;
  slug?: string;
};

type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  technology?: string;
  slug?: string;
};

const fallbackProducts: Product[] = [
  {
    name: "AQVYRON",
    category: "Business Intelligence",
    description:
      "Intelligent Business Intelligence & Data Analytics System.",
    slug: "aqvyron",
  },
  {
    name: "NEXORA",
    category: "AI / SaaS",
    description:
      "A modern AI SaaS experience for digital businesses.",
    slug: "nexora",
  },
  {
    name: "ESTORA",
    category: "Digital Product",
    description:
      "A premium digital experience for modern property businesses.",
    slug: "estora",
  },
];

const capabilities = [
  [
    "AI & Intelligent Systems",
    "Intelligent software designed to automate workflows and augment better decisions.",
    BrainCircuit,
  ],
  [
    "Data Intelligence",
    "Transform complex data into clear insights, analytics and useful business intelligence.",
    Database,
  ],
  [
    "Software Engineering",
    "Production-ready applications, APIs and infrastructure engineered for scale.",
    Layers3,
  ],
  [
    "Digital Products",
    "From product thinking to polished, responsive digital experiences people enjoy using.",
    Globe2,
  ],
] as const;

const fallbackInsights: Insight[] = [
  {
    title: "Designing AI products people can actually use",
    category: "AI",
    excerpt:
      "Clarity, trust and product UX matter as much as the model behind the experience.",
  },
  {
    title: "From raw data to business intelligence",
    category: "Data",
    excerpt:
      "Useful analytics connect information with the decisions a business needs to make.",
  },
  {
    title: "Building a modern SaaS frontend",
    category: "Engineering",
    excerpt:
      "Performance, hierarchy and interaction design turn complex software into simple experiences.",
  },
];

const fallbackWork: CaseStudy[] = [
  {
    title: "AQVYRON",
    category: "Business Intelligence",
    summary:
      "Turning business data into actionable intelligence.",
    technology:
      "React • TypeScript • Django • PostgreSQL",
  },
  {
    title: "NEXORA",
    category: "AI / SaaS",
    summary:
      "A focused SaaS experience designed around AI workflows.",
    technology:
      "React • TypeScript • Vite",
  },
  {
    title: "ESTORA",
    category: "Digital Product",
    summary:
      "A premium property discovery experience built for clarity and speed.",
    technology:
      "React • TypeScript • Vite",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="nav container">

        <Link className="brand" to="/">
          <span className="brandmark">B</span>
          <span>BIAvanta</span>
        </Link>

        <button
          className="mobile"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "links open" : "links"}>
          <Link to="/company">Company</Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/work">Work</Link>
          <Link to="/innovation">Innovation</Link>
          <Link to="/insights">Insights</Link>

          <Link className="navcta" to="/contact">
            Talk to us
            <ArrowRight size={15} />
          </Link>
        </nav>

      </div>
    </header>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Footer() {
  return (
    <footer>

      <div className="container footgrid">

        <div className="footbrand">
          <Link className="brand" to="/">
            <span className="brandmark">B</span>
            <span>BIAvanta</span>
          </Link>

          <p>Technology • Intelligence • Innovation</p>

          <p className="footnote">
            Building intelligent digital systems for ambitious ideas.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/company">About</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Products</h4>
          <Link to="/products">AQVYRON</Link>
          <Link to="/products">NEXORA</Link>
          <Link to="/products">ESTORA</Link>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/solutions">Solutions</Link>
          <Link to="/work">Work</Link>
          <Link to="/innovation">Innovation</Link>
          <Link to="/insights">Insights</Link>
        </div>

        <div>
          <h4>Connect</h4>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Linkedin size={13} />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            YouTube <Youtube size={13} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Instagram size={13} />
          </a>

          <Link to="/contact">
            Email us <Mail size={13} />
          </Link>
        </div>

      </div>

      <div className="container bottom">
        <span>© 2026 BIAvanta. All rights reserved.</span>

        <span>
          Designed & developed by{" "}
          <Link to="/portfolio">
            Bipul Kumar Pandey
          </Link>
        </span>
      </div>

    </footer>
  );
}

function Hero() {
  return (
    <section className="hero">

      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="gridbg" />

      <div className="container hero-content">

        <span className="eyebrow">
          <span className="live-dot" />
          TECHNOLOGY • INTELLIGENCE • INNOVATION
        </span>

        <h1>
          Intelligence.
          <br />
          <em>Engineered.</em>
        </h1>

        <p className="hero-copy">
          BIAvanta builds intelligent technology, digital products
          and data-driven systems that turn complex ideas into
          useful experiences.
        </p>

        <div className="actions">

          <Link className="btn primary" to="/products">
            Explore products
            <ArrowRight size={16} />
          </Link>

          <Link className="btn glass" to="/contact">
            Start a conversation
            <ChevronRight size={16} />
          </Link>

        </div>

        <div className="hero-panel glass-panel">

          <div className="panel-top">
            <span>
              <i />
              <i />
              <i />
            </span>

            <small>
              BIAVANTA / INTELLIGENCE LAYER
            </small>

            <span>LIVE</span>
          </div>

          <div className="panel-body">

            <div className="panel-copy">
              <small>FROM DATA TO DECISIONS</small>

              <strong>
                Technology that
                <br />
                <span>moves ideas forward.</span>
              </strong>

              <p>
                AI + Analytics + Engineering + Product
              </p>
            </div>

            <div className="signal-stack">

              <div>
                <BrainCircuit />
                <span>AI</span>
                <b>01</b>
              </div>

              <div>
                <Database />
                <span>DATA</span>
                <b>02</b>
              </div>

              <div>
                <Layers3 />
                <span>SOFTWARE</span>
                <b>03</b>
              </div>

              <div className="impact">
                <BarChart3 />
                <span>BUSINESS IMPACT</span>
                <strong>↑ 94.8%</strong>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />

      {/* STEP 4 — WHO WE ARE */}
      <section className="section light who-we-are">

        <div className="container">

          <div className="who-top">

            <div>
              <small>WHO WE ARE</small>

              <h2>
                We build
                <br />
                <em>what comes next.</em>
              </h2>
            </div>

            <div className="who-intro">

              <p className="lead darklead">
                BIAvanta combines software engineering,
                artificial intelligence, data and product
                thinking to create technology that solves
                meaningful problems.
              </p>

              <Link
                className="textlink darktext"
                to="/company"
              >
                Discover BIAvanta
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

          <div className="who-pillars">

            <div className="who-pillar tilt">
              <BrainCircuit />

              <span>INTELLIGENCE</span>

              <strong>
                AI & intelligent systems
              </strong>

              <p>
                Practical intelligence designed around
                real business needs.
              </p>
            </div>

            <div className="who-pillar tilt">
              <Database />

              <span>DATA</span>

              <strong>
                Analytics & insight
              </strong>

              <p>
                Turning complex information into decisions
                people can act on.
              </p>
            </div>

            <div className="who-pillar tilt">
              <Layers3 />

              <span>ENGINEERING</span>

              <strong>
                Software & products
              </strong>

              <p>
                Reliable digital systems built for
                real-world use.
              </p>
            </div>

          </div>

          <div className="who-statement">
            <div className="statement-line" />

            <p>
              From <strong>idea</strong> to{" "}
              <strong>intelligence</strong> to{" "}
              <strong>impact.</strong>
            </p>

            <span>BIAvanta</span>
          </div>

        </div>
      </section>

      {/* STEP 5 — CAPABILITIES */}
      <section className="section capabilities capabilities-premium">

        <div className="container">

          <div className="head">

            <div>
              <small>CAPABILITIES</small>
              <h2>What we engineer.</h2>
            </div>

            <Link
              className="textlink"
              to="/solutions"
            >
              Our solutions
              <ArrowRight size={15} />
            </Link>

          </div>

          <div className="capgrid">

            {capabilities.map(
              ([title, desc, Icon], i) => (
                <Link
                  to="/solutions"
                  className="cap-card tilt"
                  key={title}
                >
                  <span className="number">
                    0{i + 1}
                  </span>

                  <div className="iconbox">
                    <Icon />
                  </div>

                  <h3>{title}</h3>

                  <p>{desc}</p>

                  <span className="card-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              )
            )}

          </div>

         <div className="capabilities-tech">
  <span>PYTHON</span>
  <span>DJANGO</span>
  <span>REACT</span>
  <span>TYPESCRIPT</span>
  <span>POSTGRESQL</span>
  <span>AI</span>
</div>

        </div>
      </section>

      {/* STEP 6 — PRODUCT ECOSYSTEM */}
      <section className="section products-section products-premium">

        <div className="container">

          <div className="head products-head">

            <div>
              <small>PRODUCT ECOSYSTEM</small>

              <h2>
                Built by
                <br />
                <em>BIAvanta.</em>
              </h2>
            </div>

            <div className="products-intro">

              <p>
                A growing ecosystem of intelligent software,
                AI experiences, analytics platforms and
                digital products.
              </p>

              <Link
                className="textlink"
                to="/products"
              >
                Explore product ecosystem
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

          <Link
            to="/products"
            className="featured-product tilt"
          >

            <div className="featured-product-bg" />

            <div className="featured-product-content">

              <div className="featured-product-top">

                <span className="product-label">
                  FLAGSHIP PRODUCT
                </span>

                <span className="product-status">
                  <i />
                  LIVE PRODUCT
                </span>

              </div>

              <div className="featured-product-main">

                <div className="featured-copy">

                  <small>
                    BUSINESS INTELLIGENCE • DATA ANALYTICS
                  </small>

                  <h3>AQVYRON</h3>

                  <h4>
                    Intelligent Business Intelligence
                    <br />
                    & Data Analytics System.
                  </h4>

                  <p>
                    Transform business data into meaningful
                    intelligence, actionable insights and
                    confident decisions through a modern
                    analytics experience.
                  </p>

                  <div className="product-tech">
                    <span>React</span>
                    <span>Django</span>
                    <span>PostgreSQL</span>
                    <span>Analytics</span>
                  </div>

                  <span className="product-link">
                    Explore AQVYRON
                    <ArrowRight size={17} />
                  </span>

                </div>

                <div className="aqvyron-visual">

                  <div className="aqvyron-glow" />

                  <div className="aqvyron-window">

                    <div className="aqvyron-window-top">

                      <span>
                        <i />
                        <i />
                        <i />
                      </span>

                      <small>
                        AQVYRON / ANALYTICS
                      </small>

                      <b>LIVE</b>

                    </div>

                    <div className="aqvyron-window-body">

                      <div className="aqvyron-stat">
                        <small>REVENUE</small>
                        <strong>₹12.84L</strong>
                        <span>↑ 18.6%</span>
                      </div>

                      <div className="aqvyron-stat">
                        <small>ACTIVE USERS</small>
                        <strong>24.8K</strong>
                        <span>↑ 12.4%</span>
                      </div>

                      <div className="aqvyron-chart">

                        <small>REVENUE TREND</small>

                        <div className="chart-bars">

                          {[35, 48, 42, 62, 55, 76, 68, 91].map(
                            (h, i) => (
                              <i
                                key={i}
                                style={{
                                  height: `${h}%`,
                                }}
                              />
                            )
                          )}

                        </div>

                        <div className="chart-months">
                          <span>JAN</span>
                          <span>MAR</span>
                          <span>MAY</span>
                          <span>JUL</span>
                          <span>AUG</span>
                        </div>

                      </div>

                      <div className="aqvyron-confidence">

                        <span>
                          DECISION CONFIDENCE
                        </span>

                        <strong>94.8%</strong>

                        <div>
                          <i />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>

          <div className="product-secondary-grid">

            <Link
              to="/products"
              className="secondary-product tilt"
            >

              <div className="secondary-icon">
                <BrainCircuit />
              </div>

              <div className="secondary-number">
                02
              </div>

              <small>AI / SAAS</small>

              <h3>NEXORA</h3>

              <p>
                A modern AI SaaS experience designed
                around intelligent digital workflows.
              </p>

              <div className="secondary-bottom">
                <span>
                  AI • SAAS • PRODUCT
                </span>

                <ArrowRight size={17} />
              </div>

            </Link>

            <Link
              to="/products"
              className="secondary-product tilt"
            >

              <div className="secondary-icon">
                <Globe2 />
              </div>

              <div className="secondary-number">
                03
              </div>

              <small>DIGITAL PRODUCT</small>

              <h3>ESTORA</h3>

              <p>
                A premium property discovery experience
                built for clarity, speed and modern users.
              </p>

              <div className="secondary-bottom">
                <span>
                  PROPERTY • WEB • UX
                </span>

                <ArrowRight size={17} />
              </div>

            </Link>

            <div className="product-philosophy">

              <span>PRODUCT PHILOSOPHY</span>

              <h3>
                Ideas become
                <br />
                <em>systems.</em>
              </h3>

              <p>
                Every BIAvanta product starts with a real
                problem and ends with a technology
                experience designed around people.
              </p>

              <Link to="/innovation">
                Our innovation
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* STEP 7 — INNOVATION LAB */}
      <section className="innovation-lab">

        <div className="innovation-grid-bg" />

        <div className="innovation-orb innovation-orb-one" />
        <div className="innovation-orb innovation-orb-two" />

        <div className="container">

          <div className="innovation-top">

            <div>

              <span className="innovation-eyebrow">
                <i />
                BIAVANTA INTELLIGENCE LAB
              </span>

              <h2>
                We build for
                <br />
                <em>what comes next.</em>
              </h2>

            </div>

            <div className="innovation-intro">

              <p>
                Technology is moving fast. We explore
                the ideas, systems and experiences that
                can turn emerging technology into
                meaningful business outcomes.
              </p>

              <Link
                to="/innovation"
                className="innovation-link"
              >
                Explore our thinking
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

          <div className="innovation-system">

            <div className="system-core">

              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />
              <div className="core-ring ring-three" />

              <div className="core-center">
                <BrainCircuit size={30} />
                <span>BIAvanta</span>
                <small>INTELLIGENCE</small>
              </div>

            </div>

            <div className="system-node node-ai">
              <BrainCircuit />
              <span>AI</span>
              <small>INTELLIGENCE</small>
            </div>

            <div className="system-node node-data">
              <Database />
              <span>DATA</span>
              <small>ANALYTICS</small>
            </div>

            <div className="system-node node-product">
              <Layers3 />
              <span>PRODUCT</span>
              <small>EXPERIENCE</small>
            </div>

            <div className="system-node node-trust">
              <ShieldCheck />
              <span>TRUST</span>
              <small>RELIABILITY</small>
            </div>

            <div className="system-line line-horizontal" />
            <div className="system-line line-vertical" />

          </div>

          <div className="innovation-bottom">

            <div className="innovation-status">
              <span className="status-dot" />
              <span>RESEARCH STATUS</span>
              <strong>ACTIVE</strong>
            </div>

            <div className="innovation-statement">
              <span>IDEA</span>
              <i />
              <span>EXPERIMENT</span>
              <i />
              <span>ENGINEER</span>
              <i />
              <span>IMPACT</span>
            </div>

          </div>

        </div>
      </section>

      {/* STEP 8 — INSIGHTS */}
      <section className="section light insights-home-premium">

        <div className="container">

          <div className="insights-home-head">

            <div>
              <small>BIAVANTA INSIGHTS</small>

              <h2>
                Ideas that
                <br />
                <em>move technology forward.</em>
              </h2>
            </div>

            <div className="insights-home-intro">

              <p>
                Perspectives across artificial intelligence,
                data, engineering and digital products —
                focused on ideas that create meaningful
                outcomes.
              </p>

              <Link
                className="textlink darktext"
                to="/insights"
              >
                Explore all insights
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

          <div className="insights-home-grid">

            <Link
              to="/insights"
              className="insight-feature tilt"
            >

              <div className="insight-feature-number">
                01
              </div>

              <div className="insight-visual">

                <div className="insight-orbit orbit-a" />
                <div className="insight-orbit orbit-b" />

                <div className="insight-core">
                  <BrainCircuit size={28} />
                </div>

              </div>

              <div className="insight-feature-content">

                <span>
                  AI • INTELLIGENCE
                </span>

                <h3>
                  Designing AI products
                  <br />
                  people can actually use.
                </h3>

                <p>
                  Clarity, trust and product UX matter
                  as much as the intelligence behind
                  the experience.
                </p>

                <div className="insight-read">
                  Read insight
                  <ArrowRight size={16} />
                </div>

              </div>

            </Link>

            <div className="insight-side-grid">

              <Link
                to="/insights"
                className="insight-mini tilt"
              >

                <div className="insight-mini-top">
                  <span>02</span>
                  <Database size={19} />
                </div>

                <small>
                  DATA • ANALYTICS
                </small>

                <h3>
                  From raw data
                  <br />
                  to business intelligence.
                </h3>

                <p>
                  Useful analytics connect information
                  with the decisions a business needs
                  to make.
                </p>

                <span className="insight-mini-link">
                  Explore
                  <ArrowRight size={15} />
                </span>

              </Link>

              <Link
                to="/insights"
                className="insight-mini tilt"
              >

                <div className="insight-mini-top">
                  <span>03</span>
                  <Layers3 size={19} />
                </div>

                <small>
                  ENGINEERING • PRODUCT
                </small>

                <h3>
                  Building a modern
                  <br />
                  SaaS frontend.
                </h3>

                <p>
                  Performance, hierarchy and interaction
                  design turn complex software into
                  simple experiences.
                </p>

                <span className="insight-mini-link">
                  Explore
                  <ArrowRight size={15} />
                </span>

              </Link>

            </div>

          </div>

          <div className="insights-bottom-line">

            <span>AI</span>
            <i />
            <span>DATA</span>
            <i />
            <span>ENGINEERING</span>
            <i />
            <span>PRODUCT</span>

            <strong>
              THINK • BUILD • IMPACT
            </strong>

          </div>

        </div>
      </section>

      {/* STEP 9 — FOUNDER */}
      <section className="section light founder-home founder-home-premium">

        <div className="container two">

          <div>

            <small>THE FOUNDER</small>

            <h2>
              Building BIAvanta from ideas
              into intelligent technology.
            </h2>

            <p className="lead darklead">
              Bipul Kumar Pandey is the founder of BIAvanta,
              focused on software engineering, AI, data
              analytics and digital product development.
            </p>

            <div className="actions">

              <Link
                className="btn primary"
                to="/founder"
              >
                Meet the founder
                <ArrowRight size={16} />
              </Link>

              <Link
                className="btn outline"
                to="/portfolio"
              >
                View portfolio
              </Link>

            </div>

          </div>

          <div className="founder-card-3d tilt">

            <div className="avatar">
              BP
            </div>

            <small>
              FOUNDER / BUILDER
            </small>

            <strong>
              Bipul Kumar Pandey
            </strong>

            <p>
              Software Engineering • AI • Data & Analytics
            </p>

            <div className="founder-stats">

              <span>
                <b>AI</b>
                <small>Focus</small>
              </span>

              <span>
                <b>DATA</b>
                <small>Focus</small>
              </span>

              <span>
                <b>WEB</b>
                <small>Focus</small>
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* STEP 10–12 — FINAL CTA */}
      <section className="cta cta-premium">

        <div className="cta-glow" />

        <div className="container">

          <Sparkles />

          <small>LET'S BUILD</small>

          <h2>
            Have something
            <br />
            <em>worth building?</em>
          </h2>

          <p>
            Tell us what you're trying to create.
            Let's turn the idea into technology.
          </p>

          <Link
            className="btn primary"
            to="/contact"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>
    </>
  );
}

function Page({
  ey,
  title,
  children,
}: {
  ey: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <main className="page">
      <div className="container">

        <small>{ey}</small>

        <h1>{title}</h1>

        {children}

      </div>
    </main>
  );
}

function Company() {
  return (
    <Page
      ey="COMPANY"
      title="A technology company focused on building what comes next."
    >

      <p className="lead">
        BIAvanta combines engineering, intelligence and
        product thinking to create useful, scalable digital
        technology for a changing world.
      </p>

      <div className="manifesto-grid">

        <div className="manifesto-main">

          <small>OUR PRINCIPLE</small>

          <h2>
            Technology should create impact,
            not complexity.
          </h2>

          <p>
            We care about useful systems, thoughtful
            experiences and engineering that holds up
            beyond the demo.
          </p>

        </div>

        <div className="principles">

          {[
            "Build with purpose.",
            "Think long-term.",
            "Engineer deeply.",
            "Stay curious.",
            "Keep it simple.",
            "Measure impact.",
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              {x}
            </div>
          ))}

        </div>

      </div>

      <div className="split-block">

        <div>
          <small>LEADERSHIP</small>

          <h2>
            Human thinking.
            <br />
            Intelligent systems.
          </h2>
        </div>

        <div>

          <p className="lead">
            BIAvanta is founded with a simple idea:
            combine strong engineering with practical
            intelligence to create products people can
            actually use.
          </p>

          <Link
            className="btn primary"
            to="/founder"
          >
            Founder profile
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </Page>
  );
}

function Founder() {
  return (
    <Page
      ey="LEADERSHIP"
      title="Bipul Kumar Pandey."
    >

      <p className="lead">
        Founder, BIAvanta • Software Engineer • Builder
      </p>

      <div className="founderlarge">

        <div className="avatar big">
          BP
        </div>

        <div>

          <small>THE FOUNDER</small>

          <h2>
            Building technology with purpose.
          </h2>

          <p className="lead">
            Bipul works across software engineering,
            artificial intelligence, data analytics and
            digital product development.
          </p>

          <p className="lead">
            Understand the problem. Engineer the right
            system. Turn it into a product people can use.
          </p>

          <div className="chips">
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Data Analytics</span>
          </div>

          <Link
            className="btn primary"
            to="/portfolio"
          >
            Explore personal portfolio
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </Page>
  );
}

function Products() {
  const [items, setItems] =
    useState<Product[]>(fallbackProducts);

  useEffect(() => {

    fetch(`${API}/products/`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {

        if (Array.isArray(data) && data.length) {
          setItems(data);
        }

      })
      .catch(() => {});

  }, []);

  return (
    <Page
      ey="PRODUCTS"
      title="Products built to solve real problems."
    >

      <p className="lead">
        A growing ecosystem of intelligent software,
        digital experiences and data-driven products.
      </p>

      <div className="cards product-page-grid">

        {items.map((p, i) => (

          <article
            className="card tilt"
            key={p.slug || p.name}
          >

            <span className="card-no">
              0{i + 1}
            </span>

            <div className="mini-icon">
              <Boxes />
            </div>

            <small>{p.category}</small>

            <h2>{p.name}</h2>

            <p>{p.description}</p>

            <Link to="/work">
              View related work
              <ArrowRight size={15} />
            </Link>

          </article>

        ))}

      </div>

    </Page>
  );
}

function Solutions() {
  return (
    <Page
      ey="SOLUTIONS"
      title="Technology for ambitious businesses."
    >

      <p className="lead">
        From intelligent automation to production-ready
        software, we help turn complex ideas into useful
        systems.
      </p>

      <div className="cards">

        {capabilities.map(([t, d, I]) => (

          <article
            className="card tilt"
            key={t}
          >

            <div className="mini-icon">
              <I />
            </div>

            <h2>{t}</h2>

            <p>{d}</p>

            <Link to="/contact">
              Discuss a project
              <ArrowRight size={15} />
            </Link>

          </article>

        ))}

      </div>

    </Page>
  );
}

function Work() {
  const [items, setItems] =
    useState<CaseStudy[]>(fallbackWork);

  useEffect(() => {

    fetch(`${API}/work/`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {

        if (Array.isArray(data) && data.length) {
          setItems(data);
        }

      })
      .catch(() => {});

  }, []);

  return (
    <Page
      ey="SELECTED WORK"
      title="From ideas to working products."
    >

      <p className="lead">
        A selection of products and digital experiences
        engineered through BIAvanta.
      </p>

      <div className="cards work-grid">

        {items.map((p, i) => (

          <article
            className="card work-card tilt"
            key={p.slug || p.title}
          >

            <div
              className={`visual visual-${i % 3}`}
            >
              <span>0{i + 1}</span>
              <Layers3 />
            </div>

            <small>{p.category}</small>

            <h2>{p.title}</h2>

            <p>{p.summary}</p>

            {p.technology && (
              <span className="tech">
                {p.technology}
              </span>
            )}

            <Link to="/contact">
              Build something similar
              <ArrowRight size={15} />
            </Link>

          </article>

        ))}

      </div>

    </Page>
  );
}

function Innovation() {
  const labs = [
    [
      BrainCircuit,
      "AI Lab",
      "Exploring practical applications of artificial intelligence.",
    ],
    [
      Database,
      "Data Lab",
      "Building systems that turn data into understanding.",
    ],
    [
      Layers3,
      "Product Lab",
      "Experimenting with new digital product ideas.",
    ],
    [
      ShieldCheck,
      "Trust Lab",
      "Designing reliable, secure and responsible digital experiences.",
    ],
  ];

  return (
    <Page
      ey="INNOVATION"
      title="We build for what comes next."
    >

      <p className="lead">
        Research becomes technology. Technology becomes
        products. Products become useful outcomes.
      </p>

      <div className="cards">

        {labs.map(([Icon, t, d]) => {

          const I = Icon as any;

          return (
            <article
              className="card tilt"
              key={String(t)}
            >

              <div className="mini-icon">
                <I />
              </div>

              <h2>{String(t)}</h2>

              <p>{String(d)}</p>

            </article>
          );
        })}

      </div>

    </Page>
  );
}

function Insights() {
  const [items, setItems] =
    useState<Insight[]>(fallbackInsights);

  useEffect(() => {

    fetch(`${API}/insights/`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {

        if (Array.isArray(data) && data.length) {
          setItems(data);
        }

      })
      .catch(() => {});

  }, []);

  return (
    <Page
      ey="INSIGHTS"
      title="Ideas worth exploring."
    >

      <p className="lead">
        Thinking across AI, data, engineering and product.
      </p>

      <div className="insights">

        {items.map((x, i) => (

          <article key={x.slug || i}>

            <div>

              <small>{x.category}</small>

              <h2>{x.title}</h2>

              <p>{x.excerpt}</p>

            </div>

            <span className="insight-arrow">
              <ArrowRight />
            </span>

          </article>

        ))}

      </div>

    </Page>
  );
}

function Portfolio() {
  return (
    <Page
      ey="FOUNDER PORTFOLIO"
      title="Bipul Kumar Pandey."
    >

      <p className="lead">
        Software Engineer • Builder • Founder
      </p>

      <div className="port">

        <div>

          <small>ABOUT</small>

          <h2>
            Engineering with a product mindset.
          </h2>

          <p>
            Focused on Python, Django, React,
            data analytics, AI and digital product
            development.
          </p>

        </div>

        <div>

          <small>SKILLS</small>

          <h2>Core stack.</h2>

          <div className="chips">

            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Data Analytics</span>

          </div>

        </div>

        <div>

          <small>FEATURED PROJECTS</small>

          <h2>
            AQVYRON • BIAvanta • ESTORA • NEXORA
          </h2>

          <p>
            Products and digital experiences built
            across data, AI, web and software.
          </p>

        </div>

        <div>

          <small>PROFESSIONAL PROFILE</small>

          <h2>Explore the work.</h2>

          <p>
            View the complete professional portfolio
            and engineering work.
          </p>

          <a
            className="btn primary"
            href="https://github.com/bipulpandey110-hash"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ExternalLink size={15} />
          </a>

        </div>

      </div>

    </Page>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(
    e: FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setBusy(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;

    const data = Object.fromEntries(
      new FormData(form)
    );

    try {

      const r = await fetch(
        `${API}/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!r.ok) {

        const detail = await r.text();

        throw new Error(
          detail || "Request failed"
        );
      }

      setSent(true);
      form.reset();

    } catch {

      setError(
        "We couldn't send the message right now. Please try again or email BIAvanta directly."
      );

    } finally {

      setBusy(false);

    }
  }

  return (
    <Page
      ey="CONTACT"
      title="Let's build what's next."
    >

      <p className="lead">
        Tell us what you're trying to create,
        what you're trying to solve, or where
        technology can take your business.
      </p>

      <div className="contact-layout">

        <div className="contact-side">

          <div className="contact-orb">
            <Mail />
          </div>

          <h2>Start with an idea.</h2>

          <p>
            Share the context. We'll take it from there.
          </p>

          <div className="contact-points">

            <span>
              <Check />
              AI & intelligent systems
            </span>

            <span>
              <Check />
              Data & analytics
            </span>

            <span>
              <Check />
              Web & software development
            </span>

            <span>
              <Check />
              Digital product development
            </span>

          </div>

        </div>

        <form
          className="form"
          onSubmit={submit}
        >

          {sent && (
            <div className="success">
              <Check />
              Thanks — your message has been received.
            </div>
          )}

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <div className="formgrid">

            <label>
              Name
              <input
                name="name"
                required
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </label>

            <label>
              Company
              <input
                name="company"
                placeholder="Company name"
              />
            </label>

            <label>
              Project type

              <select name="project_type">
                <option>AI Solution</option>
                <option>Data & Analytics</option>
                <option>Web Application</option>
                <option>SaaS Product</option>
                <option>Software Development</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Budget
              <input
                name="budget"
                placeholder="₹ / $ budget range"
              />
            </label>

          </div>

          <label>
            Message

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell us about your idea..."
            />
          </label>

          <button
            className="btn primary"
            disabled={busy}
          >
            {busy ? "Sending..." : "Send inquiry"}
            <Send size={15} />
          </button>

        </form>

      </div>

    </Page>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/company"
          element={<Company />}
        />

        <Route
          path="/founder"
          element={<Founder />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/innovation"
          element={<Innovation />}
        />

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={
            <Page
              ey="404"
              title="Page not found."
            >

              <p className="lead">
                The page you're looking for doesn't exist.
              </p>

              <Link
                className="btn primary"
                to="/"
              >
                Return home
                <ArrowRight size={16} />
              </Link>

            </Page>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
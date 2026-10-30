
"use client";

import { useState } from "react";
import styles from "./page.module.css";

const projects = [
{
number: "01",
category: "FULL-STACK DEVELOPMENT",
title: "Student Complaint Portal",
description:
"A platform designed to help students submit and manage complaints through a structured digital workflow.",
stack: ["Next.js", "JavaScript", "API Integration"],
status: "IN DEVELOPMENT",
},
{
number: "02",
category: "WEB APPLICATION",
title: "Pulse Blog Platform",
description:
"A modern publishing experience focused on content creation, user interaction, and responsive reading.",
stack: ["Next.js", "Node.js", "MongoDB"],
status: "PERSONAL PROJECT",
},
{
number: "03",
category: "CYBERSECURITY",
title: "Security Lab",
description:
"A developing collection of authorized security exercises, Linux practice, network analysis, and security notes.",
stack: ["Linux", "Networking", "Security"],
status: "LEARNING LAB",
},
];

const capabilities = [
{
number: "01",
title: "Frontend Engineering",
description:
"Building responsive, accessible, and visually polished user interfaces.",
tags: ["JavaScript", "React", "Next.js", "CSS"],
},
{
number: "02",
title: "Backend Engineering",
description:
"Developing APIs, application logic, authentication, and data-driven systems.",
tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
},
{
number: "03",
title: "Cybersecurity",
description:
"Exploring network security, Linux, vulnerability assessment, and ethical security testing.",
tags: ["Linux", "Networking", "Kali Linux", "Web Security"],
},
];

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return (
<main className={styles.main}>
<div className={styles.ambientGlow} aria-hidden="true" />

  <header className={styles.header}>
    <a href="#home" className={styles.logo} onClick={closeMenu}>
      RAUFU<span>.DEV</span>
    </a>

    <button
      className={styles.menuButton}
      aria-label={menuOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "CLOSE" : "MENU"}
    </button>

    <nav
      className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
      aria-label="Main navigation"
    >
      {[
        ["About", "#about"],
        ["Expertise", "#expertise"],
        ["Projects", "#projects"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a key={label} href={href} onClick={closeMenu}>
          {label}
        </a>
      ))}

      <a
        href="#contact"
        className={styles.navCta}
        onClick={closeMenu}
      >
        Let's Talk <span>↗</span>
      </a>
    </nav>
  </header>

  <section className={styles.hero} id="home">
    <div className={styles.heroContent}>
      <div className={styles.eyebrow}>
        <span className={styles.statusDot} />
        SOFTWARE ENGINEERING × CYBERSECURITY
      </div>

      <h1>
        Building the
        <br />
        <span className={styles.gradientText}>digital future.</span>
      </h1>

      <p className={styles.heroDescription}>
        I'm Raufu Abdulrasheed — a developer focused on building modern
        web experiences and exploring the art of securing digital systems.
      </p>

      <div className={styles.heroActions}>
        <a href="#projects" className={styles.primaryButton}>
          Explore my work <span>↗</span>
        </a>

        <a href="#about" className={styles.secondaryButton}>
          Discover my story <span>↓</span>
        </a>
      </div>

      <div className={styles.heroMeta}>
        <div>
          <span className={styles.metaLabel}>FOCUS</span>
          <span>Build · Secure · Improve</span>
        </div>

        <div>
          <span className={styles.metaLabel}>APPROACH</span>
          <span>Curiosity meets engineering</span>
        </div>
      </div>
    </div>

    <div className={styles.visual} aria-label="Abstract digital artwork">
      <div className={styles.visualGrid} />

      <div className={styles.orbit orbitOne} />
      <div className={styles.orbit orbitTwo} />
      <div className={styles.orbit orbitThree} />

      <div className={styles.core}>
        <span>&lt;/&gt;</span>
      </div>

      <div className={`${styles.floatCard} ${styles.cardTop}`}>
        <span className={styles.cardIcon}>⌘</span>
        <div>
          <strong>ENGINEERING</strong>
          <small>Building digital products</small>
        </div>
      </div>

      <div className={`${styles.floatCard} ${styles.cardBottom}`}>
        <span className={styles.securityIcon}>◇</span>
        <div>
          <strong>SECURITY</strong>
          <small>Think. Test. Protect.</small>
        </div>
      </div>

      <div className={styles.visualLabel}>
        <span>FIG. 001</span>
        <span>DIGITAL SYSTEMS</span>
      </div>
    </div>

    <a href="#about" className={styles.scrollIndicator}>
      <span /> SCROLL TO EXPLORE
    </a>
  </section>

  <section className={styles.introSection} id="about">
    <div className={styles.sectionLabel}>
      <span>01 / ABOUT</span>
      <span>THE PERSON BEHIND THE CODE</span>
    </div>

    <div className={styles.introGrid}>
      <h2>
        Not just writing code.
        <br />
        <span>Solving real problems.</span>
      </h2>

      <div className={styles.introCopy}>
        <p>
          Technology is more than making things work. It's about
          understanding problems, designing thoughtful solutions, and
          building systems people can trust.
        </p>

        <p>
          My interests span full-stack development and cybersecurity,
          combining the creation of digital products with a growing
          understanding of how to test and strengthen them.
        </p>

        <a href="#expertise" className={styles.textLink}>
          Explore my capabilities <span>↗</span>
        </a>
      </div>
    </div>
  </section>

  <section className={styles.expertiseSection} id="expertise">
    <div className={styles.sectionLabel}>
      <span>02 / EXPERTISE</span>
      <span>WHAT I WORK ON</span>
    </div>

    <div className={styles.sectionHeading}>
      <h2>
        Three dimensions.
        <br />
        <span>One mindset.</span>
      </h2>

      <p>
        Creating digital experiences while learning how to make systems
        more reliable, resilient, and secure.
      </p>
    </div>

    <div className={styles.capabilityGrid}>
      {capabilities.map((item) => (
        <article className={styles.capabilityCard} key={item.number}>
          <div className={styles.capabilityTop}>
            <span>{item.number}</span>
            <span className={styles.arrowIcon}>↗</span>
          </div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <div className={styles.tagList}>
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className={styles.projectsSection} id="projects">
    <div className={styles.sectionLabel}>
      <span>03 / SELECTED WORK</span>
      <span>IDEAS INTO APPLICATIONS</span>
    </div>

    <div className={styles.sectionHeading}>
      <h2>
        Work in
        <br />
        <span>progress.</span>
      </h2>

      <p>
        A selection of projects and learning initiatives. Each project
        will evolve with working demos, documentation, and real results.
      </p>
    </div>

    <div className={styles.projectList}>
      {projects.map((project) => (
        <article className={styles.projectCard} key={project.number}>
          <div className={styles.projectNumber}>{project.number}</div>

          <div className={styles.projectInfo}>
            <span className={styles.projectCategory}>
              {project.category}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.tagList}>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.projectEnd}>
            <span className={styles.projectStatus}>
              {project.status}
            </span>
            <span className={styles.projectArrow}>↗</span>
          </div>
        </article>
      ))}
    </div>
  </section>

  <section className={styles.contactSection} id="contact">
    <div className={styles.contactOrb} aria-hidden="true" />

    <div className={styles.sectionLabel}>
      <span>04 / CONTACT</span>
      <span>LET'S CREATE SOMETHING MEANINGFUL</span>
    </div>

    <p className={styles.contactEyebrow}>HAVE AN IDEA?</p>

    <h2>
      Let's build
      <br />
      <span>what's next.</span>
    </h2>

    <p className={styles.contactDescription}>
      Have a project, collaboration idea, or an interesting problem to
      solve? Let's start a conversation.
    </p>

    <a
      className={styles.primaryButton}
      href="mailto:your-email@example.com"
    >
      Get in touch <span>↗</span>
    </a>

    <p className={styles.emailNote}>
      Replace the placeholder email with your professional email address.
    </p>
  </section>

  <footer className={styles.footer}>
    <a href="#home" className={styles.logo}>
      RAUFU<span>.DEV</span>
    </a>

    <p>Built with curiosity and a commitment to learning.</p>

    <a href="#home" className={styles.backToTop}>
      BACK TO TOP ↑
    </a>

    <span className={styles.copyright}>
      © {new Date().getFullYear()} RAUFU.DEV
    </span>
  </footer>
</main>

);
} 

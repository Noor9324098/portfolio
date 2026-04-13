import "./App.css";
import { FaDatabase, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  SiC,
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiSubstack,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";
import { SwordCursor } from "./SwordCursor";
import { RavenFly, triggerRaven } from "./Raven";
import MusicPlayer from "./MusicPlayer";
import { RavenSound, triggerRavenSound } from "./RavenSound";
import { ProjectSound, triggerProjectSound } from "./ProjectHallSound";
import cvPdf from "./CV.pdf";

const navigationLinks = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Interactive Fully Functional Web Based Pet Portal",
    description:
      "This portal is a mini digital simulation where users can adopt animals and interact with them by feeding them, playing with them, and treating them, with extra features such as shopping, account credentials, and saved logs.",
    images: [
      `${process.env.PUBLIC_URL}/images/project/pet-portal-1.png`,
      `${process.env.PUBLIC_URL}/images/project/pet-portal-2.png`,
      `${process.env.PUBLIC_URL}/images/project/pet-portal-3.png`,
    ],
    stack: [
      { label: "Svelte 5 Framework", Icon: SiSvelte },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: SiCss },
      { label: "Local DB (logs and account credentials)", Icon: FaDatabase },
    ],
    github: "https://github.com/Noor9324098/Pet-portal",
  },
  {
    title: "PXL Travel Booking Platform",
    description:
      "A full stack travel booking website for an existing company in Yemen, providing local and international flight search and booking services in addition to bus booking.",
    images:[
       `${process.env.PUBLIC_URL}/images/project/pxl-travel-1.png`,
      `${process.env.PUBLIC_URL}/images/project/pxl-travel-2.png`
    ],
      stack: [
      { label: "Vite (build tool)", Icon: SiVite },
      { label: "TypeScript (type safety)", Icon: SiTypescript },
      { label: "React (UI)", Icon: SiReact },
      { label: "shadcn-ui (components)", Icon: TbComponents },
      { label: "Tailwind CSS (styling)", Icon: SiTailwindcss },
      { label: "SQL (database)", Icon: FaDatabase },
      { label: "MongoDB (database)", Icon: SiMongodb },
    ],
    github: "https://github.com/Noor9324098/PXL_Travel"
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: SiCss },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "React", Icon: SiReact },
      { label: "Svelte", Icon: SiSvelte },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node", Icon: SiNodedotjs },
      { label: "SpringBoot (Java)", Icon: SiSpringboot },
      { label: "C", Icon: SiC },
    ],
  },
  {
    title: "Database",
    items: [
      { label: "SQL", Icon: FaDatabase },
      { label: "MySQL", Icon: SiMysql },
      { label: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    title: "Other",
    items: [
      { label: "Git", Icon: SiGit },
      { label: "Linux", Icon: SiLinux },
      { label: "Vite", Icon: SiVite },
    ],
  },
];

const contact = [
  {
    title: "Contacts",
    items: [
      {
        label: "Email",
        Icon: MdEmail,
        email: "nooraddeenalhaddad2020@gmail.com",
      },
      { label: "Github", Icon: SiGit, url: "https://github.com/Noor9324098" },
      {
        label: "Linkedin",
        Icon: FaLinkedin,
        url: "https://www.linkedin.com/in/nooraddeeen/",
      },
      {
        label: "Substack",
        Icon: SiSubstack,
        url: "https://substack.com/@nooraddeenalhaddad",
      },
    ],
  },
];

function App() {
  return (
    <div className="throne-page" id="top">
      <RavenFly />
      <SwordCursor />
      <MusicPlayer />
      <RavenSound />
      <ProjectSound />

      <div className="atmosphere-layer" aria-hidden="true" />

      <header className="top-nav" aria-label="Main navigation">
        <p className="brand">Nooraddeen Al-Haddad | Portfolio</p>
        <nav className="nav-links" aria-label="Section links">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content-wrap">
        <section className="hero" aria-label="Portfolio introduction">
          <div className="hero-copy">
            <p className="hero-intro">
              This is Nooraddeen Al-Haddad of Yemen they call me Noor, make
              yourself coffee and enjoy the epic music while browsing my
              portfolio!
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href="#projects"
                onClick={(e) => {
                  triggerProjectSound();
                }}
              >
                Enter The Projects Hall
              </a>
              <a
                className="btn btn-iron"
                href="#contact"
                onClick={(e) => {
                  triggerRaven();
                  triggerRavenSound();
                }}
              >
                Send A Raven
              </a>
              <h1 className="hero-kicker">The North Remembers Great Work</h1>
            </div>
          </div>

          <aside className="hero-media" aria-label="Media reserve space">
            <div
              className="media-slot large"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`${process.env.PUBLIC_URL}/images/personalphoto/personal.jpeg`}
                alt="Noor"
              />
            </div>
          </aside>
        </section>

        <section
          className="section projects-section"
          id="projects"
          aria-label="Projects"
        >
          <div className="section-heading">
            <h2>Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  <p className="label-line">Tech Stack</p>
                  <ul
                    className="stack-list"
                    aria-label={`${project.title} tech stack`}
                  >
                    {project.stack.map((item) => {
                      const Icon = item.Icon;

                      return (
                        <li key={`${project.title}-${item.label}`}>
                          <Icon className="tech-icon" aria-hidden="true" />
                          <span>{item.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div
                  className="project-media-grid"
                  aria-label={`${project.title} media placeholders`}
                >
                  {project.images ? (
                    project.images.map((imgSrc, idx) => (
                      <div className="media-slot image-slot" key={idx}>
                        <img
                          src={imgSrc}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="hover-zoom-img"
                        />
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="media-slot">
                        <strong>Screenshot Slot</strong>
                      </div>
                    </>
                  )}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section skills-section"
          id="skills"
          aria-label="Skills and tech stack"
        >
          <div className="section-heading">
            <h2>Skills / Tech Stack</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => {
                    const Icon = item.Icon;

                    return (
                      <li key={`${group.title}-${item.label}`}>
                        <Icon className="skill-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section resume-section"
          id="resume"
          aria-label="Resume"
        >
          <div className="section-heading">
            <h2>Resume / CV</h2>
          </div>

          <div className="resume-panel">
            <a
              className="btn btn-gold"
              href={cvPdf}
              download="CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>

        <section
          className="section contact-section"
          id="contact"
          aria-label="Contact"
        >
          <div className="section-heading">
            <p className="section-kicker">Raven Routes</p>
            <h2>Contact</h2>
          </div>

          {contact.map((group) => (
            <article key={group.title} className="skill-card">
              <ul>
                {group.items.map((item) => {
                  const Icon = item.Icon;

                  return (
                    <li
                      key={`${group.title}-${item.label}`}
                      className="skill-item"
                    >
                      <Icon className="skill-icon" aria-hidden="true" />

                      <span>{item.label}:</span>

                      {item.email && (
                        <a
                          className=".skill-item a"
                          href={`mailto:${item.email}`}
                        >
                          {item.email}
                        </a>
                      )}

                      {item.url && (
                        <a
                          className=".skill-item a"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.url}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer-note">
        <p>Forged by Nooraddeen Al-Haddad</p>
      </footer>
    </div>
  );
}

export default App;

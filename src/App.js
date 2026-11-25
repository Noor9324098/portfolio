import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdDownload, MdClose } from "react-icons/md";
import "./App.css";
import {
  profile,
  experience,
  education,
  projects,
  internshipWork,
  skills,
  languages,
} from "./data";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Every technology used by at least one project or internship task.
const allWork = [...projects, ...internshipWork];
const usedTech = new Set(allWork.flatMap((p) => p.stack));

const matches = (item, tech) => !tech || item.stack.includes(tech);

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Links({ links }) {
  return (
    <div className="card-links">
      {links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
          {l.label === "Source" && <FaGithub aria-hidden="true" />}
          {l.label}
        </a>
      ))}
    </div>
  );
}

// The creative touch: a small "how it works" pipeline on each card.
// A pulse travels along the steps while the card is hovered or focused.
function Flow({ steps, note }) {
  return (
    <figure className="flow" aria-label="How it works">
      <ol>
        {steps.map((s, i) => (
          <li key={s} style={{ "--i": i }}>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      {note && <figcaption>{note}</figcaption>}
    </figure>
  );
}

function Stack({ items, active, onPick }) {
  return (
    <ul className="chips" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>
          <button
            type="button"
            className={`chip${active === t ? " is-active" : ""}`}
            onClick={() => onPick(active === t ? null : t)}
            aria-pressed={active === t}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, index, tech, setTech, openImage }) {
  const dim = !matches(project, tech);
  return (
    <article className={`project${dim ? " is-dim" : ""}`}>
      <div className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="project-body">
        <p className="eyebrow">
          {project.kind}
          {project.period && <> · {project.period}</>}
        </p>
        <h3>
          {project.title}
          <span className="project-sub">{project.subtitle}</span>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <Flow steps={project.flow} note={project.flowNote} />
        {project.highlights && (
          <ul className="highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <Stack items={project.stack} active={tech} onPick={setTech} />
        <Links links={project.links} />
      </div>
      {project.images && (
        <div className="shots">
          {project.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="shot"
              onClick={() => openImage({ src, alt: `${project.title} screenshot ${i + 1}` })}
              aria-label={`Enlarge ${project.title} screenshot ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close" autoFocus>
        <MdClose />
      </button>
      <img src={image.src} alt={image.alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function App() {
  const [tech, setTech] = useState(null);
  const [image, setImage] = useState(null);

  const filterTech = useMemo(() => [...usedTech].sort((a, b) => a.localeCompare(b)), []);
  const shown = allWork.filter((p) => matches(p, tech)).length;

  const pickFromSkills = (t) => {
    setTech(t);
    document.getElementById("projects")?.scrollIntoView();
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <nav aria-label="Sections">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-small" href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-text">
            <h1>{profile.name.replace("-", "\u2011")}</h1>
            <p className="hero-role">{profile.study}</p>
            <p className="hero-meta">
              <MdLocationOn aria-hidden="true" /> {profile.location}
            </p>
            <div className="hero-actions">
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href={profile.cv} target="_blank" rel="noreferrer">
                <MdDownload aria-hidden="true" /> Download CV
              </a>
            </div>
          </div>
          <img className="hero-photo" src={profile.photo} alt={profile.name} />
        </section>

        <Section id="about" title="About">
          <p className="lead">{profile.statement}</p>
          <div className="two-col">
            <div>
              <h3 className="sub-title">Education</h3>
              {education.map((e) => (
                <div key={e.title} className="entry">
                  <p className="entry-head">
                    <strong>{e.title}</strong>
                    <span>{e.period}</span>
                  </p>
                  <p className="entry-org">
                    {e.org}, {e.place}
                  </p>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3 className="sub-title">Languages</h3>
              <dl className="langs">
                {languages.map((l) => (
                  <div key={l.name}>
                    <dt>{l.name}</dt>
                    <dd>{l.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <div key={e.title} className="entry">
              <p className="entry-head">
                <strong>{e.title}</strong>
                <span>{e.period}</span>
              </p>
              <p className="entry-org">
                {e.org}, {e.place}
              </p>
              <p>{e.summary}</p>
              <p className="entry-more">
                The four tasks are listed under <a href="#internship">Internship work</a>.
              </p>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="filter" role="group" aria-label="Filter projects by technology">
            <span className="filter-label">Filter by technology</span>
            <div className="chips">
              <button
                type="button"
                className={`chip${!tech ? " is-active" : ""}`}
                onClick={() => setTech(null)}
                aria-pressed={!tech}
              >
                All
              </button>
              {filterTech.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`chip${tech === t ? " is-active" : ""}`}
                  onClick={() => setTech(tech === t ? null : t)}
                  aria-pressed={tech === t}
                >
                  {t}
                </button>
              ))}
            </div>
            <span className="filter-count" aria-live="polite">
              {tech ? `${shown} of ${allWork.length} use ${tech}` : `${allWork.length} pieces of work`}
            </span>
          </div>

          <div className="projects">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} tech={tech} setTech={setTech} openImage={setImage} />
            ))}
          </div>

          <h3 id="internship" className="sub-title internship-title">
            Internship work · Lime Light Renhold AS
          </h3>
          <div className="mini-grid">
            {internshipWork.map((w) => (
              <article key={w.title} className={`mini${matches(w, tech) ? "" : " is-dim"}`}>
                <h4>{w.title}</h4>
                <p>{w.summary}</p>
                <Stack items={w.stack} active={tech} onPick={setTech} />
                <Links links={w.links} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <p className="hint">Highlighted technologies appear in the projects above. Select one to see where.</p>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skill-group">
                <h3 className="sub-title">{g.group}</h3>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s}>
                      {usedTech.has(s) ? (
                        <button type="button" className="chip chip-linked" onClick={() => pickFromSkills(s)}>
                          {s}
                        </button>
                      ) : (
                        <span className="chip chip-static">{s}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="contact">
            <li>
              <a href={`mailto:${profile.email}`}>
                <MdEmail aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> github.com/Noor9324098
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" /> linkedin.com/in/nooraddeeen
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>

      <Lightbox image={image} onClose={() => setImage(null)} />
    </>
  );
}

export default App;

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GitFork as Github,
  Code2,
  Workflow,
  Monitor,
  ScanEye,
  Rss,
  Boxes,
  Braces,
} from 'lucide-react';
const github = 'https://github.com/Hacker-pro-discord';
const contra = 'https://contra.com/justus_dieckman_a7zjair6';
const projects = [
  {
    id: 'jinx',
    number: '01',
    title: 'Jinx Cleaner',
    category: 'WINDOWS DESKTOP · SYSTEM UTILITIES',
    description:
      'A focused workspace for Windows malware triage and cleanup. Inspect processes, startup persistence, scheduled tasks, and suspicious files in one desktop interface.',
    problem: 'Brings scattered Windows inspection tasks into one place.',
    tech: ['Python', 'Tkinter', 'psutil', 'Windows'],
    repo: 'Jinx-Cleaner',
    details:
      'Includes SHA-256 hashing, file quarantine, Microsoft Defender scan controls, and an activity log. Heuristic scores support manual investigation; this is not a replacement for antivirus software.',
  },
  {
    id: 'analyzer',
    number: '02',
    title: 'AI Image Analyzer',
    category: 'LOCAL AI · DESKTOP WORKFLOW',
    description:
      'Image critique, image-to-prompt generation, batch analysis, and prompt editing in a Windows app connected to local Ollama vision models.',
    problem:
      'Keeps image and prompt work together, with inference on your machine.',
    tech: ['Python', 'CustomTkinter', 'Ollama', 'Pillow'],
    repo: 'AI-Image-Analyzer-and-Image-to-Prompt',
    details:
      'Requires Ollama and a local vision model. Supports PNG, JPEG, and WebP, plus a style reference for prompt edits. Critiques are model-generated suggestions, not objective quality measurements or a promise of identical recreation.',
  },
  {
    id: 'news',
    number: '03',
    title: 'AI News Hub',
    category: 'INFORMATION TOOLS · RSS',
    description:
      'A Windows dashboard that gathers AI lab, open-source, and industry RSS feeds. Search stories, filter categories, save bookmarks, and export an HTML digest.',
    problem:
      'Makes a scattered set of AI news feeds easier to browse and revisit.',
    tech: ['Python', 'Tkinter', 'feedparser'],
    repo: 'AI-News-Hub',
    details:
      'Includes automatic refresh, feed-provided story summaries, opening original articles, and copying links. Feed availability depends on the original publishers.',
  },
  {
    id: 'stl',
    number: '04',
    title: 'STL Miniature Scraper',
    category: 'DISCOVERY · AUTOMATION',
    description:
      'A desktop and command-line utility for discovering miniature model pages. Aggregates public search results with source filters and links back to creators.',
    problem:
      'Helps find model pages across sources without losing their original links.',
    tech: ['Python', 'CustomTkinter', 'Beautiful Soup'],
    repo: 'STL_Miniature_Scraper',
    details:
      'The current source uses ModelRover public search by default, with optional providers and browser-search fallback. Saved links and attempted file downloads are counted separately. Prices, licensing, availability, and printability must be checked on the creator’s page.',
  },
];
function ProjectVisual({ id }: { id: string }) {
  if (id === 'jinx')
    return (
      <div className="project-visual screenshot">
        <img
          src="/images/jinx-cleaner.webp"
          alt="Jinx Cleaner desktop interface showing startup persistence inspection and its fast-action sidebar"
          width="1440"
          height="764"
          loading="lazy"
        />
        <span className="image-label">FROM THE PROJECT REPOSITORY</span>
      </div>
    );
  if (id === 'analyzer')
    return (
      <div className="project-visual local-workflow">
        <div className="visual-caption">
          <ScanEye size={18} /> ON-DEVICE WORKFLOW
        </div>
        <div className="workflow-steps">
          <span>Image</span>
          <ArrowRight aria-hidden="true" />
          <span className="model-node">
            Local
            <br />
            <strong>Ollama</strong>
          </span>
          <ArrowRight aria-hidden="true" />
          <span>
            Critique
            <br />& prompts
          </span>
        </div>
        <div className="visual-bottom">
          <span>Single + batch analysis</span>
          <span>Prompt editing</span>
        </div>
      </div>
    );
  return (
    <div className={`project-visual compact-visual ${id}`}>
      <div className="visual-symbol">
        {id === 'news' ? (
          <Rss size={40} strokeWidth={1.3} />
        ) : (
          <Boxes size={40} strokeWidth={1.3} />
        )}
      </div>
      <div>
        <span className="visual-caption">
          {id === 'news' ? 'FEEDS → FOCUS' : 'SEARCH → DISCOVER'}
        </span>
        <p>
          {id === 'news'
            ? 'Collect. Filter. Revisit.'
            : 'Find the model. Keep the source.'}
        </p>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header id="top" className="site-header">
        <a className="brand" href="#top" aria-label="Justus Dieckman home">
          <span className="site-mark" aria-hidden="true">
            j<span>d</span>.
          </span>
          <span>JUSTUS DIECKMAN</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT DEVELOPER
            </p>
            <h1 id="hero-title">
              Justus
              <br />
              Dieckman<span className="cyan">.</span>
            </h1>
            <p className="role">Python / JavaScript / TypeScript</p>
            <h2>
              Focused tools.
              <br />
              <span>Working software.</span>
            </h2>
            <p className="hero-description">
              I build desktop tools, automation, and AI workflows that solve
              specific problems. Have a script, bug fix, or small feature in
              mind? Let’s make it work.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View projects <ArrowDown size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Work with me <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="profile-links">
              <a href={github}>
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href={contra}>
                Contra <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-core">
              <Braces size={68} strokeWidth={1} />
            </div>
            <span className="orbit-note note-one">DESKTOP TOOLS</span>
            <span className="orbit-note note-two">LOCAL AI</span>
            <span className="orbit-note note-three">AUTOMATION</span>
            <span className="orbit-coordinate">
              IDEA → CODE → SOMETHING USEFUL
            </span>
          </div>
        </section>
        <div className="skill-strip">
          <div className="section-wrap">
            <span>BUILT WITH INTENT</span>
            <p>
              Python <i /> JavaScript <i /> TypeScript <i /> Node.js <i /> Local
              AI
            </p>
          </div>
        </div>
        <section
          id="work"
          className="section-wrap section-block"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">The work speaks.</h2>
            </div>
            <p>
              Real projects. Public source.
              <br />
              Take a look under the hood.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className={`project-card ${p.id}`} key={p.id}>
                <ProjectVisual id={p.id} />
                <div className="project-body">
                  <p className="eyebrow project-category">{p.category}</p>
                  <div className="project-title">
                    <h3>{p.title}</h3>
                    <span>{p.number}</span>
                  </div>
                  <p className="project-description">{p.description}</p>
                  <p className="project-problem">{p.problem}</p>
                  <ul className="tags" aria-label={`${p.title} technologies`}>
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <a
                      href={`${github}/${p.repo}`}
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      View source <ArrowUpRight size={17} />
                    </a>
                    <details>
                      <summary>Project notes</summary>
                      <p>{p.details}</p>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a
            className="text-link all-projects"
            href={`${github}?tab=repositories`}
          >
            Explore my GitHub <ArrowUpRight size={17} />
          </a>
        </section>
        <section id="services" className="services-section">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / WHAT I BUILD</p>
                <h2>
                  Small scope.
                  <br />
                  Clear purpose.
                </h2>
              </div>
              <p>
                A useful next step for your project,
                <br />
                with a concrete finish line.
              </p>
            </div>
            <div className="services-grid">
              <article>
                <Code2 />
                <h3>Scripts, fixes & features</h3>
                <p>
                  Python scripts, Python / JS / TS bug fixes, and focused
                  JavaScript or TypeScript features for an existing project.
                </p>
                <span>Make the next piece work.</span>
              </article>
              <article>
                <Monitor />
                <h3>Desktop & automation</h3>
                <p>
                  Purpose-built desktop utilities and automation workflows that
                  turn repetitive steps into something easier to use.
                </p>
                <span>Less repetition. More useful tools.</span>
              </article>
              <article>
                <Workflow />
                <h3>AI tools & technical reviews</h3>
                <p>
                  Local AI workflows, structured agent tooling, and code or MVP
                  audits with practical findings and clear next steps.
                </p>
                <span>Connect the idea to an implementation.</span>
              </article>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="section-wrap section-block about-section"
        >
          <div>
            <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              Practical by choice.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Justus, an independent developer who likes building focused
              software that solves a specific problem. I’d rather make a useful
              tool than turn every idea into a giant platform.
            </p>
            <p>
              My work spans Python desktop applications, JavaScript and
              TypeScript, automation, local AI workflows, and experimental agent
              systems. I enjoy connecting the pieces, working through the
              awkward parts, and getting a project into a usable shape.
            </p>
            <a className="text-link" href={github}>
              See what I’m building <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section
          className="section-wrap systems-section"
          aria-labelledby="systems-title"
        >
          <div className="systems-icon" aria-hidden="true">
            <Workflow size={30} />
          </div>
          <div>
            <p className="eyebrow">ALSO EXPLORING / AI & SYSTEMS</p>
            <h2 id="systems-title">Making AI part of a useful workflow.</h2>
            <p>
              Alongside application development, I work on prompting, structured
              agent workflows, and AI tooling: defining tasks, shaping outputs,
              and connecting steps people can actually use.
            </p>
            <p className="systems-footnote">
              An evolving part of my practice. Public projects will be added as
              they’re ready.
            </p>
          </div>
        </section>
        <section id="contact" className="section-wrap contact-section">
          <p className="eyebrow">
            <span className="status-dot" /> LET’S BUILD SOMETHING USEFUL
          </p>
          <h2>
            A specific problem?
            <br />
            <span className="cyan">That’s a good start.</span>
          </h2>
          <p>
            Tell me what you’re working on, what needs to change,
            <br className="desktop-break" /> and what a finished result should
            look like.
          </p>
          <a className="button primary" href={contra}>
            Start a project on Contra <ArrowUpRight size={19} />
          </a>
          <div className="contact-links">
            <a href={github}>
              <Github size={17} /> Find me on GitHub <ArrowUpRight size={14} />
            </a>
            <a href={contra}>
              View my Contra profile <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand" href="#top">
          <span className="site-mark" aria-hidden="true">
            jd.
          </span>
          <span>Justus Dieckman</span>
        </a>
        <p>Focused tools. Working software.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

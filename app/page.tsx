import { SiteHeader, SiteFooter } from '../components/site-chrome';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  GitFork as Github,
  Code2,
  Workflow,
  Monitor,
  ScanEye,
  Boxes,
} from 'lucide-react';
const github = 'https://github.com/Hacker-pro-discord';
const contra = 'https://contra.com/justus_dieckman_a7ziair6';
const email = 'mailto:dieckmanjustus@gmail.com';
const projects = [
  {
    id: 'jinx',
    number: '01',
    title: 'Jinx Cleaner',
    category: 'WINDOWS DESKTOP · SYSTEM UTILITIES',
    description:
      'A Windows inspection and cleanup workspace with recoverable quarantine. Review processes, registry startup entries, scheduled tasks, and files before taking action.',
    problem: 'Brings scattered Windows inspection tasks into one place.',
    tech: ['Python', 'Tkinter', 'psutil', 'Windows'],
    repo: 'Jinx-Cleaner',
    details:
      'Version 0.2 adds persistent UUID quarantine, checksum-verified restore without overwriting files, process identity checks before termination, and background scans. SHA-256 and Authenticode support investigation. Heuristic indicators are not malware verdicts; coverage is limited to the documented registry keys and accessible tasks.',
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
      'A futuristic Windows intelligence desk for AI research, open-source releases, and industry news. Browse a newest-first stream, inspect source health, and read article briefs side by side.',
    problem:
      'Makes a scattered set of AI news feeds easier to browse and revisit.',
    tech: ['Python', 'Tkinter', 'feedparser'],
    repo: 'AI-News-Hub',
    details:
      'Version 0.2 combines and deduplicates all feeds before limiting results, keeps bookmarks in persistent user storage, and isolates source failures. Search, source/channel filters, saved articles, validated original links, and HTML digest export remain available. Summaries come from publishers; there is no offline feed cache.',
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
          src="/images/jinx-cleaner-0.2.0.png"
          alt="Jinx Cleaner 0.2.0 running on Windows, showing the Files panel with quarantine and restore controls"
          width="1442"
          height="952"
          loading="lazy"
        />
        <span className="image-label">JINX CLEANER · 0.2.0</span>
      </div>
    );
  if (id === 'news')
    return (
      <div className="project-visual screenshot">
        <img
          src="/images/ai-news-hub-0.2.0.png"
          alt="AI News Hub 0.2.0 running on Windows with five online sources, chronological headlines, and an article brief"
          width="1442"
          height="932"
          loading="lazy"
        />
        <span className="image-label">AI NEWS HUB · 0.2.0</span>
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
        <Boxes size={40} strokeWidth={1.3} />
      </div>
      <div>
        <span className="visual-caption">SEARCH → DISCOVER</span>
        <p>Find the model. Keep the source.</p>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <picture className="vortex-art">
            <source
              media="(max-width: 700px)"
              srcSet="/images/vortex-mobile.webp"
            />
            <img
              src="/images/vortex.webp"
              alt="Original illustration of a blue telephone box flying through a swirling blue time vortex"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </picture>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DEVELOPER. TINKERER. EXPLORER.
            </p>
            <h1 id="hero-title">
              Justus
              <br />
              Dieckman<span className="cyan">.</span>
            </h1>
            <p className="role">Python / JavaScript / TypeScript</p>
            <h2>
              Code, curiosity,
              <br />
              <span>& a little time travel.</span>
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
        </section>
        <div className="skill-strip">
          <div className="section-wrap">
            <span>MY TOOLKIT</span>
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
              <p className="eyebrow">01 / THE PROJECT ARCHIVE</p>
              <h2 id="work-title">A few things I’ve built.</h2>
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
                  Something broken?
                  <br />
                  Something to build?
                </h2>
              </div>
              <p>
                Scripts, fixes, and the next little feature.
                <br />
                Here’s where I can help.
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
              There’s usually
              <br />
              another idea.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Justus, an independent developer who likes building focused
              software that solves a specific problem. I’d rather make a useful
              tool than turn every idea into a giant platform.
            </p>
            <p>
              And yes, I’m a Doctor Who fan. The blue box and time vortex are a
              bit of me; the projects below the surface are real.
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
            <h2 id="systems-title">A few experiments in AI.</h2>
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
        <section
          className="section-wrap animation-teaser"
          aria-labelledby="animation-teaser-title"
        >
          <a
            className="animation-teaser-image"
            href="/3d-animation"
            aria-label="Explore the aircraft animation case study"
          >
            <img
              src="/images/animation/aircraft-studio.webp"
              alt="Two locally built aircraft models with canopy, intake, wing and airframe detail under studio lighting"
              width="1440"
              height="960"
              loading="lazy"
            />
          </a>
          <div className="animation-teaser-copy">
            <p className="eyebrow">ANOTHER SIDE OF THE WORK / 3D</p>
            <h2 id="animation-teaser-title">
              3D & Animation<span className="cyan">.</span>
            </h2>
            <p>
              Cinematic scenes, 3D assets, reusable character systems, and
              AI-assisted Blender/Unreal production.
            </p>
            <p>
              The same approach behind my software and automation: build the
              pieces, connect the workflow, and iterate toward a finished
              result.
            </p>
            <a className="text-link" href="/3d-animation">
              Explore 3D & Animation <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section id="contact" className="section-wrap contact-section">
          <p className="eyebrow">
            <span className="status-dot" /> LET’S BUILD SOMETHING USEFUL
          </p>
          <h2>
            Got an idea?
            <br />
            <span>Let’s see where it goes.</span>
          </h2>
          <p>
            Tell me what you’re working on, what needs to change,
            <br className="desktop-break" /> and what a finished result should
            look like.
          </p>
          <div className="contact-actions">
            <a className="button primary" href={email}>
              Email me <ArrowUpRight size={19} />
            </a>
            <a className="button secondary" href={contra}>
              Work with me on Contra <ArrowUpRight size={19} />
            </a>
          </div>
          <a className="email-address" href={email}>
            dieckmanjustus@gmail.com
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
      <SiteFooter />
    </>
  );
}

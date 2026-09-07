import { ArrowUpRight } from 'lucide-react';
export function SiteHeader({ animation = false }: { animation?: boolean }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header id="top" className="site-header">
        <a className="brand" href="/" aria-label="Justus Dieckman home">
          <span className="site-mark" aria-hidden="true">
            j<span>d</span>.
          </span>
          <span>JUSTUS DIECKMAN</span>
        </a>
        <nav aria-label="Main navigation" className="portfolio-nav">
          <a href="/#work">Work</a>
          <a
            href="/3d-animation"
            className="animation-nav-link"
            aria-current={animation ? 'page' : undefined}
          >
            3D & Animation
          </a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a className="nav-contact" href="/#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand" href="/">
        <span className="site-mark" aria-hidden="true">
          jd.
        </span>
        <span>Justus Dieckman</span>
      </a>
      <p>Built with code & curiosity.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

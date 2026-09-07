import { SiteHeader, SiteFooter } from '../components/site-chrome';
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="section-wrap section-block not-found">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>This page got away.</h1>
        <p>Head back to the portfolio or take a look at the animation work.</p>
        <div className="hero-actions">
          <a className="button primary" href="/">
            Back to the portfolio
          </a>
          <a className="button secondary" href="/3d-animation">
            3D & Animation
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

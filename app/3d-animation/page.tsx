import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight, ArrowLeft, Workflow } from 'lucide-react';
import { SiteHeader, SiteFooter } from '../../components/site-chrome';
import './animation.css';

const title = '3D & Animation — Justus Dieckman | Blue Box Code';
const description =
  'Original aircraft assets, Blender cinematic animation, Unreal scene assembly, and reusable character rigging. Explore Justus Dieckman’s AI-assisted production workflow.';
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/3d-animation' },
  openGraph: {
    title,
    description,
    url: 'https://blue-box-code.netlify.app/3d-animation',
    type: 'website',
    siteName: 'Blue Box Code',
    images: [
      {
        url: '/images/animation/aircraft-studio.webp',
        width: 1440,
        height: 960,
        alt: 'Original aircraft models rendered in Blender with studio lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/animation/aircraft-studio.webp'],
  },
};

const steps = [
  [
    'Plan',
    'Define the shot, action, assets, camera needs, and delivery format. Make the sequence readable before adding detail.',
  ],
  [
    'Build / Prepare Assets',
    'Construct or clean the geometry, set scale and materials, and prepare the controls or rig the shot needs.',
  ],
  [
    'Assemble',
    'Bring the assets into a scene. Block the environment, place lights, and establish camera positions in Blender or Unreal.',
  ],
  [
    'Animate',
    'Shape vehicle paths, character poses, camera motion, and timing. Keep the motion editable so it can respond to review.',
  ],
  [
    'Review & Iterate',
    'Render test frames and previews, inspect composition and motion, then adjust the assets, cameras, or action and repeat.',
  ],
  [
    'Polish & Deliver',
    'Refine lighting and effects, finish the edit, and export for the intended screen. Include audio only when cleared for the delivery.',
  ],
];

export default function AnimationPage() {
  return (
    <>
      <SiteHeader animation />
      <main id="main" className="animation-page">
        <section
          className="section-wrap animation-intro"
          aria-labelledby="animation-title"
        >
          <a className="text-link back-link" href="/">
            <ArrowLeft size={16} /> Back to the portfolio
          </a>
          <div className="animation-intro-grid">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> TECHNICAL WORK. CREATIVE MOTION.
              </p>
              <h1 id="animation-title">
                3D &<br />
                Animation<span className="cyan">.</span>
              </h1>
              <p className="animation-lead">
                From individual assets
                <br />
                to a scene in motion.
              </p>
              <p className="animation-description">
                3D asset creation, character animation experiments, cinematic
                scene production, and AI-assisted Blender/Unreal workflows.
              </p>
              <a className="button primary" href="#aircraft">
                Inside the aircraft project <ArrowDown size={18} />
              </a>
            </div>
            <figure className="animation-hero-figure">
              <img
                src="/images/animation/aircraft-studio.webp"
                alt="A camouflaged twin-engine aircraft and a silver swept-wing aircraft, showing modeled canopy, intake, wing and tail detail"
                width="1440"
                height="960"
                fetchPriority="high"
              />
              <figcaption>
                <span>BLENDER / ORIGINAL GEOMETRY</span> Aircraft asset study
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="skill-strip">
          <div className="section-wrap">
            <span>ONE CONNECTED PRACTICE</span>
            <p>
              Software Development <i /> AI / Automation Systems <i /> 3D /
              Animation Production
            </p>
          </div>
        </div>

        <article
          id="aircraft"
          className="section-wrap section-block aircraft-study"
          aria-labelledby="aircraft-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / AIRCRAFT CASE STUDY</p>
              <h2 id="aircraft-title">
                Build it. Stage it.
                <br />
                Put it in motion.
              </h2>
            </div>
            <p>
              A personal aerial-action production.
              <br />
              Original geometry. Editable scenes.
            </p>
          </div>
          <div className="case-overview">
            <p>
              The challenge was to make a pursuit, firing pass, and breakaway
              read as a continuous sequence. I developed the project through
              procedural aircraft construction, scene staging, camera and motion
              revisions, and an edited vertical cinematic.
            </p>
            <dl className="case-facts">
              <div>
                <dt>My contribution</dt>
                <dd>
                  Production direction, asset and scene iteration, and
                  orchestration of agent-assisted scripts and renders.
                </dd>
              </div>
              <div>
                <dt>The deliverable</dt>
                <dd>
                  A 48-second edited cinematic study, backed by editable Blender
                  scenes and an Unreal proof stage.
                </dd>
              </div>
              <div>
                <dt>The approach</dt>
                <dd>
                  Conventional 3D geometry, materials, lights, and keyframes,
                  with AI assistance for technical implementation and repetitive
                  steps.
                </dd>
              </div>
            </dl>
          </div>

          <div className="case-stage asset-stage">
            <figure className="case-image">
              <img
                src="/images/animation/aircraft-clay.webp"
                alt="Orthographic clay render of the two actual aircraft models, showing their different wing shapes, proportions, engines and cockpit layouts"
                width="1440"
                height="960"
                loading="lazy"
              />
              <figcaption>
                01 / Asset preparation — orthographic clay view of the same
                models.
              </figcaption>
            </figure>
            <div className="stage-copy">
              <p className="eyebrow">THE ASSETS</p>
              <h3>Geometry with a purpose.</h3>
              <p>
                Locally constructed aircraft progressed from simple proxies to
                more detailed airframes. Separate canopy, intake, exhaust, wing,
                and tail geometry gives each silhouette a distinct read.
              </p>
              <p>
                Blender scripts build the meshes and procedural materials.
                Consistent scale and orientation support FBX transfer into
                Unreal; the studio and clay views here come from those actual
                models.
              </p>
              <ul className="tags" aria-label="Aircraft asset capabilities">
                <li>Procedural modeling</li>
                <li>Materials & lighting</li>
                <li>FBX preparation</li>
              </ul>
            </div>
          </div>

          <div className="case-stage cinematic-stage">
            <div className="stage-copy">
              <p className="eyebrow">THE SHOT</p>
              <h3>Make the action readable.</h3>
              <p>
                Three cameras cover the larger sequence: the pursuit, a cockpit
                view, and the exterior action. Keyed aircraft motion, contrails,
                tracers, impact effects, and damage smoke carry the story
                through a staged landscape.
              </p>
              <p>
                The silent excerpt follows the firing pass and breakaway. It is
                rendered from the existing Blender scene, with insignia removed
                for this presentation. The original edit uses Kdenlive and
                FFmpeg for assembly and finishing.
              </p>
              <p className="case-note">
                This is a stylized cinematic study. Blender produced the
                picture; Unreal was used for a separate real-time proof, not the
                finished cut.
              </p>
            </div>
            <figure className="cinematic-player">
              <video
                controls
                muted
                playsInline
                preload="none"
                poster="/images/animation/action-poster.webp"
                width="540"
                height="960"
                aria-label="Silent aircraft action excerpt"
                aria-describedby="action-caption"
              >
                <source
                  src="/media/animation/aircraft-action.mp4"
                  type="video/mp4"
                />
                <a href="/media/animation/aircraft-action.mp4">
                  Watch the silent aircraft action excerpt
                </a>
              </video>
              <figcaption id="action-caption">
                02 / Cinematic output — 12-second silent excerpt. Aircraft
                converge, a firing pass leaves a smoke trail, and the damaged
                aircraft breaks away. No audio track.
              </figcaption>
            </figure>
          </div>

          <section className="pipeline-panel" aria-labelledby="pipeline-title">
            <p className="eyebrow">HOW THE TOOLS CONNECT</p>
            <h3 id="pipeline-title">An editable production pipeline.</h3>
            <ol className="tool-flow">
              <li>
                <strong>Plan / Assets</strong>
                <span>Shot structure & original models</span>
              </li>
              <li>
                <strong>Blender</strong>
                <span>Geometry, materials & scene</span>
              </li>
              <li>
                <strong>Animation / Camera</strong>
                <span>Paths, timing, coverage & effects</span>
              </li>
              <li>
                <strong>Edit / Export</strong>
                <span>Kdenlive timeline & FFmpeg finishing</span>
              </li>
              <li>
                <strong>Cinematic</strong>
                <span>Vertical review cut</span>
              </li>
            </ol>
            <div className="unreal-branch">
              <span aria-hidden="true">↳</span>
              <p>
                <strong>Blender → FBX → Unreal Engine</strong>
                <br />A parallel real-time proof: imported aircraft,
                physical-scale checks, scene assembly, and an eight-second
                Sequencer blockout with aircraft and camera transform tracks.
              </p>
            </div>
          </section>
        </article>

        <section
          className="character-section"
          aria-labelledby="character-title"
        >
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / REUSABLE CHARACTER SYSTEMS</p>
                <h2 id="character-title">
                  Keep the framework.
                  <br />
                  Change the character.
                </h2>
              </div>
              <p>
                Technical R&D with reusable parts.
                <br />
                An evolving part of the practice.
              </p>
            </div>
            <div className="character-grid">
              <div className="character-copy">
                <p>
                  Through character-production experiments, I developed a
                  reusable humanoid framework around MPFB and Rigify. The useful
                  foundation is the skeleton, animation controls, and binding
                  process that connects a mesh to the rig.
                </p>
                <p>
                  The framework combines a generated Rigify rig, IK/FK
                  properties, keyed hand controls, and mesh components with
                  transferred deformation weights. The source rig and animation
                  stay separate from the presentation meshes, providing a
                  starting point for character replacement and motion reuse.
                </p>
                <p className="case-note">
                  An original character demonstration is still in preparation.
                  The focus here is the reusable rig, binding process, and
                  editable motion that can support future character work.
                </p>
              </div>
              <dl className="framework-list">
                <div>
                  <dt>Skeleton & rig</dt>
                  <dd>
                    MPFB human base and generated Rigify deformation skeleton.
                  </dd>
                </div>
                <div>
                  <dt>Animation controls</dt>
                  <dd>
                    IK constraints, IK/FK switches, and keyed pose controls.
                  </dd>
                </div>
                <div>
                  <dt>Reusable binding</dt>
                  <dd>
                    Armature modifiers and transferred skin weights for separate
                    mesh components.
                  </dd>
                </div>
                <div>
                  <dt>Editable motion</dt>
                  <dd>
                    Rig-level actions retained for revision. Baked cloth caches
                    must be rebuilt when the action changes.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className="section-wrap section-block production-section"
          aria-labelledby="production-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW I APPROACH PRODUCTION</p>
              <h2 id="production-title">
                A shot is a series
                <br />
                of working decisions.
              </h2>
            </div>
            <p>
              Plan, build, test, refine.
              <br />
              The same habit behind my software.
            </p>
          </div>
          <ol className="production-steps">
            {steps.map(([name, text], i) => (
              <li key={name}>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="ai-production-note">
            <Workflow size={28} aria-hidden="true" />
            <div>
              <h3>Where AI assists</h3>
              <p>
                Agents helped implement procedural modeling, scene setup,
                keyframing, rendering, and export scripts. The results still
                needed shot planning, visual review, and repeated corrections.
                Blender and Unreal handle the 3D work; the workflow keeps the
                assets and decisions editable.
              </p>
            </div>
          </aside>
        </section>

        <section
          className="section-wrap animation-contact"
          aria-labelledby="animation-contact-title"
        >
          <p className="eyebrow">SOFTWARE / SYSTEMS / SCENES</p>
          <h2 id="animation-contact-title">Got a scene in mind?</h2>
          <p>
            Tell me the action, the assets you have, and what the finished
            result needs to do.
          </p>
          <div className="contact-actions">
            <a
              className="button primary"
              href="mailto:dieckmanjustus@gmail.com"
            >
              Talk through the project <ArrowUpRight size={18} />
            </a>
            <a
              className="button secondary"
              href="https://contra.com/justus_dieckman_a7ziair6"
            >
              Work with me on Contra <ArrowUpRight size={18} />
            </a>
          </div>
          <a className="text-link" href="/#work">
            Explore my software work <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

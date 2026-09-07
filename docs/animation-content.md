# Maintaining the animation showcase

## Evidence reviewed, September 7, 2026

The local aircraft construction scripts, saved Blender asset library, revised cinematic scene, Unreal project and Sequencer scripts, Kdenlive timeline, FFmpeg finishing script, original 48-second delivery, and review frames were inspected. Source paths stay local; this document does not link to private production repositories.

| Public statement | Supporting evidence | Boundary |
| --- | --- | --- |
| Original aircraft construction | Procedural mesh construction script and reopened Blender library; separate canopy, engine, wing, and tail geometry | Reference-based aircraft models, not invented aircraft designs or a claim of hand sculpting |
| Materials and lighting | Procedural paint/metal shaders, micro-bevels, studio lights, cinematic sun and fill | The studio images are new presentation renders from the actual models |
| Vehicle/camera animation | Saved 1–1350 frame Blender scene at 30 fps, three cameras, transform actions, contrails, tracers, impact and smoke | Stylized cinematic study; no photorealism claim |
| Unreal workflow | Saved project, imported mesh assets, proof map, and eight-second Sequencer aircraft/camera transform tracks | A parallel real-time proof; the delivered cinematic was rendered in Blender |
| Editing and export | Kdenlive timeline, FFmpeg finishing recipe, 1080 × 1920 48-second original master | The portfolio uses a newly rendered 12-second silent excerpt |
| Agent-assisted production | Modeling, setup, keyframing, render and export scripts used throughout the local workflow | Direction and iterative review remain necessary; do not imply manual authorship of every operation |
| Humanoid rig and controls | Headless inspection found a generated 930-bone Rigify rig, 181 deform bones, eight IK constraints, four IK/FK properties, and an assigned action | Counts are technical audit details, not portfolio performance metrics |
| Mesh binding and editable motion | Armature modifiers, transferred deform weights, keyframed rig controls and separately stored source geometry | Existing cloth caches depend on the action and need rebaking after changes |

Character replacement and animation reuse are supported as architectural starting points, not a verified cross-character retargeting product. No completed character export to Unreal or reusable viseme system was found. Keep those out of service claims until demonstrated. An original character demonstration remains open; no prototype character media is included.

## Public asset inventory

| Asset | Preparation |
| --- | --- |
| `public/images/animation/aircraft-studio.webp` | Re-rendered the saved aircraft model library in Blender, removed six insignia mesh objects, retained geometry/materials, adjusted studio illumination; 1440 × 960 WebP |
| `public/images/animation/aircraft-clay.webp` | Orthographic Blender Workbench clay view of the same insignia-free models; 1440 × 960 WebP; this is not labeled as a wireframe |
| `public/images/animation/action-poster.webp` | Frame 1155 from the sanitized cinematic presentation render; 540 × 960 WebP |
| `public/media/animation/aircraft-action.mp4` | Frames 991–1350 of the saved cinematic scene, rendered at 540 × 960 / 30 fps after removing insignia; H.264, CRF 23, yuv420p, fast-start; 12 seconds, no audio stream or source metadata |

The geometry and procedural scene are locally created. No downloaded model, texture, music, SFX, franchise character, or external reference image is introduced by this update. The existing homepage artwork and copy are deliberately preserved at the owner's explicit direction. Do not replace or restyle them as part of an animation content update.

All reviewed public media, including the retained homepage assets, is hash-pinned in `public-assets.json`. Never copy a whole production output folder into the site. No `.blend`, FBX, engine assets, project archives, raw audit logs, or character source files belong in `public/`.

## Add or update a case study

1. Inspect the actual model, scene, animation and delivery. Record what exists, who contributed, and which tools actually produced it. Keep local paths and private repository identifiers out of published notes.
2. Select a small set of meaningful views. Render from original or cleared geometry. Review every image and the complete video for names, likenesses, logos, personal data and embedded UI paths. Never use an unapproved prototype as a placeholder.
3. Encode images to WebP with dimensions and descriptive alt text. Keep short video previews H.264/yuv420p with fast-start. Use `-an -map_metadata -1` unless all audio and metadata are explicitly cleared; `muted` alone does not remove an audio stream.
4. Put approved media under the two animation folders above. Compute SHA-256 hashes and add only the reviewed assets to `docs/public-assets.json`. Unlisted or changed media fails the build checks.
5. Edit `app/3d-animation/page.tsx` for a section within the existing showcase. For a substantial new story, add an actual `app/<route>/page.tsx`, its own title/description/canonical/Open Graph metadata, sitemap entry, navigation and static route checks. Use `SiteHeader` and `SiteFooter`.
6. Extend existing CSS classes or add scoped page CSS. Preserve `app/globals.css` and the current homepage composition; the teaser should remain brief.
7. Run lint, typecheck, build and tests. Run `npm start`, visit every route directly and through navigation, and check desktop/mobile, keyboard focus, links, video playback/seeking, and unknown-route 404s. Capture review screenshots outside the public build.
8. Deploy only `dist/client/` with the existing Netlify workflow after review. Verify the deployed `/`, `/3d-animation`, `/3d-animation/`, media URL, and a missing route. The former Sites host is not part of this publication flow.

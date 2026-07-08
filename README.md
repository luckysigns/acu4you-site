# Five Element Acupuncture — Site Redesign

A modern rebuild of acu4you.net that keeps the cherry-blossom tree menu and the ancient
scroll aesthetic, rebuilt as a fast, responsive, accessible static site. No frameworks,
no build step — plain HTML/CSS/JS you can host anywhere.

## Pages

| File | Replaces | Notes |
|---|---|---|
| `index.html` | index.php | Home — philosophy, element preview, CTAs |
| `acupuncture.html` | acupuncture.php | How it works, conditions list, needle FAQ |
| `treatments.html` | treatments.php | Visits, insurance, patient forms |
| `about.html` | about.php | The old About page duplicated the home page — this one is a proper About (see TODO below) |
| `elements.html` | elements.php | The five elements, card layout |
| `questionnaire.html` | questionnaire.php | Now a working interactive quiz with scoring |
| `testimonials.html` | testimonials.php | All testimonials, lightly copy-edited |
| `contact.html` | contact.php | Phone, address, map, message form |
| `links.html` | links.php | Friends & resources |
| `newsletter.html` | newsletter_subscription.php | Subscription request form |

## What was improved

- Cherry blossom tree menu redrawn as crisp SVG; links literally hang from the branch,
  with a sticky compact nav that appears on scroll and a hamburger menu on mobile
- Fully responsive (the old site was fixed-width images), accessible (skip link,
  keyboard focus states, aria-current, reduced-motion support), and SEO-friendly
- Typos fixed throughout (arthritis, carpal tunnel, eczema, HIPAA, etc.)
- "Find Your Element" is now a real quiz that scores answers and shows the result
- Click-to-call phone number everywhere, embedded map, clear CTAs

## Before launch — handoff checklist

1. **Contact & newsletter forms are not wired to a backend yet.** They currently show a
   polite "please call" notice on submit. To make them live: sign up for a form service
   (Formspree, Basin, Web3Forms…), set the `action` URL on the `<form>` in
   `contact.html` / `newsletter.html`, and remove the `data-placeholder="true"` attribute.
2. **Patient forms** (`treatments.html`) currently link to the two Word documents on the
   existing site (acu4you.net/forms/…). When migrating hosting, copy those .doc files
   into a `forms/` folder here and change the links to `forms/…`.
3. **About page bio** — there's a `<!-- TODO -->` in `about.html` marking where to add
   Hilarey's training, credentials, and a photo (the old site never had a real bio).
4. **Quiz scoring** — each answer in `questionnaire.html` maps to an element via its
   radio `value` (wood/fire/earth/metal/water). Hilarey may want to review the mapping;
   it's editable right in the HTML.
5. **Wise Heart Connect link** (footer + links page) currently points to the YouTube
   channel — swap in the website URL once it's live.
6. Google Fonts (Cormorant Garamond, Crimson Pro, Ma Shan Zheng) load from the network;
   the site falls back to system serifs gracefully if offline.

## Hosting

Upload the whole folder (keeping `css/`, `js/`, `assets/` alongside the HTML files) to
any static host — Hostinger, Netlify, or the current server. `index.html` is the entry.

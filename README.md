# The Miles Whisperer — Landing Page

A single-page marketing site for **The Miles Whisperer**, a service that helps travelers redeem airline and hotel points for business- and first-class trips. Built with plain HTML, CSS, and a sprinkle of vanilla JS — no build step, no dependencies.

## Structure

```
.
├── index.html    # All page sections (hero, how it works, services, about, FAQ, contact)
├── styles.css    # Palette, typography, responsive layout
└── script.js     # Mobile nav, scroll reveal, contact-form → mailto
```

## Run it locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing the content

- **Brand name, copy, and pricing:** edit directly in `index.html`.
- **Colors and fonts:** CSS custom properties at the top of `styles.css` (`--navy`, `--gold`, `--font-display`, …).
- **Contact email:** search for `hello@themileswhisperer.com` in `index.html` and `script.js` and replace.

## Images

All imagery is **inline SVG illustrations** embedded directly in `index.html` — no network requests, no external hosts, works offline and on `file://`. The showcase tiles use themed gradient landscapes (city skyline, cathedral dome, tropical palm, mountains, icebergs, desert dunes), and the About section uses a stylized airplane-window view.

To swap in real photography later:

1. Find photos on [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), or your own library and save them to an `images/` folder.
2. In `index.html`, replace each `<svg class="tile-art">…</svg>` block with `<img src="images/your-photo.jpg" alt="Descriptive alt" loading="lazy" decoding="async">`.
3. The CSS selectors `.showcase__tile .tile-art` and `.about__media .about-art` already cover-size their children, so `<img>` replacements just need `width: 100%; height: 100%; object-fit: cover;` which you can add by swapping the class to `img` or adding a rule.
4. Update the `alt` attribute with a real description so screen-reader users get meaningful context.

## What's intentionally out of scope

- No backend — the contact form composes a `mailto:` link. Swap in Formspree / Netlify Forms when you want real submissions.
- No imagery — gradient hero and typographic layout keep the page fast and offline-friendly.
- No analytics, cookie banner, or legal pages — add when the business side is ready.

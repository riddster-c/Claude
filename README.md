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

The six showcase tiles use **real photography hotlinked from Unsplash's CDN** (`images.unsplash.com` / `plus.unsplash.com`). Unsplash photos are free for commercial use with no attribution required. The About section uses an inline SVG airplane-window illustration.

To swap a showcase photo:

1. Find a replacement on [Unsplash](https://unsplash.com). Right-click the large photo → **Copy image address** — the URL should start with `https://images.unsplash.com/photo-...` or `https://plus.unsplash.com/premium_photo-...`.
2. In `index.html`, find the relevant `<img class="tile-art" …>` inside `.showcase__grid` and replace its `src` with your new URL. Keep `w=1200` in the query string for a crisp tile.
3. Update the `alt` attribute with a real description so screen-reader users get meaningful context.

To self-host instead of hotlinking (recommended long-term — hotlinks can break if Unsplash rotates CDN paths):

1. Download each image, save it to an `images/` folder alongside `index.html`.
2. Swap each `src="https://images.unsplash.com/…"` for `src="images/your-photo.jpg"`.
3. The existing `.showcase__tile .tile-art { object-fit: cover; }` rule in `styles.css` handles sizing.

## What's intentionally out of scope

- No backend — the contact form composes a `mailto:` link. Swap in Formspree / Netlify Forms when you want real submissions.
- No analytics, cookie banner, or legal pages — add when the business side is ready.

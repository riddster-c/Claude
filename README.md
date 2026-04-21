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

Stock photos are hotlinked from [picsum.photos](https://picsum.photos) using seeded URLs (e.g. `https://picsum.photos/seed/whisper-tokyo/900/700`) — they load in any browser with internet access, no API key needed. The seeds are deterministic, so the same image appears every time.

To swap in curated, on-brand photography:

1. Find photos on [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), or your own library.
2. Replace each `https://picsum.photos/seed/...` URL in `index.html` with your chosen image URL. For Unsplash, the direct-image URL pattern is `https://images.unsplash.com/photo-{ID}?w=1200&q=80&auto=format&fit=crop`.
3. The hero backdrop URL lives in `styles.css` (search for `whisper-skyline`).
4. Update the `alt=""` attribute on each `<img>` with a real description once you know what the photo shows.

For fully offline use, download your chosen images into an `images/` folder and update the `src` paths accordingly.

## What's intentionally out of scope

- No backend — the contact form composes a `mailto:` link. Swap in Formspree / Netlify Forms when you want real submissions.
- No imagery — gradient hero and typographic layout keep the page fast and offline-friendly.
- No analytics, cookie banner, or legal pages — add when the business side is ready.

# The Miles Whisperer — Landing Page

A single-page publication site for **The Miles Whisperer**, an independent, Singapore-based award-travel newsletter. Built with plain HTML, CSS, and a sprinkle of vanilla JS — no build step, no dependencies. The site's single conversion goal is newsletter signups.

## Structure

```
.
├── index.html    # Hero, showcase, what's inside, value cards, about, insights, newsletter, waitlist, footer
├── styles.css    # Palette, typography, responsive layout
└── script.js     # Mobile nav, scroll reveal, newsletter form → mailto
```

## Run it locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Wiring up real newsletter signups

The two `.newsletter-form` blocks (final CTA section + footer) currently open a `mailto:hello@themileswhisperer.com` with the subscriber's email in the body. To switch to a real provider:

- **ConvertKit / Kit** — replace each `<form class="newsletter-form" novalidate>` with the embed markup ConvertKit generates. Keep the outer classes so the styles still apply, and delete the corresponding `.newsletter-form` submit handler in `script.js`.
- **Buttondown** — same idea; the embed action is `https://buttondown.email/api/emails/embed-subscribe/<username>`.
- **Substack** — Substack doesn't offer arbitrary HTML embeds; the cleanest option is to keep the current form and POST to their subscribe endpoint via fetch(), or link out to the Substack subscribe page as the button `href`.

The "Join the waitlist" CTA in the Concierge section is a `mailto:` link. Swap to a form when you're ready to collect structured waitlist entries.

## Editing the content

- **Copy, positioning, article titles:** edit directly in `index.html`.
- **Colors and fonts:** CSS custom properties at the top of `styles.css` (`--navy`, `--gold`, `--font-display`, …).
- **Contact email:** search for `hello@themileswhisperer.com` in `index.html` and `script.js` and replace.
- **Instagram handle:** search for `@themileswhisperer` and `instagram.com/themileswhisperer` and replace.

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

- **No paid services.** No pricing, no packages, no checkout — this is a publication, not a store.
- **No real newsletter backend by default** — see "Wiring up real newsletter signups" above.
- No analytics, cookie banner, or legal pages — add when the business side is ready.

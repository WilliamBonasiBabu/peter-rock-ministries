# Protecting the Peter Rock Ministries website and logo

Honest starting point: any public website can be copied by someone determined (anyone can screenshot it or "view source").
You cannot make copying impossible. You can make it harder, provable, and punishable. Do all three layers.

## Layer 1 - Already done in this redesign
- Copyright meta tags, a visible (c) 2026 notice and an ownership line in the footer, and a hidden ownership comment in every page.
- "logo" and "author" declared in the site's structured data (JSON-LD), so Google ties the emblem to your domain.
- Logo served only as web-size files (max 640px). The full-resolution original is NOT on the site.
- Images set to non-draggable (a small deterrent only).
- robots.txt blocks AI-training and bulk-scraper bots (only polite bots obey it).
- No right-click blocking, deliberately: it is trivially bypassed and makes the site worse for real visitors.

## Layer 2 - Do these yourself (most important)
1. Keep the master files private. Never upload Premium_Emblem_Logo_Design.svg; keep it with the designer-delivered originals.
   Ask your designer for a true vector (AI/SVG paths) version too. The SVG you sent contains a flat picture, not vector shapes.
2. Save dated proof of creation: the designer's invoice/emails, the original files with dates, and a signed
   "assignment of copyright" letter from the designer stating Peter Rock Ministries owns the logo. This matters more than anything else.
   If AI tools made the logo, keep the prompts and files too; ownership is weaker in that case, so trademark protection is extra important.
3. Trademark the name and emblem in India (Class 45 religious/spiritual services, Class 41 education/events).
   File at ipindia.gov.in or through a trademark attorney. Until registered, use the TM sign; use (R) only after registration.
4. Domain security: turn on domain lock and WHOIS privacy, enable two-factor login at the registrar, turn on auto-renew.
5. Use Cloudflare (free plan): turn on Hotlink Protection, Bot Fight Mode, and Always Use HTTPS.
   This stops others embedding your images and blocks many scrapers.
6. Social profiles: use the same logo on YouTube/WhatsApp Business so your original is the earliest dated copy online.
7. Watermark sermon photos/videos with a small corner mark.

## Layer 3 - Monitoring and action
- Every 2-3 months, upload the logo to Google Lens / images.google.com (search by image) and TinEye to find copies.
- Set a Google Alert for "Peter Rock Ministries" and for a distinctive sentence from your story page in quotes.
- If you find a copy: (a) screenshot with date and URL, (b) email the site owner, (c) report to their host
  (find it at who.is / lookup.icann.org) using the host's abuse/copyright form, (d) report to Google
  (search "Google DMCA removal request"), (e) if it persists, send a legal notice through a lawyer.

## What NOT to rely on
JavaScript "protection", disabling text selection, or encrypting HTML. These are bypassed in seconds and hurt accessibility and SEO.

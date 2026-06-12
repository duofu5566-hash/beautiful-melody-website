# Beautiful Melody SEO Workflow

## Default Operating Rule

- When the user sends screenshots or asks about Google Search Console, Cloudflare, Google Analytics, or live website checks, use the browser workflow first whenever available.
- If login is required, use the user's already logged-in browser session and continue from the current page or screenshot context.
- For website changes, update the local project, commit to GitHub, and let Cloudflare deploy automatically.
- After deployment, always verify the live bfmedi.com page, sitemap, or related file.

## Google Search Console

Primary property:

- `bfmedi.com`
- Prefer the Domain property. If only a URL-prefix property exists, inspected URLs must match that exact prefix.

Priority URLs for URL Inspection:

- `https://bfmedi.com/`
- `https://bfmedi.com/products/peptide-aesthetic-products.html`
- `https://bfmedi.com/markets/united-states/`
- `https://bfmedi.com/markets/thailand/`
- `https://bfmedi.com/markets/mexico/`
- `https://bfmedi.com/markets/vietnam/`

Indexing workflow:

1. Open Google Search Console.
2. Enter the full URL in URL Inspection.
3. If it says `URL is on Google` but the page was recently changed, click `REQUEST INDEXING`.
4. If it says the URL is not on Google, click `TEST LIVE URL` first, then click `REQUEST INDEXING` if the live test passes.
5. Do not submit too many URLs at once. Prioritize the homepage, peptide product page, and key country pages.

## Sitemap

Live sitemap:

- `https://bfmedi.com/sitemap.xml`

After adding pages or making major SEO changes:

1. Update `sitemap.xml` and `public/sitemap.xml`.
2. Update `<lastmod>` to the current date.
3. Confirm the sitemap includes the new or updated URLs.
4. Push to GitHub and wait for Cloudflare deployment.
5. Verify the live sitemap URL.
6. Submit or recheck the sitemap in Search Console.

## Current SEO Focus

Primary product theme:

- Peptide aesthetic products
- Peptide skin booster
- Peptide mesotherapy products
- Anti-aging peptide products
- OEM/private label peptide aesthetic products

Priority pages:

- `/products/peptide-aesthetic-products.html`
- `/markets/united-states/`
- `/markets/thailand/`
- `/markets/mexico/`
- `/markets/vietnam/`

Priority countries:

- United States
- Thailand
- Mexico
- Vietnam
- United Kingdom
- Dubai/UAE
- Australia
- Spain
- Malaysia

## SEO QA Checklist

- Page title, description, and keywords are updated.
- Visible keyword chips are natural and not pure keyword stuffing.
- WhatsApp inquiry links still work.
- JSON-LD structured data parses correctly.
- Sitemap URL count is correct.
- Live pages contain the new keywords.

## Common Search Console Notes

- `Data is processing, please check again in a day or two` is normal for a new Search Console property.
- `Couldn't fetch` for sitemap is often Google-side delay. First verify that `https://bfmedi.com/sitemap.xml` opens, then wait.
- `URL is not in property` usually means the wrong Search Console property is selected. Switch to `bfmedi.com`.

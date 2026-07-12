# Bing Webmaster Tools + IndexNow — Setup (growthescalators.com)

**Why this matters:** Bing's index is what feeds ChatGPT's (and Copilot's) web retrieval — so if we're not in Bing, we're invisible to ChatGPT. That's exactly the gap GA4 shows today (zero AI referrers). Getting into Bing and turning on IndexNow is the fastest path to AI-search visibility.

Owner: Jatin. One-time, ~10 minutes.

---

## 1. Sign in to Bing Webmaster Tools

1. Go to **https://www.bing.com/webmasters**
2. Click **Sign in** → **Sign in with Google**.
3. **Use the SAME Google account that owns our Google Search Console** (the account that has the `growthescalators.com` GSC property). Using the same account is what makes the one-click import in Step 2 work and inherit GSC's verification.

## 2. Add the site — Import from Google Search Console (fastest)

Importing carries over the existing GSC verification, so you skip DNS/HTML verification entirely.

1. On the "Add your site" / "Get started" screen, choose **Import from Google Search Console**.
2. Click **Import**, then approve the Google permission prompt.
3. Select **growthescalators.com** from the list of GSC properties and confirm the import.
4. Done — the property is added and verified in one step.

### Fallback — if the import fails (add + verify by DNS)

1. On the add-site screen, use **Add a site manually** and enter the **domain** property: `growthescalators.com` (the domain-level / `sc-domain:` property — not a single page URL).
2. Bing shows verification options. Choose **DNS (CNAME or TXT)**:
   - Add the **CNAME** (or **TXT**) record Bing gives you at the DNS host / registrar for `growthescalators.com`.
   - DNS can take a few minutes to a few hours to propagate.
3. Return to Bing and click **Verify**.
   - (HTML-file upload and meta-tag options also exist, but DNS on the domain property is cleanest and mirrors how GSC is verified.)

## 3. Submit the sitemap

1. In the left nav, open **Sitemaps**.
2. Click **Submit sitemap** and enter exactly:
   ```
   https://www.growthescalators.com/sitemap.xml
   ```
3. Submit. Bing fetches it and schedules crawls. A "Pending" status for a while is normal.

## 4. IndexNow — already verified via the key file in this repo

IndexNow is the instant-indexing protocol (Bing + Yandex). We ship the IndexNow ownership key in the site's `public/` folder, so **IndexNow verifies automatically once this branch is deployed** — there is nothing to click in the Bing UI.

- **Key:** `85e4c1e4229d47f8bed45289e8820ac6`
- **Key file (served publicly):** https://www.growthescalators.com/85e4c1e4229d47f8bed45289e8820ac6.txt
  (source in repo: `public/85e4c1e4229d47f8bed45289e8820ac6.txt` — contents is exactly the key)

Bing/Yandex fetch that URL to confirm we own the key, then accept our instant-index pings.

### Sending an instant-index ping (on-demand — run against the LIVE site only)

After publishing or meaningfully updating a page, from the repo root:

```bash
# Submit the core URL set (home + money pages + main routes):
npx tsx scripts/indexnow-ping.ts

# Or submit specific URLs (e.g. a new blog post):
npx tsx scripts/indexnow-ping.ts https://www.growthescalators.com/blog/your-new-post
```

The script POSTs to the shared IndexNow endpoint (`https://api.indexnow.org/indexnow`), which distributes the submission to Bing, Yandex, and other participating engines. It only has an effect against the live domain, because IndexNow fetches the key file above to verify ownership.

## 5. After setup — where to look

- **Bing WMT → URL Inspection / Site Explorer:** confirm pages are getting indexed.
- **Bing WMT → AI Performance report:** the only first-party data on ChatGPT/Copilot citations — check it periodically as our AI visibility grows.

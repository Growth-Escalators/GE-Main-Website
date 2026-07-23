import Script from 'next/script'

// GA4 property "Growth Escalators" (growthescalators.com), Measurement ID G-3WTBJEK0S9.
//
// This was previously assumed (see the old comment in lib/analytics.ts) to be
// injected "outside this codebase" via Google Search Console site verification.
// That's not how GA4 works — GSC verification does not install the gtag.js tag.
// The tag was never actually added anywhere, which is why GA4 reported
// "Data collection isn't active for your website." This component is the
// actual gtag.js bootstrap; lib/analytics.ts's trackLead() sends events
// through the window.gtag global this defines.
const GA_MEASUREMENT_ID = 'G-3WTBJEK0S9'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

import Script from 'next/script'

// GA4 property "Growth Escalators" (growthescalators.com), Measurement ID G-3WTBJEK0S9.
//
// Keep a tiny synchronous queue available from the first HTML parse so lead
// events can be recorded even before gtag.js arrives. The external Google
// script itself is non-critical to rendering and is intentionally loaded after
// the window load event. When gtag.js initializes it consumes the queued calls.
const GA_MEASUREMENT_ID = 'G-3WTBJEK0S9'

export default function GoogleAnalytics() {
  return (
    <>
      <script
        id="ga4-queue-bootstrap"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          `,
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

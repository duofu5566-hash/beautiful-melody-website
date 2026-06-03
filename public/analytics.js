(() => {
  const GA_MEASUREMENT_ID = "G-REPLACE-WITH-YOUR-ID";
  const isConfigured = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes("REPLACE");

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  if (!isConfigured) {
    window.bmAnalyticsReady = false;
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
  });

  window.bmAnalyticsReady = true;

  const getLinkLabel = (link) =>
    link.getAttribute("aria-label") ||
    link.textContent?.trim() ||
    link.closest("section")?.querySelector("h1,h2,h3")?.textContent?.trim() ||
    "WhatsApp";

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target?.closest?.("a[href*='wa.me/']");
      if (!link || typeof window.gtag !== "function") return;

      window.gtag("event", "whatsapp_click", {
        event_category: "lead",
        event_label: getLinkLabel(link),
        link_url: link.href,
        page_path: window.location.pathname,
        page_title: document.title,
        transport_type: "beacon",
      });
    },
    { capture: true }
  );
})();

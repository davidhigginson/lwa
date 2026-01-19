import siteData from "@/content/site.json";
import { absUrl, getSiteUrl } from "@/lib/seo";

export function OrganizationJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: siteData.name,
    url: getSiteUrl(),
    logo: absUrl("/images/logo.png"),
    sameAs: [siteData.social.facebook].filter(Boolean),
    foundingDate: String(siteData.yearFounded),
    identifier: siteData.registeredCharity
      ? {
          "@type": "PropertyValue",
          name: "Registered Charity Number",
          value: siteData.registeredCharity,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}





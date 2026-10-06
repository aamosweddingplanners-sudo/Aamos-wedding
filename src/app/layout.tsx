import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import FloatingCall from "@/components/layout/FloatingCall";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import { services } from "@/data/services";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site";
import "./globals.css";

const mapUrl = "https://maps.app.goo.gl/UBkZ5Eic6BT5xGGu5";
const logoPath = "/amos-logo-transparent.webp";
const socialImagePath = "/wedding-two.webp";
const logoUrl = `${SITE_URL}${logoPath}`;
const socialImageUrl = `${SITE_URL}${socialImagePath}`;
const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;
const webpageId = `${SITE_URL}/#webpage`;
const breadcrumbId = `${SITE_URL}/#breadcrumb`;
const contactAction = {
  "@type": "ContactAction",
  target: {
    "@type": "EntryPoint",
    urlTemplate: WHATSAPP_URL,
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aamos Wedding Planners | Erumeli, Kerala",
    template: "%s | Aamos Wedding Planners",
  },
  description:
    "Aamos Wedding Planners creates thoughtful, elegant weddings, destination celebrations and family events in Erumeli, Kerala.",
  keywords: [
    "wedding planner in Erumeli",
    "wedding planner in Kerala",
    "Erumeli wedding planner",
    "destination wedding planning Kerala",
    "wedding decoration Erumeli",
    "event planning Kerala",
    "Aamos Wedding Planners",
  ],
  applicationName: "Aamos Wedding Planners",
  authors: [{ name: "Aamos Wedding Planners" }],
  creator: "Aamos Wedding Planners",
  publisher: "Aamos Wedding Planners",
  category: "wedding planning",
  alternates: { canonical: SITE_URL },
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Aamos Wedding Planners",
    url: SITE_URL,
    title: "Aamos Wedding Planners | Erumeli, Kerala",
    description:
      "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
    images: [{ url: socialImageUrl, alt: "Aamos Wedding Planners celebration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamos Wedding Planners | Erumeli, Kerala",
    description:
      "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "content-language": "en-IN",
    "geo.region": "IN-KL",
    "geo.placename": "Erumeli, Kerala, India",
    "geo.position": "9.4710933;76.7650384",
    ICBM: "9.4710933, 76.7650384",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: "Aamos Wedding Planners",
      url: SITE_URL,
      description:
        "Wedding planning, destination celebrations, decor styling and event coordination in Erumeli, Kerala.",
      logo: logoUrl,
      image: [socialImageUrl],
      telephone: "+91 6235314140",
      email: "aamosweddingplanners@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Erumeli",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Erumeli" },
        { "@type": "State", name: "Kerala" },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.4710933,
        longitude: 76.7650384,
      },
      hasMap: mapUrl,
      sameAs: ["https://www.instagram.com/aamos_weddingplanners?stkn=eDM4ZWM5cTM3ODZv"],
      serviceType: services.map((service) => service.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aamos Wedding Planning Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": businessId },
            areaServed: { "@type": "State", name: "Kerala" },
          },
        })),
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 6235314140",
        contactType: "customer service",
        availableLanguage: ["English", "Malayalam"],
      },
      potentialAction: contactAction,
      knowsAbout: [
        "Wedding planning",
        "Destination weddings",
        "Wedding decor and styling",
        "Guest management",
        "Photography coordination",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: "Aamos Wedding Planners",
      description:
        "Wedding planning and celebration design for couples and families in Erumeli, Kerala.",
      inLanguage: "en-IN",
      publisher: { "@id": businessId },
      potentialAction: contactAction,
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE_URL,
      name: "Aamos Wedding Planners | Erumeli, Kerala",
      description:
        "Thoughtful wedding planning, destination celebrations and elegant family events in Erumeli, Kerala.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": websiteId,
      },
      about: { "@id": businessId },
      mainEntity: { "@id": businessId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: socialImageUrl,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".heroTitle", ".heroText", ".contactLead"],
      },
      potentialAction: contactAction,
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#services`,
      url: `${SITE_URL}/#services`,
      name: "Aamos Wedding Planners services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          serviceType: service.title,
          provider: { "@id": businessId },
          areaServed: { "@type": "State", name: "Kerala" },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}

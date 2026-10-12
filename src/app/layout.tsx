import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1F3A34",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayareynoldspsyd.com"),
  title: {
    default: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },
  description:
    "Grounded, evidence-based psychotherapy for high-achieving adults in Santa Monica and across California via telehealth. Specializing in anxiety, panic, trauma, burnout, and perfectionism.",
  keywords: [
    "anxiety therapist Santa Monica",
    "trauma therapy Santa Monica CA",
    "EMDR therapist Santa Monica",
    "burnout therapy Los Angeles",
    "therapy for high-achieving adults",
    "telehealth therapist California",
    "licensed clinical psychologist Santa Monica",
    "CBT psychologist Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  publisher: "Dr. Maya Reynolds, PsyD",
  alternates: {
    canonical: "https://www.mayareynoldspsyd.com",
  },
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica",
    description:
      "Psychotherapy for thoughtful adults carrying quiet exhaustion. In-person in Santa Monica and secure telehealth throughout California. Specializing in anxiety, panic, trauma, and burnout.",
    url: "https://www.mayareynoldspsyd.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/maya/dr-maya-reynolds.webp",
        width: 1000,
        height: 1250,
        alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica, California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description:
      "Grounded, evidence-based therapy for anxiety, panic, trauma, and burnout in Santa Monica, CA and statewide telehealth.",
    images: ["/images/maya/dr-maya-reynolds.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician", "LocalBusiness"],
    name: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
    legalName: "Dr. Maya Reynolds, PsyD",
    image: "https://www.mayareynoldspsyd.com/images/maya/dr-maya-reynolds.webp",
    url: "https://www.mayareynoldspsyd.com",
    description:
      "Private psychotherapy practice of Dr. Maya Reynolds, PsyD. Providing in-person psychological services in Santa Monica and secure telehealth for adults located in California.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0195,
      longitude: -118.4912,
    },
    medicalSpecialty: "Clinical Psychology",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Anxiety and Panic Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Trauma and PTSD Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "EMDR Therapy (Eye Movement Desensitization and Reprocessing)",
      },
      {
        "@type": "MedicalTherapy",
        name: "Burnout and Perfectionism Counseling",
      },
      {
        "@type": "MedicalTherapy",
        name: "Telehealth Psychotherapy in California",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Santa Monica",
      },
      {
        "@type": "AdministrativeArea",
        name: "California",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6F1E9] text-[#1D2623]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[#1F3A34] focus:text-[#F6F1E9] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A65A3B]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

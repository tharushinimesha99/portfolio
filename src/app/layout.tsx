import "@/styles/global.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tharushi Nimesha | Full Stack Developer Portfolio",
  description:
    "Tharushi Nimesha - BSc Software Engineering Student & Junior Full Stack Developer at Unwir Pvt Ltd. Specializing in React, Next.js, TypeScript, MongoDB. View my projects and experience.",
  keywords: [
    "Tharushi Nimesha",
    "Full Stack Developer",
    "Software Engineer",
    "Unwir Pvt Ltd",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Web Developer Sri Lanka",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Software Engineering Student",
  ].join(", "),
  authors: [{ name: "Tharushi Nimesha" }],
  creator: "Tharushi Nimesha",
  publisher: "Tharushi Nimesha",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "url",
    title: "Tharushi Nimesha | Full Stack Developer Portfolio",
    description:
      "Tharushi Nimesha - BSc Software Engineering Student & Junior Full Stack Developer at Unwir Pvt Ltd. Specializing in React, Next.js, TypeScript, MongoDB.",
    siteName: "Tharushi Nimesha Portfolio",
    images: [
      {
        url: "https://tharushi-nimesha.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tharushi Nimesha - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharushi Nimesha | Full Stack Developer Portfolio",
    description:
      "BSc Software Engineering Student & Junior Full Stack Developer specializing in modern web applications",
    images: ["https://tharushi-nimesha.netlify.app/og-image.jpg"],
    creator: "@tharushi_dev",
  },
  alternates: {
   canonical: "https://tharushi-nimesha.netlify.app",

  },
  category: "Technology",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "application-name": "Tharushi Nimesha Portfolio",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Tharushi Nimesha",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className={`${outfit.variable} overflow-x-hidden`}>
      <head>
        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tharushi Nimesha",
              jobTitle: "Full Stack Developer",
              url: "https://tharushi-nimesha.netlify.app",
              sameAs: [
                "https://www.linkedin.com/in/tharushi-nimesha/", // Replace with your LinkedIn
                "https://github.com/tharushinimesha99", // Replace with your GitHub
                //"https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ==", // Replace with your Twitter
              ],
              worksFor: {
                "@type": "Organization",
                name: "Unwir Pvt. Ltd.",
              },
              alumniOf: {
                "@type": "Organization",
                name: "SLIIT", // Replace with your university
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "Full Stack Development",
                "Software Engineering",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
              },
            }),
          }}
        />

        {/* Preload critical resources */}
        <link rel='preload' href='/banner5.jpg' as='image' />
        <link rel='preload' href='/favicon.png' as='image' />

        {/* DNS prefetch for external domains */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//fonts.gstatic.com' />
      </head>
      <body suppressHydrationWarning className='bg-black font-outfit overflow-x-hidden'>
        {children}
      </body>
    </html>
  );
}
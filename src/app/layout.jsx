import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Defy Aerospace: Drones for Humanity",
  description:
    "Defy Aerospace uses drones to solve real-world problems. From helping farmers improve crop health to training pilots and building smart UAVs, we make drone technology simple, useful, and impactful.",
  icons: {
    icon: "/images/defy-favicon.png",
  },
  keywords:
    "drones, UAV, DGCA approved drones, drone solutions, drone training, precision farming, smart cargo, drone logistics, drone research, drone technology, AI drones, automated delivery drones, Defy Aerospace, drone pilot training, drone farming, aerial logistics, urban air mobility, UAV supply chain, last-mile delivery, eco-friendly transport, remote delivery, advanced drone research, drone certifications, drone-based agriculture",
  author: "Defy Aerospace",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard",
  canonical: "https://defyaerospace.com/",
  openGraph: {
    title: "Defy Aerospace: Drones for Humanity",
    description:
      "Defy Aerospace uses drones to solve real-world problems. From helping farmers improve crop health to training pilots and building smart UAVs, we make drone technology simple, useful, and impactful.",
    url: "https://defyaerospace.com/",
    siteName: "Defy Aerospace",
    images: [
      {
        url: "/images/defydark.png",
        width: 1200,
        height: 630,
        alt: "Defy Aerospace Drone Technology",
      },
    ],
    type: "website",
  },
  socialHandles: {
    linkedin: "https://www.linkedin.com/company/defy-aerospace/",
    youtube: "https://www.youtube.com/@defyaerospace",
    instagram:
      "https://www.instagram.com/defyaerospace/?igsh=cXV3MHU1anJxd3E%3D#",
    facebook: "https://www.facebook.com/share/15CZEPKAPF/?mibextid=wwXIfr",
    whatsapp: "https://wa.me/919372027820",
  },
  contact: {
    phone: "+919372027820",
    email: "hello@defyaerospace.com",
    headOffice:
      "C-20, G Block Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    trainingAcademy:
      "Sri Sri Rural Development Program Skill Centre, Kanakapura Main Rd, near VKR quarters, Udayapura, Bengaluru, Karnataka 560082",
    researchCenter: "Sri Sri University, Cuttack, Odisha",
  },
  seoBestPractices: {
    structuredData: true,
    mobileFriendly: true,
    pageSpeedOptimized: true,
    secureSSL: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PHZZJRMV');
            `,
          }}
        />

        {/* Primary Meta Tags */}
        <meta name="title" content="Defy Aerospace: Drones for Humanity" />
        <meta
          name="description"
          content="Defy Aerospace uses drones to solve real-world problems. From helping farmers improve crop health to training pilots and building smart UAVs, we make drone technology simple, useful, and impactful."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://defyaerospace.com/" />
        <meta
          property="og:title"
          content="Defy Aerospace: Drones for Humanity"
        />
        <meta
          property="og:description"
          content="Defy Aerospace uses drones to solve real-world problems. From helping farmers improve crop health to training pilots and building smart UAVs, we make drone technology simple, useful, and impactful."
        />
        <meta
          property="og:image"
          content="https://defyaerospace.com/images/defydark.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://defyaerospace.com/" />
        <meta
          name="twitter:title"
          content="Defy Aerospace: Drones for Humanity"
        />
        <meta
          name="twitter:description"
          content="Defy Aerospace uses drones to solve real-world problems. From helping farmers improve crop health to training pilots and building smart UAVs, we make drone technology simple, useful, and impactful."
        />
        <meta
          name="twitter:image"
          content="https://defyaerospace.com/images/defydark.png"
        />

        {/* Favicon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PHZZJRMV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}

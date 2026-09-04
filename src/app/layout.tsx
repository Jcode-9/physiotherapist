import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PhysioPro — Fizjoterapia i rehabilitacja",
    template: "%s | PhysioPro",
  },
  description:
    "Profesjonalna fizjoterapia, rehabilitacja i terapia manualna. Indywidualne podejście, nowoczesne metody i skuteczny powrót do sprawności.",
  keywords: [
    "fizjoterapia",
    "rehabilitacja",
    "terapia manualna",
    "fizjoterapeuta",
    "rehabilitacja sportowa",
  ],
  openGraph: {
    title: "PhysioPro — Fizjoterapia i rehabilitacja",
    description:
      "Profesjonalna fizjoterapia, rehabilitacja i terapia manualna. Indywidualne podejście i skuteczny powrót do sprawności.",
    type: "website",
    locale: "pl_PL",
    siteName: "PhysioPro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#f8fbff]">
        <LocalBusinessSchema/>
        <div id="top">
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute -left-56 -top-56 h-[700px] w-[700px] rounded-full bg-blue-400/25 blur-[160px]" />
            <div className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-cyan-400/15 blur-[180px]" />
          </div>
          <Navbar />
          <main className="pt-10 lg:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
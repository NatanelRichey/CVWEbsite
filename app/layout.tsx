import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Improves font loading performance
  preload: true,
});

export const metadata: Metadata = {
  title: "Natanel Richey - CV",
  description: "Interactive CV showcasing full-stack development projects, AI/ML expertise, and modern web technologies.",
  keywords: ["Full-Stack Developer", "AI", "Machine Learning", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Natanel Richey" }],
  creator: "Natanel Richey",
  openGraph: {
    title: "Natanel Richey - Software Engineer",
    description: "Interactive CV showcasing full-stack development projects and AI/ML expertise",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Viewport configuration (Next.js 15+ requirement)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${saira.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientOnly from "@/providers/Client";
import Footer from "./scenes/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AF Rack Installations",
  description: "Built by angelDova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="theme-switcher"
          strategy="afterInteractive"
        >{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
`}</Script>
        <ClientOnly>
          <main className="bg-white dark:bg-black/90 w-full min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ClientOnly>
      </body>
    </html>
  );
}

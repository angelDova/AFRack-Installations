import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
import ClientOnly from "@/providers/Client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AF Rack Installation",
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
          <main className="bg-light dark:bg-dark w-full min-h-screen">
            <Navbar />

            {children}

            <Footer />
          </main>
        </ClientOnly>
      </body>
    </html>
  );
}

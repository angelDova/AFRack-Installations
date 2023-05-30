import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientOnly from "@/providers/Client";
import Footer from "./scenes/Footer";

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
        <ClientOnly>
          <Navbar />
          {children}
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}

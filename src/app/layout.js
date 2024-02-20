import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { NextAuthProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Hompage",
    template: "%s  Next.js 14",
  },
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}

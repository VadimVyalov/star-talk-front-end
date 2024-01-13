import "./globals.css";


import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Bree_Serif, Montserrat, Roboto_Slab } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-montserrat', })
const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: 'swap', variable: '--font-roboto', })
const bree_serif = Bree_Serif({ subsets: ["latin"], weight: "400", variable: '--font-bree', })



export const metadata: Metadata = {
  title: "Star Talk",
  description: "English school",

  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true
  // }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} ${bree_serif.variable} `}>
        {/* <body> */}
        <Header />

        <main>{children}</main>
        <Footer />
        <div id="modal-root"></div>
      </body>

    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Bree_Serif, Montserrat, Roboto_Slab } from "next/font/google";

import Header from "@/components/Header";


const montserrat=Montserrat({subsets:["latin"], weight:["400","500","600","700"], variable:'--font-montserrat',})
const roboto=Roboto_Slab({subsets:["latin"], weight:["400","500","600","700"], variable:'--font-roboto',})
const bree_serif=Bree_Serif({subsets:["latin"],  variable: '--font-bree',  weight: "400"})
export const metadata: Metadata = {
  title: "Star Talk",
  description: "English school",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} ${bree_serif.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

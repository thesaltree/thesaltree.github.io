import type { Metadata } from "next";
import { Inter, Lora, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira"
});

export const metadata: Metadata = {
  title: "Saloni Agarwal",
  description: "Personal website, curriculum vitae, and blog of Saloni Agarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${firaCode.variable}`}>
      <body className="antialiased font-serif">
        {children}
      </body>
    </html>
  );
}


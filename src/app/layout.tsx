import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Importando a fonte Poppins
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins", // Nome da variável CSS para a fonte Poppins
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos que você precisa
});

export const metadata: Metadata = {
  title: "Cacauero",
  description: "Chocolate de origem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

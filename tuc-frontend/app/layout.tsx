import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import Footer from "./components/reusable-components/Footer";
import NavBar from "./components/reusable-components/NavBar";
import { CreateTop10ModalProvider } from "./context/CreateTop10ModalContext";
import CreateTop10Modal from "./components/modal/CreateTop10Modal";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TUC TOP10 SYSTEM",
  description: "A system for managing and tracking tasks, projects, and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${lato.className} antialiased bg-gray-50 text-gray-900`}
      >
        <CreateTop10ModalProvider>
          <NavBar />
          {children}
          <Footer />
          <CreateTop10Modal />
        </CreateTop10ModalProvider>
      </body>
    </html>
  );
}

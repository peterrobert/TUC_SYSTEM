import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata = {
  title: "TUC WEBSITE",
  description: "The official website of the TUC System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${crimson.variable} font-serif bg-pale-blue  text-dark-gray antialiased `}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

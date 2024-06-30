import {Fjalla_One, Bebas_Neue} from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "My Portfolio",
  description: "Discover about me through my modern portfolio site",
};

const fjalla = Fjalla_One({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-fjalla_one',
}) 
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-bebas_neue',
}) 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fjalla.variable} ${bebas.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

        <Navbar/>
        <Providers>
          {children}
        </Providers>

        </ThemeProvider>
        </body>
    </html>
  );
}
